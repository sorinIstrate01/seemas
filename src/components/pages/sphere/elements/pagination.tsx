import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { TSphereParams } from "@/types/sphere";
const generatePaginationItems = (totalPages: number, currentPage: number) => {
  if (totalPages <= 6)
    return Array.from({ length: totalPages }).map((_, index) => index + 1);
  else if (totalPages <= 8) {
    if (currentPage <= 4) {
      return [
        ...Array.from({ length: 5 }).map((_, index) => index + 1),
        null,
        totalPages,
      ];
    } else {
      return [
        1,
        null,
        ...Array.from({ length: 5 }).map((_, index) => totalPages - 4 + index),
      ];
    }
  } else {
    if (currentPage <= 4) {
      return [
        ...Array.from({ length: 5 }).map((_, index) => index + 1),
        null,
        totalPages,
      ];
    } else if (currentPage > 4 && currentPage < totalPages - 3) {
      return [
        1,
        null,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        null,
        totalPages,
      ];
    } else {
      return [
        1,
        null,
        ...Array.from({ length: 5 }).map((_, index) => totalPages - 4 + index),
      ];
    }
  }
};
const SpherePagination = ({
  page,
  totalPages,
  sectionId,
  path,
  className,
  params,
}: {
  params: TSphereParams;
  page: number;
  totalPages: number;
  sectionId: string;
  path: string;
  className?: HTMLDivElement["className"];
}) => {
  const searchParamsString = Object.entries(params).reduce(
    (acc, [key, value]) => {
      if (value && key !== "page") {
        acc.set(key, value.toString());
      }
      return acc;
    },
    new URLSearchParams()
  );
  const paginationItems = generatePaginationItems(totalPages, page);
  return (
    <Pagination className={cn("w-full md:w-fit", className)}>
      <PaginationContent className="w-full md:w-fit gap-0 justify-between md:justify-start md:gap-3">
        <PaginationItem>
          <PaginationPrevious
            href={`${path}?${searchParamsString.toString()}&page=${
              page - 1
            }#${sectionId}`}
            disabled={page === 1}
            scroll={true}
          />
        </PaginationItem>
        <div className="flex gap-1 items-center">
          {paginationItems.map((item, index) => {
            return (
              <PaginationItem key={index}>
                {item === null ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    isActive={page === item}
                    href={`${path}?${searchParamsString.toString()}&page=${item}#${sectionId}`}
                    // scroll={true}
                    iconOnly
                  >
                    {item}
                  </PaginationLink>
                )}
              </PaginationItem>
            );
          })}
        </div>

        <PaginationItem>
          <PaginationNext
            href={`${path}?${searchParamsString.toString()}&page=${
              page + 1
            }#${sectionId}`}
            disabled={page === totalPages}
            scroll={true}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default SpherePagination;
