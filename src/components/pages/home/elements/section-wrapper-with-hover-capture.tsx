"use client";
import SectionWrapper, {
  SectionWrapperProps,
} from "@/components/sections/section-wrapper";

const SectionWrapperWithHoverCapture = (props: SectionWrapperProps) => {
  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    if (!target.hasAttribute("data-hovered")) {
      target.setAttribute("data-hovered", "true");
    }
  };

  return <SectionWrapper {...props} onMouseEnter={handleMouseEnter} />;
};
export default SectionWrapperWithHoverCapture;
