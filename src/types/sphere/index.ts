import { EDataRangeOptions } from "@/constants/data";

export enum ESphereArticleCategory {
  Documentation = "Documentation",
  Litigation = "Litigation",
  APAs = "APAs",
}
export enum SphereArticleType {
  Commentary = "Commentary",
  News = "News",
  Guidelines = "Guidelines",
  CaseLaws = "Case Laws",
  Podcast = "Podcast",
}

export enum EArticleSourceType {
  PDF = "PDF",
  HTML = "HTML",
  WEBSITE = "WEBSITE",
}
export type TSphereParams = {
  page?: number;
  type?: SphereArticleType | "All";
  search?: string;
  category?: ESphereArticleCategory;
  country?: string;
  dataRange?: EDataRangeOptions;
  // publishedAt?: string;
};
export interface IBullet {
  title: string;
  description?: string;
}

export interface ISubsection {
  title: string;
  description: string;
}

export interface ISubContent {
  title?: string;
  description?: string;
  bullets?: IBullet[];
}

export interface IArticleSection {
  title?: string;
  content?: string;
  image?: string;
  bullets?: IBullet[];
  subsections?: ISubsection[];
  subContent?: ISubContent[];
}

// export interface IArticleBase {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   video?: string;
//   createdAt: string;
//   badges?: ESphereArticleCategory[];
//   type: SphereArticleType;
//   by?: string;
// }
// export interface IArticle extends IArticleBase {
//   markdown: string;
// }
