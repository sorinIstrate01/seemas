import { Metadata } from "next";
import { generateArticleMetadata } from "@/lib/sphere/metadata";
import CaseLaw from "@/views/sphere/case-law";

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

  return <CaseLaw id={id} />;
}
