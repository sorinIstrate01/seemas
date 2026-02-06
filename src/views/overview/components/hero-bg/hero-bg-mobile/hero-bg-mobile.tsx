import { cn } from "@/lib/utils";
import { twJoin } from "tailwind-merge";
import Rectangle3 from "./elements/Rectangle3";
import Rectangle4 from "./elements/Rectangle4";
import Vector22 from "./elements/Vector22";
import Vector24 from "./elements/Vector24";

const mobileClassName = "block md:hidden";

const HeroBgMobile = () => {
  return (
    <>
      <div className={cn(mobileClassName, "size-full absolute z-[1]")}>
        <Vector22 />
        <Vector24 />
      </div>

      <Rectangle3 className={twJoin(mobileClassName, "z-[3]")} />
      <Rectangle4 className={twJoin(mobileClassName, "z-[3]")} />
    </>
  );
};

export default HeroBgMobile;
