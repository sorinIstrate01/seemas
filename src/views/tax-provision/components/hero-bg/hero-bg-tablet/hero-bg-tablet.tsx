import React from "react";
import Ellipse65 from "./elements/Ellipse65";
import Ellipse64 from "./elements/Ellipse64";
import Vector18 from "./elements/Vector18";
import Vector19 from "./elements/Vector19";
import Vector24 from "./elements/Vector24";
import Vector23 from "./elements/Vector23";
import Vector22 from "./elements/Vector22";
import Vector21 from "./elements/Vector21";

const HeroBgDesktop = () => {
  return (
    <div className="h-full w-full absolute hidden md:block xl:hidden pointer-events-none">
      <Ellipse65 />
      <Ellipse64 />

      <Vector18 />
      <Vector19 />
      <Vector21 />
      <Vector22 />
      <Vector23 />
      <Vector24 />
    </div>
  );
};

export default HeroBgDesktop;
