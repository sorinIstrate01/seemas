import { ISphereArticle } from "@/constants/sphere/sphere";
import { SphereArticleType } from "@/types/sphere";
import { formatDate } from "@/utils/date";

const CreatedBy = ({ data }: { data: ISphereArticle }) => {
  return (
    <div className="flex items-center gap-2 relative">
      <span className="text-body-s text-zinc-600 whitespace-nowrap">
        {formatDate(data.createdAt)}
      </span>
      {data.by && (
        <>
          <div className="size-1.5 rounded-full bg-gray-200" />
          <span className="text-body-s text-zinc-600 whitespace-nowrap">
            {data.type === SphereArticleType.Podcast ? "Speaker" : "By"}:{" "}
            <span className="underline text-zinc-800">{data.by}</span>
          </span>
        </>
      )}
    </div>
  );
};
export default CreatedBy;
