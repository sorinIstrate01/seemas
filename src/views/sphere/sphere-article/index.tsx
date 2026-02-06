import Content from "@/components/pages/sphere-article/content";
import Hero from "@/components/pages/sphere-article/hero";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import { sphereArticles } from "@/constants/sphere/sphere";
import { IArticleSection } from "@/types/sphere";
import { notFound } from "next/navigation";
import { sanityClient } from "@/lib/sanity";
import { ISphereArticle } from "@/constants/sphere/sphere";
import { SphereArticleType } from "@/types/sphere";
const sections: IArticleSection[] = [
  {
    content:
      "Transfer pricing — the rules and methods for pricing transactions between related companies — has always been a complex challenge for multinational businesses. But now, AI is stepping in, shaking up the world of international tax and compliance. \n\n Let’s explore how AI is changing transfer pricing, what opportunities it brings, and what hurdles remain.",
  },
  {
    title: "What Is Transfer Pricing, and Why Does It Matter?",
    content:
      "If your company operates in more than one country, ityou probably buys, sells, or licenses goods and services between related parties. Setting the right prices for these internal transactions is crucial—not just for business reasons, but because tax authorities around the world want to make sure the company not shifting profits unfairly between countries.\n \n Getting transfer pricing wrong can mean big penalties, audits, and reputational damage. That’s why companies invest so much time and effort into getting it right.",
  },
  {
    title: "Where Does AI Fit In?",
    subContent: [
      {
        title: "1. Making Compliance Easier and Faster",
        description:
          "AI isn’t just about speed—it’s also about smart risk management:",
        bullets: [
          {
            title: "Automated Documentation:",
            description:
              "AI can help generate the required reports and paperwork, like Master Files and Local Files, saving hours of manual work.",
          },
          {
            title: "Data Crunching:",
            description:
              "AI can sift through mountains of financial data to find the best “comparables”—similar transactions in the market that help justify your prices.",
          },
        ],
      },
      {
        title: "2. Spotting Risks Before They Become Problems",
        description:
          "AI isn’t just about speed—it’s also about smart risk management:",
        bullets: [
          {
            title: "Real-Time Monitoring:",
            description:
              "With AI, companies can track their internal transactions as they happen, catching any outliers or mistakes right away.",
          },
          {
            title: "Predictive Analytics:",
            description:
              "AI can even flag areas where you might be at risk for an audit, giving you a chance to fix things before the tax authorities come knocking.",
          },
        ],
      },
      {
        title: "3. Helping with Big Decisions",
        description:
          "AI tools can model different scenarios, showing you the tax impact of changing your supply chain, pricing strategy, or even moving business units between countries. This means smarter, data-driven decisions for your business.",
      },
    ],
  },
  { image: "/sphere/woman-laptop.png" },

  {
    title: "Tax Authorities Are Using AI, Too",
    content:
      "It’s not just companies that are embracing AI—tax authorities are getting in on the action as well. They’re using AI to:",
    bullets: [
      {
        title: "Analyze Taxpayer Data:",
        description:
          "AI helps spot inconsistencies or unusual patterns in company filings.",
      },
      {
        title: "Target Audits:",
        description:
          "With better data, authorities can focus their resources where the risks are highest.",
      },
    ],
  },
  {
    title: "What Are the Challenges?",
    content: "AI offers huge potential, but there are still some roadblocks:",
    bullets: [
      {
        title: "Data Quality:",
        description:
          "Data Quality: AI is only as good as the data you feed it. Many companies still struggle to bring together clean, consistent data from all their global offices.",
      },
      {
        title: "Privacy and Security:",
        description:
          "Handling sensitive financial data with AI raises privacy and cybersecurity concerns, especially across borders.",
      },
      {
        title: "Complex Regulations:",
        description:
          "Every country has its own rules. AI systems need to be flexible and up-to-date to keep up with changing laws.",
      },
      {
        title: "Explainability",
        description:
          "Some AI models are “black boxes,” making it hard to explain how they reached a decision—something tax authorities may not accept.",
      },
    ],
  },
  {
    title: "Why Human Expertise Still Matters",
    content:
      "AI is a powerful tool, but it can’t replace the judgment and experience of seasoned tax professionals. Complex cases—like those involving intellectual property or unique business models—still need a human touch. Plus, experts are needed to make sure AI systems are fair, unbiased, and ethical.",
    subsections: [
      {
        title: "Looking Ahead",
        description:
          "The future of transfer pricing is a blend of smart technology and human expertise. As AI gets more advanced, expect:",
      },
    ],
    bullets: [
      {
        title: "More standardized, real-time compliance",
      },
      { title: "Smarter, faster risk management" },
      { title: "A shift from paperwork to strategic thinking" },
    ],
  },
  {
    title: "Final Thoughts",
    content:
      "AI is revolutionizing transfer pricing, making it faster, smarter, and more reliable. But success means combining the best of both worlds: leveraging AI’s power while relying on human insight to navigate the complex, ever-changing landscape of international tax.",
  },
];
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const SphereArticle = async ({ slug }: { slug: string }) => {
  const testModeSettings = await sanityClient.fetch<
    Array<{
      settings: Array<{ name: string; enabled: boolean }>;
    }>
  >('*[_type == "generalSettings"] { settings }');

  const testModeEnabled =
    testModeSettings?.[0]?.settings?.find(
      (setting: { name: string }) => setting.name === "Test Mode"
    )?.enabled ?? false;

  let article: ISphereArticle | undefined = sphereArticles.find(
    article => article.slug === slug || article.id === slug
  );

  let articleSections: IArticleSection[] = testModeEnabled ? sections : [];
  let relatedArticles: ISphereArticle[] = sphereArticles.slice(0, 10);

  if (!testModeEnabled) {
    const sanityArticle = await sanityClient.fetch<{
      _id: string;
      title: string;
      description: any;
      image: { asset: { _ref: string } };
      category: { _ref: string };
      createdAt: string;
      slug?: string;
      by?: string;
      country?: { _ref: string };
      countryCode?: string;
      countryName?: string;
      sourceArticle?: string;
      relatedArticles?: Array<{ _ref: string; _key: string; _type: string }>;
      contentSections?: Array<{
        _key: string;
        heading?: string;
        content?: any[];
        image?: { asset: { _ref: string } };
      }>;
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
        category {
          _ref
        },
        createdAt,
        "slug": slug.current,
        "by": author->name,
        author {
          _ref
        },
        sourceArticle,
        relatedArticles,
        contentSections[] {
          _key,
          heading,
          content[],
          image {
            asset {
              _ref
            }
          }
        },
        "countryCode": country->countryCode,
        "countryName": country->name,
        country {
          _ref
        }
      }`,
      { slug, slugTitle: `*${slug}*` }
    );

    if (!sanityArticle) {
      return notFound();
    }

    const categoryMap = await sanityClient.fetch<
      Array<{ _id: string; title: string }>
    >('*[_type == "categories"] { _id, title }');

    const categoryIdToTitle = new Map(
      categoryMap.map(cat => [cat._id, cat.title])
    );

    if (!sanityArticle || !sanityArticle._id) {
      return notFound();
    }

    const sanityArt = sanityArticle;
    const categoryRef = sanityArt.category?._ref;
    const categoryTitle = categoryRef
      ? categoryIdToTitle.get(categoryRef)
      : null;

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

    const mapContentSections = (
      contentSections: Array<{
        _key: string;
        heading?: string;
        content?: any[];
        image?: { asset: { _ref: string } };
      }>
    ): IArticleSection[] => {
      if (!contentSections || !Array.isArray(contentSections)) return [];

      return contentSections.map((section) => {
        const mappedSection: IArticleSection = {};

        if (section.heading) {
          mappedSection.title = section.heading;
        }

        if (section.image?.asset?._ref) {
          mappedSection.image = getImageUrl(section.image.asset._ref);
        }

        if (!section.content || !Array.isArray(section.content) || section.content.length === 0) {
          return mappedSection;
        }

          const contentText: string[] = [];
          const bullets: Array<{ title: string; description?: string }> = [];
          const subContent: Array<{
            title?: string;
            description?: string;
            bullets?: Array<{ title: string; description?: string }>;
          }> = [];

          type SubContentType = {
            title?: string;
            description?: string;
            bullets: Array<{ title: string; description?: string }>;
          };
          
          const currentSubContent: SubContentType | null = null;

        section.content.forEach((block: any) => {
          if (block._type === "block") {
            if (block.listItem === "bullet" && block.children) {
              const bulletParts: string[] = [];
              let hasStrongTitle = false;
              
              block.children.forEach((child: any) => {
                if (child.marks && Array.isArray(child.marks) && child.marks.includes("strong")) {
                  bulletParts.push(child.text || "");
                  hasStrongTitle = true;
                } else {
                  bulletParts.push(child.text || "");
                }
              });

              const bulletText = bulletParts.join("");
              
              let bulletItem: { title: string; description?: string };
              
              if (block.level === 1) {
                const parts = bulletText.split(":");
                if (parts.length > 1) {
                  bulletItem = {
                    title: parts[0].trim(),
                    description: parts.slice(1).join(":").trim(),
                  };
                } else if (hasStrongTitle && bulletParts.length > 0) {
                  const titlePart = bulletParts[0].trim();
                  const descParts = bulletParts.slice(1).join("").trim();
                  bulletItem = descParts 
                    ? { title: titlePart, description: descParts }
                    : { title: bulletText.trim() };
                } else {
                  bulletItem = { title: bulletText.trim() };
                }
              } else {
                bulletItem = { title: bulletText.trim() };
              }
              
              if (currentSubContent) {
                (currentSubContent as SubContentType).bullets.push(bulletItem);
              } else {
                bullets.push(bulletItem);
              }
            } else if (block.children) {
              const text = block.children
                .map((child: any) => child.text || "")
                .join("");
              if (text.trim()) {
                if (currentSubContent) {
                  const subContent = currentSubContent as SubContentType;
                  if (!subContent.description) {
                    subContent.description = text.trim();
                  } else {
                    subContent.description += "\n\n" + text.trim();
                  }
                } else {
                  contentText.push(text.trim());
                }
              }
            }
          } else if (block._type === "image" && block.asset?._ref) {
            if (!mappedSection.image) {
              mappedSection.image = getImageUrl(block.asset._ref);
            }
          }
        });

        if (contentText.length > 0) {
          mappedSection.content = contentText.join("\n\n");
        }

        if (bullets.length > 0) {
          mappedSection.bullets = bullets;
        }

        if (subContent.length > 0) {
          mappedSection.subContent = subContent;
        }

        return mappedSection;
      });
    };

    const parseSanityDate = (dateString: string): string => {
      if (!dateString) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      }

      if (/^\d{4}-\d{2}-\d{2}/.test(dateString)) {
        return dateString.split("T")[0];
      }

      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      const formattedMatch = dateString.match(/^(\w+)\s+(\d+),\s+(\d{4})$/);
      if (formattedMatch) {
        const [, monthName, day, year] = formattedMatch;
        const monthIndex = monthNames.indexOf(monthName);
        if (monthIndex !== -1) {
          const month = String(monthIndex + 1).padStart(2, "0");
          const dayPadded = String(day).padStart(2, "0");
          return `${year}-${month}-${dayPadded}`;
        }
      }

      try {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${year}-${month}-${day}`;
        }
      } catch {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      }

      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const imageRef = sanityArt.image?.asset?._ref;
    const imageUrl = imageRef ? getImageUrl(imageRef) : "";
    const descriptionText = sanityArt.description
      ? portableTextToPlainText(sanityArt.description)
      : "";

    let articleType = SphereArticleType.News;
    if (categoryTitle && Object.values(SphereArticleType).includes(categoryTitle as SphereArticleType)) {
      articleType = categoryTitle as SphereArticleType;
    }

    const sourceUrl = sanityArt.sourceArticle;
    const isPdfUrl = sourceUrl?.toLowerCase().endsWith('.pdf') || sourceUrl?.includes('.pdf');
    
    article = {
      id: sanityArt._id,
      slug: sanityArt.slug || generateSlug(sanityArt.title || ""),
      title: sanityArt.title || "",
      description: descriptionText,
      image: imageUrl || "",
      createdAt: parseSanityDate(sanityArt.createdAt),
      type: articleType,
      badges: categoryTitle ? ([categoryTitle] as any[]) : undefined,
      country: sanityArt.countryCode || undefined,
      by: sanityArt.by || undefined,
      source: sourceUrl ? {
        title: "Source Article",
        link: sourceUrl,
        loadable: isPdfUrl,
      } : undefined,
    } as ISphereArticle;

    if (sanityArt.contentSections && Array.isArray(sanityArt.contentSections) && sanityArt.contentSections.length > 0) {
      articleSections = mapContentSections(sanityArt.contentSections);
    } else {
      articleSections = [];
    }

    let relatedSanityArticles: Array<{
      _id: string;
      title: string;
      description: any;
      image: { asset: { _ref: string } };
      category: { _ref: string };
      createdAt: string;
      country?: { _ref: string };
      countryCode?: string;
      countryName?: string;
      slug?: string;
    }> = [];

    if (sanityArt.relatedArticles && Array.isArray(sanityArt.relatedArticles) && sanityArt.relatedArticles.length > 0) {
      const relatedArticleRefs = sanityArt.relatedArticles.map((ref: { _ref: string }) => ref._ref);

      relatedSanityArticles = await sanityClient.fetch<
        Array<{
          _id: string;
          title: string;
          description: any;
          image: { asset: { _ref: string } };
          category: { _ref: string };
          createdAt: string;
          country?: { _ref: string };
          countryCode?: string;
          countryName?: string;
          slug?: string;
        }>
      >(
        `*[_type == "articles" && _id in $relatedArticleIds] {
          _id,
          title,
          description,
          image {
            asset {
              _ref
            }
          },
          category {
            _ref
          },
          createdAt,
          "slug": slug.current,
          "countryCode": country->countryCode,
          "countryName": country->name,
          country {
            _ref
          }
        }`,
        { relatedArticleIds: relatedArticleRefs }
      );

      const articleMap = new Map(
        relatedSanityArticles.map(article => [article._id, article])
      );

      relatedSanityArticles = relatedArticleRefs
        .map((refId: string) => articleMap.get(refId))
        .filter((article): article is NonNullable<typeof article> => article !== undefined);
    }

    if (relatedSanityArticles.length === 0 && categoryRef) {
      relatedSanityArticles = await sanityClient.fetch<
        Array<{
          _id: string;
          title: string;
          description: any;
          image: { asset: { _ref: string } };
          category: { _ref: string };
          createdAt: string;
          country?: { _ref: string };
          countryCode?: string;
          countryName?: string;
          slug?: string;
        }>
      >(
        `*[_type == "articles" && _id != $currentArticleId && category._ref == $categoryRef] | order(createdAt desc) [0...10] {
          _id,
          title,
          description,
          image {
            asset {
              _ref
            }
          },
          category {
            _ref
          },
          createdAt,
          "slug": slug.current,
          "countryCode": country->countryCode,
          "countryName": country->name,
          country {
            _ref
          }
        }`,
        { currentArticleId: sanityArt._id, categoryRef }
      );
    }

    const categoryMapForRelated = await sanityClient.fetch<
      Array<{ _id: string; title: string }>
    >('*[_type == "categories"] { _id, title }');

    const categoryIdToTitleForRelated = new Map(
      categoryMapForRelated.map(cat => [cat._id, cat.title])
    );

    relatedArticles = relatedSanityArticles.map((relatedArticle) => {
      const categoryRef = relatedArticle.category?._ref;
      const categoryTitle = categoryRef
        ? categoryIdToTitleForRelated.get(categoryRef)
        : null;
      const countryCode = relatedArticle.countryCode || null;
      const imageRef = relatedArticle.image?.asset?._ref;
      const imageUrl = imageRef ? getImageUrl(imageRef) : "";
      const descriptionText = relatedArticle.description
        ? portableTextToPlainText(relatedArticle.description)
        : "";
      
      let articleType = SphereArticleType.News;
      if (categoryTitle && Object.values(SphereArticleType).includes(categoryTitle as SphereArticleType)) {
        articleType = categoryTitle as SphereArticleType;
      }

      const relatedSlug = relatedArticle.slug || generateSlug(relatedArticle.title || "");

      return {
        id: relatedArticle._id,
        slug: relatedSlug,
        title: relatedArticle.title || "",
        description: descriptionText,
        image: imageUrl || "",
        createdAt: parseSanityDate(relatedArticle.createdAt),
        type: articleType,
        badges: categoryTitle
          ? ([categoryTitle] as any[])
          : undefined,
        country: countryCode || undefined,
      } as ISphereArticle;
    });
  }

  if (!article) {
    return notFound();
  }

  return (
    <>
      <Hero data={article} />
      <Content data={article} sections={articleSections} />
      <ArticlesCarouselSection
        title="Related Articles"
        articles={relatedArticles}
      />
    </>
  );
};
export default SphereArticle;
