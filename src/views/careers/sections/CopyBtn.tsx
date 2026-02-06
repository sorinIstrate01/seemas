"use client";

import { Button } from "@/components/ui/button";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import React, { useState } from "react";

const CopyBtn = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      size={"iconL"}
      variant={"ghost"}
      className="p-0 hover:text-blue-primary relative"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }}
    >
      {copied ? <IconCheck size={20} /> : <IconCopy size={20} />}
    </Button>
  );
};

export default CopyBtn;
