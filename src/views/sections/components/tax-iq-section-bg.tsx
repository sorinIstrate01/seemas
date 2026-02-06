import React from "react";
import Group24 from "../elements/group-24";
import Group25 from "../elements/group-25";
import Group24Mobile from "../elements/group-24-mobile";
import Group25Mobile from "../elements/group-25-mobile";
import Spline from "@splinetool/react-spline/next";

const TaxIQSectionBg = () => {
  return (
    <div className="absolute inset-0 z-[1]">
      <Group24 className="absolute top-0 left-0 z-[3] xl:top-[18px] xl:left-[18px] hidden md:block" />
      <Group25 className="absolute top-0 right-0 z-[3] xl:top-[18px] xl:right-[18px] hidden md:block" />
      <Group24Mobile className="absolute top-0 left-0 z-[3] block md:hidden" />
      <Group25Mobile className="absolute top-0 right-0 z-[3] block md:hidden" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(250,250,250,0.85)_0%,#FAFAFA_80.45%)] z-[2]" />
      <Spline
        scene="https://prod.spline.design/qlQk6AFy0d3Gtc-4/scene.splinecode"
        className="absolute inset-0 z-[1] pointer-events-none"
      />
    </div>
  );
};

export default TaxIQSectionBg;
