import Spline from "@splinetool/react-spline";
import Video from "@/components/custom-ui/video";
import SectionWrapper from "@/components/sections/section-wrapper";

function toPublicSrc(filePath: string): string {
  const raw = (filePath ?? "").trim();
  if (!raw) return "";

  // Allow remote URLs as-is
  if (/^https?:\/\//i.test(raw)) return raw;

  // Normalize Windows paths and remove any leading workspace path up to /public/
  const normalized = raw.replaceAll("\\", "/");

  const publicIdx = normalized.toLowerCase().lastIndexOf("/public/");
  if (publicIdx !== -1) {
    return normalized.slice(publicIdx + "/public".length);
  }

  // Handle "public/..." or "/public/..."
  if (normalized.toLowerCase().startsWith("public/")) {
    return `/${normalized.slice("public/".length)}`;
  }
  if (normalized.toLowerCase().startsWith("/public/")) {
    return normalized.slice("/public".length);
  }

  // Already looks like a public URL path
  if (normalized.startsWith("/")) return normalized;

  // Relative -> treat as public-relative
  return `/${normalized}`;
}

const VideoSection = () => {
  return (
    <SectionWrapper
      id="video"
      className="bg-background-dark pb-[50px] md:pb-[108px] ld:pb-[100px] xl:pb-[182px]"
      contentWrapperClassName="flex flex-col gap-14 md:gap-8"
      isDark
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/bzerFZ6zlBBIi6oc/scene.splinecode" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(3,3,3,0.00)_0%,rgba(3,3,3,0.60)_90%,#030303_100%)]" />
      </div>

      <div className="w-full flex flex-col gap-14 md:gap-16 xl:gap-14 relative">
        <div className="xl:w-[1033px] mx-auto text-subtitle-xl md:text-h4 xl:text-h3 text-center flex flex-col gap-4">
          <h5 className="text-white inline">
            See SeemaS in Action
          </h5>

          <p className="text-body-s md:text-body-m text-zinc-400 text-center md:w-[522px] xl:w-full mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mx-auto md:mx-0 h-[228px] xs:h-[250px] sm:h-[360px] w-[340px] xs:w-[360px] sm:w-[550px] md:w-full md:h-[440px] xl:h-[720px] flex flex-col relative">
          <div
            className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-10 md:bottom-[58px] translate-y-full"
            style={{
              filter: "blur(1.5px)",
            }}
          >
            <div className="w-[53.3px] h-[220px] md:w-[94.92px] xl:w-[140px] bg-[#070707]" />
            {/* <div
              className="w-[87.71px] h-[15.04px] md:w-[156px] md:h-[27px] xl:w-[230px] xl:h-[40px] border-b border-black rounded-t-lg"
              style={{
                background: "linear-gradient(0deg, #000 0%, #0A0A0A 100%)",
              }}
            /> */}
          </div>
          <div className="rounded-full w-[232px] h-[127px] top-[236px] blur-[125px] md:w-[328px] md:h-[239px] md:blur-[200px] bg-[#e4e9f299] md:-top-1 xl:-top-[20px] left-1/2 -translate-x-1/2 absolute" />
          <div className="rounded-full w-[188px] h-[143px] blur-[140px] -bottom-[40px] md:w-[423px] md:h-[321px] md:blur-[250px] bg-[#e4e9f299] md:-bottom-[20px] left-1/2 -translate-x-1/2 absolute" />
          <div
            className="flex-1 rounded-[32px] relative overflow-hidden bg-[#030303b3] flex items-center justify-center"
            style={{
              backdropFilter: "blur(15px)",
            }}
          >
            <div className="rounded-full w-[125px] h-[122px] blur-[165px] -top-[5px] -left-[7px] md:w-[231px] md:h-[226px] md:blur-[275px] md:top-[6px] md:left-0 xl:w-[356px] xl:h-[348px] xl:blur-[300px] xl:top-[80px] xl:left-[154px] bg-[#E4E9F2] absolute" />
            <div className="rounded-full  w-[103px] h-[101px] blur-[135px] bottom-0 right-0 md:w-[230px] md:h-[225px] md:blur-[275px] md:-bottom-[84px] md:-right-[17px] xl:w-[328px] xl:h-[321px] xl:blur-[400px] bg-[#E4E9F2] xl:-bottom-[20px] xl:right-[34px] absolute" />
            <div
              className="absolute top-0 bottom-0 left-0 right-0 rounded-[32px] p-[10px] border-[#0303034d] border-6 md:border-8 xl:border-[12px]"
              style={{
                backdropFilter: "blur(15px)",
              }}
            ></div>
            <div
              className="rounded-2xl border border-[#636465] bg-[#a5a5a533] p-2"
              style={{
                backdropFilter: "blur(15px)",
              }}
            >
              <div
                className="w-[294px] h-[180px] xs:h-[200px] xs:w-[314px] sm:h-[318px] sm:w-[500px] md:h-[350px] md:w-[614px] xl:w-[1005px] xl:h-[560px] bg-white rounded-xl border-2 border-zinc-200 overflow-hidden group"
                style={{
                  boxShadow:
                    "0px 4px 8px -2px rgba(16, 15, 36, 0.10), 0px 2px 4px -2px rgba(16, 15, 36, 0.06)",
                }}
              >
                <Video
                  poster="/assets/posters/video-poster.png"
                  className="size-full object-cover"
                  controls={false}
                >
                  <source
                    src={toPublicSrc(
                      "public/overview/scrollable-video-section/ForBiggerFun.mp4"
                    )}
                    type="video/mp4"
                  />
                </Video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default VideoSection;
