"use client";

import React from "react";
import Spline from "@splinetool/react-spline";

/**
 * Overview-scoped background, same as home PlatformBackground.
 * Kept as a client component to avoid Server Component build errors.
 */
const PlatformBackground = () => {
  return (
    <div className="absolute inset-0 z-[1]">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#FAFAFA_64.72%,rgba(250,250,250,0.85)_125.15%)] z-[2]" />
      <Spline
        scene="https://prod.spline.design/qlQk6AFy0d3Gtc-4/scene.splinecode"
        className="absolute inset-0 z-[1] pointer-events-none top-[-75px] md:top-0"
      />
    </div>
  );
};

export default PlatformBackground;

