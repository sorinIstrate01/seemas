import { IconPlayerPlay } from "@tabler/icons-react";

const ArticleSnippetPlayIcon = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
      <div className="size-10 rounded-full flex items-center justify-center relative">
        <div className="bg-[#ffffff4d] blur-[4px] absolute size-full"></div>
        <IconPlayerPlay className="size-6 text-white relative" fill="white" />
      </div>
    </div>
  );
};
export default ArticleSnippetPlayIcon;
