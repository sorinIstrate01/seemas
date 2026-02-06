import PageWrapper from "@/components/pages/page-wrapper";
import ArticlesCarouselSection from "@/components/pages/sphere/articles-carousel-section";
import Explore from "@/components/pages/sphere/explore";
import Hero from "@/components/pages/sphere/hero";
import { ISphereArticle, sphereArticles } from "@/constants/sphere/sphere";
import { TSphereParams } from "@/types/sphere";
import { sanityClient } from "@/lib/sanity";
import { SphereArticleType } from "@/types/sphere";

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

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
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

const Sphere = async ({
  params,
}: {
  params: TSphereParams;
}) => {
  const testModeSettings = await sanityClient.fetch<
    Array<{
      settings: Array<{ name: string; enabled: boolean }>;
    }>
  >('*[_type == "generalSettings"] { settings }');

  const testModeEnabled =
    testModeSettings?.[0]?.settings?.find(
      (setting: { name: string }) => setting.name === "Test Mode"
    )?.enabled ?? false;

  let editorPickArticles: ISphereArticle[] = sphereArticles.slice(0, 10);

  if (!testModeEnabled) {
    const editorsPickSettings = await sanityClient.fetch<{
      editorsPick?: Array<{ _ref: string; _key: string; _type: string }>;
    }>('*[_type == "generalSettings"] { editorsPick } [0]');

    if (editorsPickSettings?.editorsPick && editorsPickSettings.editorsPick.length > 0) {
      const editorPickRefs = editorsPickSettings.editorsPick.map((ref: { _ref: string }) => ref._ref);

      const sanityArticles = await sanityClient.fetch<
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
        `*[_type == "articles" && _id in $editorPickIds] {
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
        { editorPickIds: editorPickRefs }
      );

      const categoryMap = await sanityClient.fetch<
        Array<{ _id: string; title: string }>
      >('*[_type == "categories"] { _id, title }');

      const categoryIdToTitle = new Map(
        categoryMap.map(cat => [cat._id, cat.title])
      );

      const articleMap = new Map(
        sanityArticles.map(article => [article._id, article])
      );

      editorPickArticles = editorPickRefs
        .map((refId) => articleMap.get(refId))
        .filter((article): article is NonNullable<typeof article> => article !== undefined)
        .map((article, index) => {
        const categoryRef = article.category?._ref;
        const categoryTitle = categoryRef
          ? categoryIdToTitle.get(categoryRef)
          : null;
        const countryCode = article.countryCode || null;
        const imageRef = article.image?.asset?._ref;
        const imageUrl = imageRef ? getImageUrl(imageRef) : "";
        const descriptionText = article.description
          ? portableTextToPlainText(article.description)
          : "";
        
        let articleType = SphereArticleType.News;
        if (categoryTitle && Object.values(SphereArticleType).includes(categoryTitle as SphereArticleType)) {
          articleType = categoryTitle as SphereArticleType;
        }

        const slug = article.slug || generateSlug(article.title || "");

        return {
          id: article._id || `sanity-${index}`,
          slug: slug,
          title: article.title || "",
          description: descriptionText,
          image: imageUrl || "",
          createdAt: parseSanityDate(article.createdAt),
          type: articleType,
          badges: categoryTitle
            ? ([categoryTitle] as any[])
            : undefined,
          country: countryCode || undefined,
        } as ISphereArticle;
      });
    }
  }

  return (
    <PageWrapper>
      <Hero />
      <Explore params={params} />
      <ArticlesCarouselSection
        title="Editor's Pick"
        articles={editorPickArticles}
      />
    </PageWrapper>
  );
};
export default Sphere;
