"use client";
import { SelectField } from "@/components/molecules/SelectField/SelectField";
import { dataRangeOptions, EDataRangeOptions } from "@/constants/data";
import { COUNTRIES } from "@/constants/data/countries";
// import { ESphereArticleCategory } from "@/constants/sphere/sphere";
import { cn } from "@/lib/utils";
import { TSphereParams } from "@/types/sphere";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
const fields = ["category", "country", "publishedAt", "dataRange"];

type CountryOption = {
  label: string;
  value: string;
  startImg: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const Filters = ({
  params,
  path,
  className,
  hideHeader = false,
  countries = COUNTRIES,
}: {
  path: string;
  className?: HTMLFormElement["className"];
  params: TSphereParams;
  hideHeader?: boolean;
  countries?: CountryOption[];
}) => {
  const router = useRouter();
  const onClear = useCallback(() => {
    const searchParamsString = Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value && !fields.includes(key) && key !== "page") {
          acc.set(key, value.toString());
        }
        return acc;
      },
      new URLSearchParams()
    );

    router.push(`${path}?${searchParamsString.toString()}`, { scroll: false });
  }, [router, params, path]);
  const handleChange = useCallback(
    (fieldKey: "category" | "country" | "dataRange", value: string) => {
      const searchParamsString = Object.entries(params).reduce(
        (acc, [key, value]) => {
          if (value && key !== fieldKey && key !== "page") {
            acc.set(key, value.toString());
          }
          return acc;
        },
        new URLSearchParams()
      );
      if (value) {
        searchParamsString.set(fieldKey, value);
      }
      router.push(`${path}?${searchParamsString.toString()}`, {
        scroll: false,
      });
    },
    [router, params, path]
  );
  return (
    <form
      className={cn(
        "flex flex-col gap-3 p-3 bg-zinc-50 border border-zinc-100 rounded-xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between",
          hideHeader && "hidden"
        )}
      >
        <h2 className="text-subtitle-xs text-zinc-800">Filters</h2>
        <button
          className="text-body-s text-zinc-800"
          onClick={onClear}
          type="button"
        >
          Clear all
        </button>
      </div>

      {/* <SelectField
        label="Category"
        options={Object.values(ESphereArticleCategory)}
        placeholder="All categories"
        value={params.category}
        onValueChange={value => handleChange("category", value)}
      /> */}
      <SelectField
        label="Show only"
        options={dataRangeOptions}
        placeholder="All time"
        value={params.dataRange}
        defaultValue={EDataRangeOptions.AllTime}
        onValueChange={value => handleChange("dataRange", value)}
      />
      <SelectField
        label="Country"
        options={countries}
        placeholder="All Countries"
        value={params.country}
        onValueChange={value => handleChange("country", value)}
      />
    </form>
  );
};
export default Filters;
