"use client";
import { cn } from "@/lib/utils";
import { IconPlayerPlay } from "@tabler/icons-react";
import {
  DetailedHTMLProps,
  forwardRef,
  useCallback,
  useRef,
  VideoHTMLAttributes,
} from "react";

import { useEffect, useState } from "react";

const Video = forwardRef<
  HTMLVideoElement,
  DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
>(function Video(
  props: DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >,
  forwardedRef
) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const setRefs = useCallback(
    (node: HTMLVideoElement | null) => {
      videoRef.current = node;
      if (!forwardedRef) return;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else forwardedRef.current = node;
    },
    [forwardedRef]
  );

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  }, []);

  const {
    onClick,
    onPlay,
    onPause,
    onEnded,
    className,
    controls: controlsProp,
    ...rest
  } = props;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsPlaying(!video.paused && !video.ended);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <>
      <video
        ref={setRefs}
        {...rest}
        controls={controlsProp ?? isPlaying}
        className={className}
        onClick={(e) => {
          onClick?.(e);
          // If native controls are explicitly enabled, let the browser handle clicks.
          if (!controlsProp) togglePlayPause();
        }}
        onPlay={(e) => onPlay?.(e)}
        onPause={(e) => onPause?.(e)}
        onEnded={(e) => onEnded?.(e)}
      />
      <div
        className={cn(
          "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 cursor-pointer rounded-xl pointer-events-none group-hover/video:pointer-events-auto",
          isPlaying && "hidden"
        )}
        // style={{
        //   boxShadow:
        //     "0px 4px 8px -2px rgba(16, 15, 36, 0.10), 0px 2px 4px -2px rgba(16, 15, 36, 0.06)",
        //   backdropFilter: "blur(5px)",
        // }}
        onClick={() => togglePlayPause()}
      >
        <div className="size-[104px] rounded-full flex items-center justify-center bg-[#11182782] relative">
          <IconPlayerPlay className="size-10 text-white" fill="white" />
        </div>
      </div>
    </>
  );
});
export default Video;
