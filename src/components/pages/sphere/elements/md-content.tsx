export default async function MdContent({ md }: { md: string }) {
  const { default: Article } = await import("@/content/sphere/" + md);

  return (
    <div className="prose prose-headings:text-zinc-900 prose-p:text-body-m prose-p:text-zinc-800 prose-h1:hidden prose-h2:text-subtitle-l prose-h3:text-subtitle-s prose-h4:text-subtitle-s prose-h5:text-subtitle-s prose-h6:text-lg prose-ul:list-disc prose-ul:list-outside prose-ul:ml-2 prose-li:text-body-m prose-li:text-zinc-800 prose-li:pl-2 [&>*:nth-child(2)]:mt-0">
      <Article />
    </div>
  );
}
