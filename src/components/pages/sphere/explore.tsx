import SectionWrapper from "@/components/sections/section-wrapper";

import {
  heroArticle,
  ISphereArticle,
  sphereArticles,
} from "@/constants/sphere/sphere";
import ArticleSnippetLarge from "./elements/article-snippet-large";
import SectionWidthWrapper from "@/components/sections/section-width-wrapper";
import ArticleSnippet from "./elements/article-snippet";

import SpherePagination from "./elements/pagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SearchInput from "./elements/search-input";
import { cn } from "@/lib/utils";
import Filters from "./elements/filters";
import { SphereArticleType, TSphereParams } from "@/types/sphere";
import { IconFilter } from "@tabler/icons-react";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import CarouselBtns from "./elements/carousel-btns";
import FiltersPopoverClientWrapper from "./elements/filters-popover-client-wrapper";
import { EDataRangeOptions } from "@/constants/data";
import { sanityClient } from "@/lib/sanity";

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
const ITEMS_PER_PAGE = 10;
const PATH = "/sphere";
const SECTION_ID = "explore-section";
const ALL_TYPE = "All";
const getFilteredArticles = (
  articles: ISphereArticle[],
  { search, type = ALL_TYPE, category, dataRange, country }: TSphereParams
) => {
  let filteredArticles = articles.slice();
  if (type !== ALL_TYPE)
    filteredArticles = filteredArticles.filter(
      article => article.type === type
    );
  if (search)
    filteredArticles = filteredArticles.filter(article =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );
  if (category)
    filteredArticles = filteredArticles.filter(article =>
      article.badges?.includes(category)
    );
  if (country)
    filteredArticles = filteredArticles.filter(
      article => article.country === country
    );
  if (dataRange && dataRange !== EDataRangeOptions.AllTime) {
    const now = new Date();
    let startDate = new Date();
    let endDate = new Date();

    if (dataRange === EDataRangeOptions.ThisWeek) {
      // Start of current week (Monday)
      const dayOfWeek = now.getDay();
      const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Sunday is 0, Monday is 1
      startDate = new Date(now);
      startDate.setDate(now.getDate() - daysToMonday);
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date(now);
      endDate.setHours(23, 59, 59, 999);
    } else if (dataRange === EDataRangeOptions.ThisMonth) {
      // Start of current month
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date(now);
      endDate.setHours(23, 59, 59, 999);
    } else if (dataRange === EDataRangeOptions.LastWeek) {
      // Start of last week (Monday)
      const dayOfWeek = now.getDay();
      const daysToLastMonday = dayOfWeek === 0 ? 13 : dayOfWeek + 6; // Go back to previous Monday
      startDate = new Date(now);
      startDate.setDate(now.getDate() - daysToLastMonday);
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);
      endDate.setHours(23, 59, 59, 999);
    } else if (dataRange === EDataRangeOptions.LastMonth) {
      // Previous month
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date(now.getFullYear(), now.getMonth(), 0); // Last day of previous month
      endDate.setHours(23, 59, 59, 999);
    }
    filteredArticles = filteredArticles.filter(
      article =>
        new Date(article.createdAt) >= startDate &&
        new Date(article.createdAt) <= endDate
    );
  }
  return filteredArticles;
};
const Explore = async ({ params }: { params: TSphereParams }) => {
  const categories = await sanityClient.fetch<{ title: string }[]>(
    '*[_type == "categories"] { title }'
  );
  const types = [
    ALL_TYPE,
    ...categories.map(category => category.title),
  ];

  const sanityCountries = await sanityClient.fetch<
    Array<{ countryCode: string; name: string }>
  >('*[_type == "countries"] { countryCode, name }');

  const countries = sanityCountries.map(country => ({
    label: country.name,
    value: country.countryCode,
    startImg: {
      src: `https://flagcdn.com/${country.countryCode.toLowerCase()}.svg`,
      alt: country.name,
      width: 20,
      height: 20,
    },
  }));

  const testModeSettings = await sanityClient.fetch<
    Array<{
      settings: Array<{ name: string; enabled: boolean }>;
    }>
  >('*[_type == "generalSettings"] { settings }');

  const testModeEnabled =
    testModeSettings?.[0]?.settings?.find(
      (setting: { name: string }) => setting.name === "Test Mode"
    )?.enabled ?? false;

  let articlesToUse: ISphereArticle[] = sphereArticles;
  let heroArticleToUse: ISphereArticle = heroArticle;

  if (!testModeEnabled) {
    const generalSettings = await sanityClient.fetch<
      Array<{
        pinnedArticle?: {
          _ref: string;
          _type: string;
        };
      }>
    >('*[_type == "generalSettings"] { pinnedArticle }');

    const pinnedArticleRef = generalSettings?.[0]?.pinnedArticle?._ref;

    const pinnedArticleQuery = pinnedArticleRef
      ? await sanityClient.fetch<
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
      `*[_id == $pinnedArticleId] {
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
          { pinnedArticleId: pinnedArticleRef }
        )
      : [];

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
      `*[_type == "articles"] | order(createdAt desc) {
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
        "countryCode": country->countryCode,
        "countryName": country->name,
        country {
          _ref
        }
      }`
    );

    const categoryMap = await sanityClient.fetch<
      Array<{ _id: string; title: string }>
    >('*[_type == "categories"] { _id, title }');

    const categoryIdToTitle = new Map(
      categoryMap.map(cat => [cat._id, cat.title])
    );

    const mapArticle = (article: typeof sanityArticles[0], index: number): ISphereArticle => {
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
    };

    articlesToUse = sanityArticles.map((article, index) => mapArticle(article, index));

    if (articlesToUse.length > 0) {
      if (pinnedArticleQuery && pinnedArticleQuery.length > 0) {
        const pinnedArticle = mapArticle(pinnedArticleQuery[0], 0);
        heroArticleToUse = {
          ...pinnedArticle,
          image: pinnedArticle.image || "",
        };
      } else {
        heroArticleToUse = {
          ...articlesToUse[0],
          image: articlesToUse[0].image || "",
        };
      }
    }
  }

  const filteredArticles = getFilteredArticles(articlesToUse, params);
  const { page = 1, type = "All" } = params;
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const searchParamsString = Object.entries(params).reduce(
    (acc, [key, value]) => {
      if (value && key !== "type" && key !== "page") {
        acc.set(key, value.toString());
      }
      return acc;
    },
    new URLSearchParams()
  );
  return (
    <SectionWrapper
      id={SECTION_ID}
      className="pt-[308px] md:pt-[390px] xl:pt-[516px] relative"
    >
      <div className="w-full absolute top-0 left-0 px-4 md:px-0">
        <SectionWidthWrapper className="relative z-10 -translate-y-[191px] md:-translate-y-[289px] xl:-translate-y-[324px]">
          <ArticleSnippetLarge data={heroArticleToUse} />
        </SectionWidthWrapper>
      </div>
      <div className="flex flex-col gap-6 md:gap-10 xl:gap-14 relative">
        <h4 className="text-subtitle-xl md:text-h4 xl:text-h3 text-zinc-900">
          Explore All Articles
        </h4>
        <div className="flex flex-col gap-6 md:gap-8 w-full">
          {/* TABS */}
          <div className="flex flex-col-reverse gap-6 xl:gap-0 xl:flex-row xl:justify-between xl:items-center">
            <CarouselBtns
              btnsList={types.map(val => ({
                "data-active": val === type,
                asChild: true,
                children: (
                  <Link
                    href={`${PATH}?${searchParamsString.toString()}&type=${val}`}
                    scroll={false}
                  >
                    {val}
                  </Link>
                ),
              }))}
              buttonProps={{ variant: "tab", className: "" }}
              carouselItemClassName="basis-[fit-content] last:pr-2 pl-2"
              className="-ml-2"
              defaultValue={types.indexOf(type) || 0}
            />

            {/* <div className="flex gap-2">
              {types.map(val => (
                <Button
                  key={val}
                  variant="tab"
                  data-active={val === type}
                  asChild
                >
                  <Link
                    href={`${PATH}?${searchParamsString.toString()}&type=${val}`}
                    scroll={false}
                  >
                    {val}
                  </Link>
                </Button>
              ))}
            </div> */}
            <div className="w-full flex items-center xl:w-fit gap-4 xl:gap-0">
              <SearchInput
                params={params}
                path={PATH}
                className="flex-1 xl:flex-none"
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="L"
                    className="xl:hidden [&_svg]:size-5 px-[10px] md:px-4"
                    type="button"
                  >
                    <IconFilter />{" "}
                    <span className="hidden md:inline">Filters</span>
                  </Button>
                </PopoverTrigger>
                <FiltersPopoverClientWrapper>
                  <Filters
                    params={params}
                    path={PATH}
                    className="w-[240px] bg-white"
                    hideHeader
                    countries={countries}
                  />
                </FiltersPopoverClientWrapper>
              </Popover>
            </div>
          </div>
          {/* TABS end*/}
          <div className="flex w-full gap-6 md:gap-8">
            {/* FILTERS */}
            <div className="hidden xl:flex flex-col w-[240px]">
              <Filters
                params={params}
                path={PATH}
                className="w-full"
                countries={countries}
              />
            </div>
            {/* FILTERS end */}
            {/* ARTICLES */}
            <div className="flex flex-col flex-1 gap-8">
              {filteredArticles.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 md:py-16 gap-4">
                  <p className="text-subtitle-m md:text-subtitle-l text-zinc-600 text-center">
                    No articles found
                  </p>
                  <p className="text-body-s text-zinc-500 text-center max-w-md">
                    Try adjusting your filters or search terms to find what you&apos;re looking for.
                  </p>
                </div>
              ) : (
                <>
                  {filteredArticles
                    .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
                    .map(article => (
                      <ArticleSnippet key={article.id} data={article} />
                    ))}
                  <div className="flex flex-col gap-[10px] md:gap-0 md:flex-row justify-between w-full md:items-center">
                    <p className="text-center text-gray-600 text-body-s line-clamp-1">
                      Showing {page * ITEMS_PER_PAGE - ITEMS_PER_PAGE + 1} to{" "}
                      {page * ITEMS_PER_PAGE} of {filteredArticles.length} articles
                    </p>
                    <SpherePagination
                      className={cn(totalPages < 2 && "hidden")}
                      page={page ? Number(page) : 1}
                      totalPages={totalPages}
                      sectionId={SECTION_ID}
                      path={PATH}
                      params={params}
                    />
                  </div>
                </>
              )}
            </div>
            {/* ARTICLES end */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Explore;
