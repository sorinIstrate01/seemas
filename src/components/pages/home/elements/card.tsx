import Image from "next/image";

export interface CardProps {
  image: string;
  title: string;
  description: string;
}
const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="flex flex-col md:h-[474px] w-full xl:w-[628px] border border-zinc-100 rounded-2xl bg-white">
      <div className="px-3 pt-3 w-full flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 w-full rounded-xl overflow-hidden border border-zinc-100">
          <Image
            src={image}
            alt={title}
            width={604}
            height={294}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="px-4 py-6 gap-[5px] md:px-8 md:py-8 md:gap-4 flex flex-col">
        <h6 className="text-subtitle-m md:text-subtitle-xl text-zinc-900">
          {title}
        </h6>
        <p className="text-body-s md:text-body-m text-zinc-800 md:whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
