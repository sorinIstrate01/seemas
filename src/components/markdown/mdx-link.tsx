import Link from "next/link";
import { Button } from "../ui/button";
import { IconChevronRight } from "@tabler/icons-react";

const MdxLink = ({ link, text }: { link: string; text: string }) => {
  return (
    <Button
      variant="layer"
      size="M"
      className="w-fit [&_svg]:size-5 !no-underline"
      asChild
    >
      <Link href={link} target="_blank">
        {text} <IconChevronRight />
      </Link>
    </Button>
  );
};
export default MdxLink;
