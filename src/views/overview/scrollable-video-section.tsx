import SectionWrapper from "@/components/sections/section-wrapper";
import SectionHeader from "@/components/sections/section-header";
import ScrollableVideo, {
  type ScrollableVideoProps,
} from "@/views/overview/components/scrollable-video";

const cards = [
    {
        iconKey: "fileShredder",
        title: "Data Intake",
        description: "AI agents parse trial balances and financial statements, extract key information, and retain adjustments.",
        timestamp: ["00:00", "00:05"],
    },
    {
        iconKey: "settings",
        title: "Method Selection",
        description: "Guardrailed method selection based on engagement context and instrument-specific assumptions.",
        timestamp: ["00:05", "00:10"],
    },
    {
        iconKey: "chart",
        title: "Analysis",
        description: "Expert model for estimating reliable arm’s length pricing under multiple scenarios.",
        timestamp: ["00:10", "00:15"],
    },
    {
        iconKey: "fileDescription",
        title: "Report Authoring",
        description: "LLM-powered authoring generates reports from enterprise templates with AI-assisted edits.",
        timestamp: ["00:15", "00:20"],
    }
] satisfies ScrollableVideoProps["cards"];

const ScrollableVideoSection = () => {
  return (
    <SectionWrapper>
        <SectionHeader 
            headingLevel="h3"
            title="AI-Powered, End-to-End Solution" 
            description="SeemaS supports the full tax and valuation lifecycle - from data ingestion and analysis to reporting and review - combining AI automation with expert oversight at every stage."
            descriptionClassName="max-w-[728px] mx-auto" 
            className="mb-8 xl:mb-14"
        />
        <ScrollableVideo 
            videoFilePath="public/overview/scrollable-video-section/ForBiggerFun.mp4"
            cards={cards}
        />
    </SectionWrapper>
  );
};
export default ScrollableVideoSection;
