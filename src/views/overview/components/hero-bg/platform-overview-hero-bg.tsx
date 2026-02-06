import React from "react";
import HeroBgDesktop from "./hero-bg-desktop/hero-bg-desktop";
import HeroBgMobile from "./hero-bg-mobile/hero-bg-mobile";
import HeroBgTablet from "./hero-bg-tablet/hero-bg-tablet";

const PlatformOverviewHeroBg = () => {
  return (
    <>
      <HeroBgMobile />
      <HeroBgTablet />
      <HeroBgDesktop />
    </>
  );
};

export default PlatformOverviewHeroBg;
