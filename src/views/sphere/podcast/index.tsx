import Hero from "@/components/pages/sphere/podcast/hero";
import { podcastArticles } from "@/constants/sphere/sphere";
import { notFound } from "next/navigation";
import { IArticleSection } from "@/types/sphere";
import RelatedPodcastsSection from "@/components/pages/sphere/podcast/related-podcasts-section";
const SpherePodcast = ({ id }: { id: string }) => {
  const item = podcastArticles.find(item => item.id === id);
  if (!item) {
    return notFound();
  }
  const sections: IArticleSection[] = [
    {
      content: item.description,
    },
  ];
  return (
    <>
      <Hero data={item} sections={sections} />
      {/* <Content data={item} sections={sections} /> */}
      <RelatedPodcastsSection articles={podcastArticles} />
    </>
  );
};
export default SpherePodcast;
