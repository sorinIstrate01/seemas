import SectionWrapper from "@/components/sections/section-wrapper";

const ComingSoon = () => {
  return (
    <SectionWrapper
      className="h-full"
      contentWrapperClassName="flex items-center justify-center"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-h2 text-zinc-800 text-center">Coming Soon</h1>
      </div>
    </SectionWrapper>
  );
};
export default ComingSoon;
