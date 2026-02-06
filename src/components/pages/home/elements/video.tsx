"use client";
import { cn } from "@/lib/utils";
import { IconPlayerPlay } from "@tabler/icons-react";
import { DetailedHTMLProps, useRef, VideoHTMLAttributes } from "react";

import { useState } from "react";

const Video = (
  props: DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <>
      <video
        ref={videoRef}
        {...props}
        controls={isPlaying}
        onClick={handleVideoClick}
      />
      <div
        className={cn(
          "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-xl",
          isPlaying && "hidden"
        )}
        style={{
          boxShadow:
            "0px 4px 8px -2px rgba(16, 15, 36, 0.10), 0px 2px 4px -2px rgba(16, 15, 36, 0.06)",
          backdropFilter: "blur(5px)",
        }}
        onClick={handleVideoClick}
      >
        <div className="size-20 rounded-full flex items-center justify-center border border-[#40404034] bg-[#40404033] relative">
          <IconPlayerPlay className="size-10 text-white" fill="white" />
          <span className="text-body-m text-white absolute -bottom-2 translate-y-full">
            Play video
          </span>
        </div>
      </div>
    </>
  );
};
export default Video;
