import { cn } from "@/lib/utils";
import { twJoin } from "tailwind-merge";
import Rectangle3 from "./elements/Rectangle3";
import Rectangle4 from "./elements/Rectangle4";
import Vector19 from "./elements/Vector19";
import Vector22 from "./elements/Vector22";
import Vector23 from "./elements/Vector23";
import Vector24 from "./elements/Vector24";

const desktopClassName = "hidden xl:block";

const HeroBgDesktop = () => {
  return (
    <>
      <div className={cn(desktopClassName, "size-full absolute z-[2]")}>
        <Vector19 />
        <Vector22 />
        <Vector23 />
        <Vector24 />
      </div>

      <Rectangle3 className={twJoin(desktopClassName, "z-[3]")} />
      <Rectangle4 className={twJoin(desktopClassName, "z-[3]")} />
    </>
  );
};

export default HeroBgDesktop;
