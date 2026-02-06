import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";

export type FeatureCardProps = {
  title: string;
  description: string;
  content: ReactNode;
  className?: string;
};

const FeatureCard = ({
  title,
  description,
  content,
  className,
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "flex flex-col bg-zinc-50 rounded-2xl outline outline-1 outline-zinc-100 overflow-hidden",
        className
      )}
    >
      <CardHeader className="gap-2 p-4 md:p-6">
        <CardTitle className="text-subtitle-s md:text-subtitle-l text-zinc-900">
          {title}
        </CardTitle>
        <CardDescription className="text-body-s text-zinc-500">
          {description}
        </CardDescription>
      </CardHeader>
      {/* <CardContent className="grow p-3 pt-0"> */}
      <CardContent className="grow p-0">{content}</CardContent>
    </Card>
  );
};

export default FeatureCard;
