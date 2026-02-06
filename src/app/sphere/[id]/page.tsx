import SphereArticle from "@/views/sphere/sphere-article";
import { Metadata } from "next";
import { generateArticleMetadata } from "@/lib/sphere/metadata";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return await generateArticleMetadata({ params });
}

export default async function Page({ params }: { params: Params }) {
  const { id: slug } = await params;

  return <SphereArticle slug={slug} />;
}
