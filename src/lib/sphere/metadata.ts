import { sphereArticles } from "@/constants/sphere/sphere";
import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity";

type Params = Promise<{ id: string }>;

export async function generateArticleMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id: slug } = await params;
  let article = sphereArticles.find(
    article => article.slug === slug || article.id === slug
  );
  const baseUrl = process.env.BASE_URL;

  if (!article) {
    const sanityArticle = await sanityClient.fetch<{
      _id: string;
      title: string;
      description: any;
      image: { asset: { _ref: string } };
      video?: string;
      createdAt: string;
      slug?: string;
      by?: string;
      badges?: string[];
      categoryTitle?: string;
    } | null>(
      `*[_type == "articles" && (slug.current == $slug || (!defined(slug.current) && title match $slugTitle))] [0] {
        _id,
        title,
        description,
        image {
          asset {
            _ref
          }
        },
        video,
        createdAt,
        "slug": slug.current,
        by,
        "categoryTitle": category->title
      }`,
      { slug, slugTitle: `*${slug}*` }
    );

    if (sanityArticle) {
      const sanityArt = sanityArticle;
      const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
      const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

      const getImageUrl = (imageRef: string): string => {
        if (!imageRef || !projectId) return "";
        let imageId = imageRef.startsWith("image-")
          ? imageRef.substring(6)
          : imageRef;
        const formatMatch = imageId.match(/-(\w+)$/);
        if (formatMatch) {
          const format = formatMatch[1];
          imageId = imageId.replace(/-(\w+)$/, `.${format}`);
        }
        return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}`;
      };

      const portableTextToPlainText = (blocks: any[]): string => {
        if (!blocks || !Array.isArray(blocks)) return "";
        return blocks
          .map((block: any) => {
            if (block._type !== "block" || !block.children) return "";
            return block.children
              .map((child: any) => (child.text || ""))
              .join("");
          })
          .join(" ");
      };

      article = {
        id: sanityArt._id,
        slug: sanityArt.slug || slug,
        title: sanityArt.title || "",
        description: portableTextToPlainText(sanityArt.description || []),
        image: sanityArt.image?.asset?._ref
          ? getImageUrl(sanityArt.image.asset._ref)
          : "",
        video: sanityArt.video,
        createdAt: sanityArt.createdAt,
        by: sanityArt.by,
        badges: sanityArt.categoryTitle ? [sanityArt.categoryTitle] : sanityArt.badges,
      } as any;
    }
  }

  if (!article) {
    return {
      title: "Article Not Found | Seemas Sphere",
      description: "The requested article could not be found.",
    };
  }

  // Truncate description for better social sharing
  const truncatedDescription =
    article.description.length > 160
      ? article.description.substring(0, 157) + "..."
      : article.description;

  // Enhanced metadata for video content
  const isVideoContent = !!article.video;

  return {
    title: `${article.title} | SeemaS Sphere`,
    description: truncatedDescription,
    metadataBase: baseUrl ? new URL(baseUrl) : undefined,
    openGraph: {
      title: article.title,
      description: truncatedDescription,
      url: `/sphere/${article.slug || slug}`,
      siteName: "SeemaS AI",
      images: { url: article.image, width: 1200, height: 630 },
      ...(isVideoContent && {
        videos: [
          {
            url: article.video!,
            width: 1280,
            height: 720,
          },
        ],
        type: "video.other", // Use video.other for podcast content
      }),
      ...(!isVideoContent && { type: "article" }),
      locale: "en_US",
      publishedTime: article.createdAt,
      authors: article.by ? [article.by] : undefined,
      tags: article.badges,
    },
    twitter: {
      card: isVideoContent ? "player" : "summary_large_image",
      title: article.title,
      description: truncatedDescription,
      images: article.image,
      ...(isVideoContent && {
        players: {
          playerUrl: `/sphere/${article.slug || slug}/podcast`, // Link to your video player page
          streamUrl: article.video!,
          width: 1280,
          height: 720,
        },
      }),
      creator: article.by ? `@${article.by.replace(/\s+/g, "")}` : "@Seemas",
    },
    alternates: {
      canonical: `/sphere/${article.slug || slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
