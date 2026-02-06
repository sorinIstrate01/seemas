import { ISphereArticle } from "@/constants/sphere/sphere";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

const ArticleSource = ({ data }: { data: ISphereArticle["source"] }) => {
  if (!data) return null;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col justify-between xl:w-[720px]">
        <span className="text-subtitle-s text-zinc-800 font-semibold mb-5">Source:</span>
        <Button
          variant="layer"
          size="M"
          className="w-fit [&_svg]:size-5 flex"
          asChild
        >
          <Link href={data.link} target="_blank">
            Source Article <IconChevronRight />
          </Link>
        </Button>
      </div>

      {data.loadable && (
        <div
          className={cn(
            "w-full border border-gray-200 rounded-xl overflow-hidden bg-[#E5E7EB] h-[508px] md:h-[996px] xl:-ml-[calc(236px/2)] xl:w-[956px] xl:h-[1352px]"
          )}
        >
          <iframe
            src={`${data.link}#scrollbar=1`}
            className="w-full h-full"
            title={data.title}
          />
        </div>
      )}
    </div>
  );
};
export default ArticleSource;
