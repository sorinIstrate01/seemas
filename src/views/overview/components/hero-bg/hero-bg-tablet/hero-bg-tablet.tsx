import { cn } from "@/lib/utils";
import { twJoin } from "tailwind-merge";
import Rectangle3 from "./elements/Rectangle3";
import Rectangle4 from "./elements/Rectangle4";
import Vector19 from "./elements/Vector19";
import Vector22 from "./elements/Vector22";
import Vector23 from "./elements/Vector23";
import Vector24 from "./elements/Vector24";

const tabletClassName = "hidden md:block xl:hidden";

const HeroBgTablet = () => {
  return (
    <>
      <div className={cn(tabletClassName, "size-full absolute z-[1]")}>
        <Vector19 />
        <Vector22 />
        <Vector23 />
        <Vector24 />
      </div>
      <Rectangle3 className={twJoin(tabletClassName, "z-[3]")} />
      <Rectangle4 className={twJoin(tabletClassName, "z-[3]")} />
    </>
  );
};

export default HeroBgTablet;
