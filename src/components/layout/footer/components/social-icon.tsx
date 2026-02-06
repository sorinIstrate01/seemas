import { FC } from "react";

export interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

const SocialIcon: FC<SocialIconProps> = ({ href, children }) => {
  return <a href={href} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-lg w-8 h-8 p-1 outline outline-1 outline-zinc-800 -outline-offset-1 text-white bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] hover:bg-[rgba(255,255,255,0.20)]'>
    {children}
  </a >
};

export default SocialIcon;
