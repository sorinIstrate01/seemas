import { ROUTES } from "@/constants/routes";
import { IconBuilding, IconArrowsExchange } from "@tabler/icons-react";

export enum EPlatformGroup {
  VALUATION_SUITE = "Valuation Suite",
  TRANSFER_PRICING = "Transfer Pricing",
}

export enum EPlatformProduct {
  ENTITY_VALUATION = "Valuation Suite",
  TRANSFER_PRICING = "Transfer Pricing",
}

export const GROUP_TO_PRODUCTS_MAP = {
  [EPlatformGroup.VALUATION_SUITE]: [EPlatformProduct.ENTITY_VALUATION],
  [EPlatformGroup.TRANSFER_PRICING]: [EPlatformProduct.TRANSFER_PRICING],
};

export const explore_platform_config = [
  {
    group: EPlatformGroup.VALUATION_SUITE,
    product: EPlatformProduct.ENTITY_VALUATION,
    icon: IconBuilding,
    link: ROUTES.VALUATION_SUITE,
  },
  {
    group: EPlatformGroup.TRANSFER_PRICING,
    product: EPlatformProduct.TRANSFER_PRICING,
    icon: IconArrowsExchange,
    link: ROUTES.TRANSFER_PRICING,
  },
];
