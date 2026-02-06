"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import { TSphereParams } from "@/types/sphere";
import { IconSearch } from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

const SearchInput = ({
  // search,
  // page,
  // type,
  params,
  path,
  className,
}: {
  // search: string | null;
  // page: number;
  // type: SphereArticleType | "All";
  params: TSphereParams;
  path: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  const { search } = params;
  const [value, setValue] = useState(search || "");
  const debouncedValue = useDebounce(value, 500);
  const router = useRouter();
  const searchParams = useSearchParams();
  const isUpdatingFromUserInput = useRef(false);
  
  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    if (!isUpdatingFromUserInput.current) {
      setValue(urlSearch);
    }
  }, [searchParams]);
  
  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    if (debouncedValue === currentSearch) {
      isUpdatingFromUserInput.current = false;
      return;
    }

    isUpdatingFromUserInput.current = true;
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.delete("search");
    currentParams.delete("page");
    
    if (debouncedValue) {
      currentParams.set("search", debouncedValue);
    }
    router.push(`${path}?${currentParams.toString()}`, { scroll: false });
  }, [debouncedValue, router, path, searchParams]);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const search = formData.get("search") as string;
        setValue(search);
      }}
      className={cn("relative w-[320px]", className)}
    >
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <IconSearch className="size-4 text-gray-400" />
      </div>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        name="search"
        className="h-10 min-h-10 pl-9"
        placeholder="Search by name or keywords"
      />
      <Button type="submit" className="hidden">
        Search
      </Button>
    </form>
  );
};
export default SearchInput;
