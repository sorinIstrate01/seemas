import { FC } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export interface ProfileType {
  name: string;
  role: string;
  image: string;
  bottomCaption?: string;
  className?: string;
}

export type ProfileCardProps = ProfileType;

export const ProfileCard: FC<ProfileCardProps> = ({
  image,
  name,
  role,
  bottomCaption,
  className,
}) => {
  // Fallback to initials if image fails or isn't provided
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center gap-6 bg-white outline outline-1 outline-zinc-100 -outline-offset-1 rounded-lg px-3 py-6 md:px-6 md:py-10 ",
        className
      )}
    >
      <Avatar className="size-[110px] md:size-[132px]">
        {image ? (
          <AvatarImage src={image} alt={name} />
        ) : (
          <AvatarFallback>{initials}</AvatarFallback>
        )}
      </Avatar>

      <div className="flex flex-col items-center gap-1.5">
        <h4 className="text-body-s md:text-body-xl font-medium text-zinc-900">
          {name}
        </h4>
        {role && (
          <p className="text-caption-m md:text-body-s text-zinc-500">{role}</p>
        )}

        {bottomCaption && (
          <>
            <div
              className="w-full max-w-[200px] h-px"
              style={{
                background:
                  "linear-gradient(90deg, #FAFAFA 0%, #C7CACE 50%, #FAFAFA 100%)",
              }}
            />
            <p className="text-caption-m md:text-body-s text-zinc-500">
              {bottomCaption}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
