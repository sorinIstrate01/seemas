import {
  IArticleSection,
  SphereArticleType,
  ESphereArticleCategory,
  EArticleSourceType,
} from "@/types/sphere";
import { caseLaws } from "./case-laws";
import { news } from "./news";

export const articleTypeToLinkMap: Record<SphereArticleType, string> = {
  [SphereArticleType.Commentary]: "",
  [SphereArticleType.News]: "news",
  [SphereArticleType.Guidelines]: "",
  [SphereArticleType.CaseLaws]: "case-law",
  [SphereArticleType.Podcast]: "podcast",
};
export const getArticleLink = (article: ISphereArticle) => {
  const slug = article.slug || article.id;
  return `/sphere/${slug}`;
};
interface ISource {
  title: string;
  link: string;
  type?: EArticleSourceType;
  loadable?: boolean;
}
export interface ISphereArticle {
  id: string;
  slug?: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  createdAt: string;
  badges?: ESphereArticleCategory[];
  type: SphereArticleType;
  by?: string;
  source?: ISource;
  hideImage?: boolean;
  sections?: IArticleSection[];
  hideInThisArticle?: boolean;
  md?: string;
  country?: string;
}
export const podcastArticles: ISphereArticle[] = [
  {
    id: "podcast-1",
    title: "The Big Tax Shakeup Decoding TCJA & OBBB with Anju Singh",
    description:
      "Transfer pricing — the rules and methods for pricing transactions between related companies — has always been a complex challenge for multinational businesses. But now, artificial intelligence (AI) is stepping in, shaking up the world of international tax and compliance.\n\n Let’s explore how AI is changing transfer pricing, what opportunities it brings, and what hurdles remain.",
    image: "/sphere/podcast-thumbnail.png",
    video: "/sphere/podcast.mp4",

    createdAt: "2025-08-15",
    badges: [ESphereArticleCategory.Documentation],
    type: SphereArticleType.Podcast,
    by: "Anju Singh",
  },
  {
    id: "podcast-2",
    title:
      "AI Meets Transfer Pricing: How Smart Tech Is Revolutionizing Global Tax Compliance",
    description:
      "If your company operates in more than one country, it probably buys, sells, or licenses goods and services between related parties. Setting the right prices for these internal transactions is crucial—not just for business reasons, but because tax authorities around the world want to make sure",
    image: "/sphere/podcast-thumbnail-2.png",
    video: "/sphere/podcast.mp4",

    createdAt: "2025-08-12",
    badges: [ESphereArticleCategory.Documentation],
    type: SphereArticleType.Podcast,
    by: "Anju Singh",
  },
  {
    id: "podcast-3",
    title: "The Big Tax Shakeup Decoding TCJA & OBBB with Anju Singh",
    description:
      "If you’ve been following global tax news, you’ve probably heard about the OECD’s Pillar 1. In simple terms, it’s an international effort to update tax rules for our digital age. The idea? Make sure that the world’s biggest companies —especially tech giants—pay taxes not just where they’re headquartered, but also where their customers are.",
    image: "/sphere/podcast-thumbnail-3.png",
    video: "/sphere/podcast.mp4",

    createdAt: "2025-08-04",
    badges: [ESphereArticleCategory.Documentation],
    type: SphereArticleType.Podcast,
    by: "Anju Singh",
  },
  {
    id: "podcast-4",
    title:
      "Billion-Dollar Battles: 7 High-Profile Transfer Pricing Cases Every Business Should Know",
    description:
      "Transfer pricing may not be breaking news on Wall Street, but in tax departments across the globe, it’s drawing headlines—and billion-dollar bills. As global tax authorities ramp up audits and crack down on profit shifting, several major multinationals",
    image: "/sphere/podcast-thumbnail-4.png",
    video: "/sphere/podcast.mp4",
    createdAt: "2025-08-01",
    badges: [ESphereArticleCategory.Documentation],
    type: SphereArticleType.Podcast,
    by: "Anju Singh",
  },
];
const articles: ISphereArticle[] = [
  {
    id: "1",
    title:
      "How Changing US Tariff Rates Are Shaking Up Global Transfer Pricing",
    description:
      "If you run a global business, you know that the rules of international trade can change overnight. One of the biggest game-changers in recent years? Shifting US tariff rates. These changes aren’t just about paying a little more at the border—they can completely upend how multinational companies set prices between their own entities around the world, a process known as transfer pricing.",
    image: "/sphere/Photo-1.png",
    createdAt: "2025-08-31",
    badges: [
      ESphereArticleCategory.Documentation,
      ESphereArticleCategory.Litigation,
    ],
    type: SphereArticleType.Guidelines,
    by: "Kruthi Kinhal",
  },
  {
    id: "2",
    title:
      "AI Meets Transfer Pricing: How Smart Tech Is Revolutionizing Global Tax Compliance",
    description:
      "If your company operates in more than one country, it probably buys, sells, or licenses goods and services between related parties. Setting the right prices for these internal transactions is crucial—not just for business reasons, but because tax authorities around the world want to make sure",
    image: "/sphere/Photo-2.png",
    createdAt: "2025-08-31",
    badges: [ESphereArticleCategory.Litigation, ESphereArticleCategory.APAs],
    type: SphereArticleType.Commentary,
    by: "Kruthi Kinhal",
  },
  {
    id: "3",
    title:
      "What the U.S.A’s Exit from OECD Pillar 1 Means for Global Taxes and Tech Giants",
    description:
      "If you’ve been following global tax news, you’ve probably heard about the OECD’s Pillar 1. In simple terms, it’s an international effort to update tax rules for our digital age. The idea? Make sure that the world’s biggest companies —especially tech giants—pay taxes not just where they’re headquartered, but also where their customers are.",
    image: "/sphere/Photo-3.png",
    createdAt: "2025-08-31",
    badges: [ESphereArticleCategory.Documentation],
    type: SphereArticleType.Commentary,
    by: "Kruthi Kinhal",
  },
  {
    id: "4",
    title:
      "Billion-Dollar Battles: 7 High-Profile Transfer Pricing Cases Every Business Should Know",
    description:
      "Transfer pricing may not be breaking news on Wall Street, but in tax departments across the globe, it’s drawing headlines—and billion-dollar bills. As global tax authorities ramp up audits and crack down on profit shifting, several major multinationals",
    image: "/sphere/Photo-4.png",
    createdAt: "2025-08-31",
    badges: [ESphereArticleCategory.APAs],
    type: SphereArticleType.Guidelines,
    by: "Kruthi Kinhal",
  },
  {
    id: "5",
    title: "How Global Elections Are Influencing Transfer Pricing Policies",
    description:
      "The years 2024 and 2025 have seen a surge in national elections worldwide, with over 70 countries heading to the polls. These political transitions are significantly affecting international tax strategies, particularly in the realm of transfer pricing.",
    image: "/sphere/Photo-5.png",
    createdAt: "2025-08-31",
    badges: [
      ESphereArticleCategory.Documentation,
      ESphereArticleCategory.Litigation,
    ],
    type: SphereArticleType.Guidelines,
    by: "Kruthi Kinhal",
  },
];
export const sphereArticles: ISphereArticle[] = [
  ...Array.from({ length: 20 }, (_, index) => ({
    ...articles[index % articles.length],
    id: (Number(index) + 1).toString(),
  })),
  ...news,
  ...podcastArticles,
  ...caseLaws,
];
export const heroArticle: ISphereArticle = {
  ...sphereArticles[0],
  image: "/sphere/Article abstract financial topic thumbnail.png",
  description:
    "If you run a global business, you know that the rules of international trade can change overnight. One of the biggest game-changers in recent years? Shifting US tariff rates.",
  badges: [
    ESphereArticleCategory.Documentation,
    ESphereArticleCategory.Litigation,
  ],
  type: SphereArticleType.News,
};
