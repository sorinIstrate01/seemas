import { Metadata } from "next";
import { generateArticleMetadata } from "@/lib/sphere/metadata";
import News from "@/views/sphere/news";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return await generateArticleMetadata({ params });
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  return <News id={id} />;
}
