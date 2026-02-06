"use client";

import Video from "@/components/custom-ui/video";
import { cn } from "@/lib/utils";
import {
  IconChartInfographic,
  IconFileDescription,
  IconFileShredder,
  IconSettings,
  IconChevronsRight,
} from "@tabler/icons-react";
import PlatformBackground from "./platform-background";

import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface ScrollableVideoProps {
  videoFilePath: string;
  cards: {
    title: string;
    description: string;
    iconKey: "fileShredder" | "settings" | "chart" | "fileDescription";
    timestamp: [string, string];
  }[];
}

function toPublicVideoSrc(videoFilePath: string): string {
  const raw = (videoFilePath ?? "").trim();
  if (!raw) return "";

  // Allow remote URLs as-is
  if (/^https?:\/\//i.test(raw)) return raw;

  // Normalize Windows paths and remove any leading workspace path up to /public/
  const normalized = raw.replaceAll("\\", "/");

  const publicIdx = normalized.toLowerCase().lastIndexOf("/public/");
  if (publicIdx !== -1) {
    return normalized.slice(publicIdx + "/public".length);
  }

  // Handle "public/..." or "/public/..."
  if (normalized.toLowerCase().startsWith("public/")) {
    return `/${normalized.slice("public/".length)}`;
  }
  if (normalized.toLowerCase().startsWith("/public/")) {
    return normalized.slice("/public".length);
  }

  // Already looks like a public URL path
  if (normalized.startsWith("/")) return normalized;

  // Relative -> treat as public-relative
  return `/${normalized}`;
}

function parseTimestampToSeconds(value: string): number {
  // Supports "SS", "MM:SS", "HH:MM:SS"
  const trimmed = value.trim();
  const parts = trimmed.split(":").map((p) => Number(p));
  if (parts.some((n) => Number.isNaN(n))) return 0;

  if (parts.length === 1) return parts[0] ?? 0;
  if (parts.length === 2) return (parts[0] ?? 0) * 60 + (parts[1] ?? 0);
  return (parts[0] ?? 0) * 3600 + (parts[1] ?? 0) * 60 + (parts[2] ?? 0);
}

function clamp01(n: number) {
  if (n <= 0) return 0;
  if (n >= 1) return 1;
  return n;
}

// Small tolerance for float timing so the active card can show 100% exactly at
// the segment boundary, without visibly "waiting" before switching.
const ACTIVE_END_EPSILON_SECONDS = 0.001;

const ScrollableVideo: FC<ScrollableVideoProps> = ({
  videoFilePath,
  cards,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const cardsScrollerRef = useRef<HTMLDivElement | null>(null);
  const cardButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const prevActiveIndexRef = useRef<number | null>(null);

  const [isXL, setIsXL] = useState(true);

  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node;
    setVideoEl(node);
  }, []);

  const [videoWrapperEl, setVideoWrapperEl] = useState<HTMLDivElement | null>(
    null
  );

  const userPausedRef = useRef(false);
  const pausedByScrollRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1360px)");
    const onChange = () => setIsXL(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const videoSrc = useMemo(
    () => toPublicVideoSrc(videoFilePath),
    [videoFilePath]
  );

  const segments = useMemo(() => {
    return cards.map((c) => {
      const start = parseTimestampToSeconds(c.timestamp[0]);
      const end = parseTimestampToSeconds(c.timestamp[1]);
      return {
        ...c,
        start,
        end: Math.max(end, start),
        duration: Math.max(end - start, 0.0001),
      };
    });
  }, [cards]);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progressByIndex, setProgressByIndex] = useState<number[]>(() =>
    cards.map(() => 0)
  );

  useEffect(() => {
    setProgressByIndex(cards.map(() => 0));
    setActiveIndex(0);
  }, [cards]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateFromVideo = () => {
      const t = video.currentTime;
      const lastEnd = segments[segments.length - 1]?.end;
      if (typeof lastEnd === "number" && t >= lastEnd) {
        video.currentTime = segments[0]?.start ?? 0;
        return;
      }

      let nextActive = 0;
      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];

        // If we're before the next segment starts, keep upcoming as active.
        if (t < seg.start) {
          nextActive = i;
          break;
        }

        // Treat segment end as inclusive within a tiny tolerance so the active
        // progress bar can hit 100% right at boundaries.
        if (t < seg.end + ACTIVE_END_EPSILON_SECONDS) {
          nextActive = i;
          break;
        }

        // Otherwise we've fully passed this segment.
        nextActive = i;
      }

      setActiveIndex(nextActive);
      setProgressByIndex(
        segments.map((seg) => {
          if (t <= seg.start) return 0;
          if (t >= seg.end) return 1;
          return clamp01((t - seg.start) / seg.duration);
        })
      );
    };

    const startLoop = () => {
      if (rafIdRef.current != null) return;
      const loop = () => {
        rafIdRef.current = requestAnimationFrame(loop);
        updateFromVideo();
      };
      rafIdRef.current = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      if (rafIdRef.current == null) return;
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
      updateFromVideo();
    };

    const onLoaded = () => updateFromVideo();
    const onSeeked = () => updateFromVideo();
    const onPlay = () => startLoop();
    const onPause = () => stopLoop();
    const onEnded = () => {
      stopLoop();
      video.currentTime = segments[0]?.start ?? 0;
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    // Initial sync (and start loop if autoplayed)
    updateFromVideo();
    if (!video.paused) startLoop();

    return () => {
      stopLoop();
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, [segments]);

  useEffect(() => {
    const wrapper = videoWrapperEl;
    const video = videoEl;
    if (!wrapper || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          if (video.paused && !userPausedRef.current) {
            // Autoplay only when in view (muted by default for browser policy).
            void video.play().catch(() => {});
          }
        } else {
          // Pause when scrolled out of view.
          if (!video.paused) {
            pausedByScrollRef.current = true;
            video.pause();
          }
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [videoSrc, videoEl, videoWrapperEl]);

  useEffect(() => {
    if (isXL) return;
    const scroller = cardsScrollerRef.current;
    const activeEl = cardButtonRefs.current[activeIndex];
    if (!scroller || !activeEl) return;

    const getLeftInScroller = (el: HTMLElement) => {
      const elRect = el.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      return elRect.left - scrollerRect.left + scroller.scrollLeft;
    };

    const prevIdx = prevActiveIndexRef.current;
    prevActiveIndexRef.current = activeIndex;

    // First run: align current active to left edge.
    if (prevIdx == null) {
      scroller.scrollTo({
        left: getLeftInScroller(activeEl),
        behavior: "smooth",
      });
      return;
    }

    // Looping back to the start: animate back to start.
    if (activeIndex === 0 && prevIdx !== 0) {
      scroller.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    const prevEl = cardButtonRefs.current[prevIdx];
    if (!prevEl) {
      scroller.scrollTo({
        left: getLeftInScroller(activeEl),
        behavior: "smooth",
      });
      return;
    }

    // Carousel effect: scroll so the new active card takes the old active card's position.
    const prevLeft = getLeftInScroller(prevEl);
    const nextLeft = getLeftInScroller(activeEl);
    const delta = nextLeft - prevLeft;

    scroller.scrollBy({ left: delta, behavior: "smooth" });
  }, [activeIndex, isXL]);

  const iconByKey = useMemo(() => {
    return {
      fileShredder: IconFileShredder,
      settings: IconSettings,
      chart: IconChartInfographic,
      fileDescription: IconFileDescription,
    } as const;
  }, []);

  const seekToStart = (index: number) => {
    const video = videoRef.current;
    if (!video) return;
    const seg = segments[index];
    if (!seg) return;

    // Seek without forcing play state (keeps paused videos paused).
    video.currentTime = seg.start;
  };

  return (
    <div className="relative flex flex-col gap-6 p-6 rounded-2xl border border-[#F5F5F5] overflow-hidden xl:p-8">
        <div className="absolute inset-0 z-[2]">
            <PlatformBackground />      
        </div>
        <div className="relative z-[3]">
          <div
            ref={cardsScrollerRef}
            className="flex overflow-x-auto xl:overflow-visible -mr-8 pr-8 xl:mr-0 xl:pr-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:gap-[2px]"
          >
            {segments.map((card, idx) => {
            const Icon = iconByKey[card.iconKey];
            const isActive = idx === activeIndex;
            const progress = progressByIndex[idx] ?? 0;

            return (
                <React.Fragment key={`${card.title}-${idx}`}>
                  <button
                      ref={(el) => {
                        cardButtonRefs.current[idx] = el;
                      }}
                      type="button"
                      onClick={() => seekToStart(idx)}
                      className={cn(
                      "group relative text-left rounded-xl overflow-hidden transition p-4 border border-white border-2 flex-none w-[200px] md:w-[286px] xl:p-6 xl:flex-1 xl:w-auto",
                      )}
                      style={{
                        backgroundColor: isActive ? "white" : "transparent",
                      }}
                  >
                  <div className="flex flex-col gap-2 xl:gap-3 h-full">
                      <div className="flex items-center gap-2">
                        <div
                            className={cn(
                            "text-blue-primary [&_svg]:size-6 xl:[&_svg]:size-8 [&_svg]:stroke-1"
                            )}
                            aria-hidden="true"
                        >
                            <Icon />
                        </div>
                        <p className="text-zinc-800 text-subtitle-xs xl:hidden">
                            {card.title}
                        </p>
                      </div>

                    <div className="flex flex-col gap-3">
                    <p className="text-zinc-800 text-subtitle-xs xl:text-subtitle-m hidden xl:block">
                        {card.title}
                    </p>
                    <p className="text-zinc-700 text-body-s">
                        {card.description}
                    </p>
                    </div>
                </div>

                <div 
                className={cn(
                    "absolute left-0 right-0 bottom-0 h-[3px]",
                    isActive ? "block" : "hidden"
                )}>
                    <div
                    className={cn(
                        "h-full origin-left will-change-transform",
                        isActive ? "bg-blue-primary" : "hidden"
                    )}
                    style={{ transform: `scaleX(${clamp01(progress)})` }}
                    />
                </div>
                </button>
                {idx < segments.length - 1 && (
                  <div className="flex items-center justify-center flex-none">
                    <IconChevronsRight className="w-5 h-5 text-gray-400" />
                  </div>
                )}
                </React.Fragment>
            );
            })}
          </div>
        </div>

        <div
            ref={setVideoWrapperEl}
            className="relative group/video rounded-2xl overflow-hidden bg-white bg-opacity-60 border border-white p-3 rounded-xl relative z-[3]"
        >
            <Video
            ref={setVideoRef}
            src={videoSrc}
            className="w-full h-auto rounded-2xl"
            preload="metadata"
            playsInline
            controls={false}
            muted={true}
            onPause={() => {
                // Distinguish user pause vs scroll-triggered pause.
                if (pausedByScrollRef.current) {
                pausedByScrollRef.current = false;
                return;
                }
                userPausedRef.current = true;
            }}
            onPlay={() => {
                userPausedRef.current = false;
            }}
            />
        </div>
    </div>
  );
};

export default ScrollableVideo;
