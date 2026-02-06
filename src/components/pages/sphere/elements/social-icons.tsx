"use client";
import { Button } from "@/components/ui/button";
import {
  IconBrandX,
  IconBrandLinkedinFilled,
  IconLink,
  IconCheck,
} from "@tabler/icons-react";
import IconFacebook from "@/assets/icons/facebook.svg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ISphereArticle } from "@/constants/sphere/sphere";

interface SocialIconsProps {
  article?: ISphereArticle;
}

const SocialIcons = ({ article }: SocialIconsProps) => {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // Construct the full URL using window.location.origin and pathname
    if (typeof window !== "undefined") {
      setCurrentUrl(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);
  const shareText = article
    ? `${article.title} - ${article.description.substring(0, 100)}...`
    : "";
  const shareTitle = article?.title || "";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const openShareWindow = (url: string) => {
    window.open(
      url,
      "share-dialog",
      "width=600,height=400,resizable=yes,scrollbars=yes"
    );
  };

  const socialIcons = [
    {
      icon: copied ? IconCheck : IconLink,
      action: handleCopyLink,
      title: copied ? "Copied!" : "Copy link",
      ariaLabel: "Copy article link",
    },
    {
      icon: IconFacebook,
      action: () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}&quote=${encodeURIComponent(shareTitle)}`;
        openShareWindow(facebookUrl);
      },
      props: {
        fill: "currentColor",
      },
      title: "Share on Facebook",
      ariaLabel: "Share on Facebook",
    },
    {
      icon: IconBrandLinkedinFilled,
      action: () => {
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          currentUrl
        )}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(
          shareText
        )}`;
        openShareWindow(linkedinUrl);
      },
      title: "Share on LinkedIn",
      ariaLabel: "Share on LinkedIn",
    },
    {
      icon: IconBrandX,
      action: () => {
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl
        )}&text=${encodeURIComponent(shareTitle)}&via=SeemaS`;
        openShareWindow(twitterUrl);
      },
      title: "Share on X (Twitter)",
      ariaLabel: "Share on X (Twitter)",
    },
  ];

  return (
    <div className="flex gap-2">
      {socialIcons.map((socialIcon, i) => (
        <Button
          key={i}
          variant="layer"
          size="iconS"
          className="text-zinc-800 hover:text-zinc-900 transition-colors"
          onClick={socialIcon.action}
          title={socialIcon.title}
          aria-label={socialIcon.ariaLabel}
        >
          <socialIcon.icon {...socialIcon.props} />
        </Button>
      ))}
    </div>
  );
};
export default SocialIcons;
