import { getFlagUrl } from "@/utils/flags";

const countries = [
  {
    label: "United States",
    value: "US",
  },
  {
    label: "Australia",
    value: "AU",
  },
  {
    label: "Canada",
    value: "CA",
  },
  {
    label: "India",
    value: "IN",
  },
  {
    label: "Italy",
    value: "IT",
  },
  {
    label: "Mexico",
    value: "MX",
  },
  {
    label: "United Kingdom",
    value: "GB",
  },
  {
    label: "Ireland",
    value: "IE",
  },
  {
    label: "France",
    value: "FR",
  },
  {
    label: "Luxembourg",
    value: "LU",
  },
  {
    label: "Denmark",
    value: "DK",
  },
  {
    label: "Czech Republic",
    value: "CZ",
  },
  {
    label: "Malaysia",
    value: "MY",
  },
  {
    label: "South Korea",
    value: "KR",
  },
  {
    label: "Colombia",
    value: "CO",
  },
  {
    label: "Argentina",
    value: "AR",
  },
  {
    label: "Zambia",
    value: "ZM",
  },
  {
    label: "South Africa",
    value: "ZA",
  },
];
export const COUNTRIES = countries.map(country => ({
  label: country.label,
  value: country.value,
  startImg: {
    src: getFlagUrl(country.value),
    alt: country.label,
    width: 20,
    height: 20,
  },
}));
