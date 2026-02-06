import { cn } from "@/lib/utils";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ComponentProps } from "react";

type ProductCategoryProps = ComponentProps<typeof Link> & {
  title: string;
  description: string;
  href: string;
};

const ProductCategory = ({
  title,
  description,
  href,
  className,
  ...props
}: ProductCategoryProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group min-h-9 flex p-2 rounded-xl bg-white transition-all duration-100 ease-out items-center",
        "hover:bg-neutral-50",
        className
      )}
      {...props}
    >
      <div className="grow flex flex-col gap-0.5">
        <span className="text-body-s text-zinc-800">{title}</span>
        <span className="text-caption-m text-zinc-400">{description}</span>
      </div>
      <IconArrowNarrowRight
        size={16}
        className="shrink-0 text-zinc-400 group-hover:text-zinc-800 transition-all"
      />
    </Link>
  );
};

export default ProductCategory;
