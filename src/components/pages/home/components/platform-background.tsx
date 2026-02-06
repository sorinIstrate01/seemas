"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";

interface PlatformBackgroundProps {
  platformBackgroundClassName?: string;
  splineClassName?: string;
}



const PlatformBackground = ({ platformBackgroundClassName, splineClassName }: PlatformBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-[1]">
      <div className={cn("absolute inset-0 bg-[linear-gradient(0deg,#FAFAFA_35%,rgba(250,250,250,0.85)_80.45%)] md:bg-[linear-gradient(0deg,#FAFAFA_0%,rgba(250,250,250,0.85)_80.45%)] z-[2]", platformBackgroundClassName)} />
      <Spline
        scene="https://prod.spline.design/qlQk6AFy0d3Gtc-4/scene.splinecode"
        className={cn("absolute inset-0 z-[1] pointer-events-none top-[-75px] md:top-0", splineClassName)}
      />
    </div>
  );
};

export default PlatformBackground;