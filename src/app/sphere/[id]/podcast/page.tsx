import SpherePodcast from "@/views/sphere/podcast";
import { generateArticleMetadata } from "@/lib/sphere/metadata";
import { Metadata } from "next";

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

  return <SpherePodcast id={id} />;
}
