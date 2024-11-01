import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import React from "react";

interface InfoBlockProps {
  className?: string;
  url?: string;
  alt?: string;
  size?: number;
  right?: boolean;
  children: React.ReactNode;
  width?: number;
  contentClassName?: string;
}
export const InfoBlock = ({
  className,
  children,
  url,
  alt,
  right = false,
  size = 120,
  width,
  contentClassName,
}: InfoBlockProps) => {
  return (
    <>
      <div
        style={{ width: width ? `${width}px` : "auto" }}
        className={cn(
          "flex gap-1 max-sm:flex-col items-center  mr-0 max-w-full max-sm:w-full mb-5 text-sm",
          right && "flex-row-reverse max-sm:flex-col-reverse ml-auto",

          className
        )}
      >
        {url && alt && (
          <Image
            src={url}
            alt={alt}
            width={size}
            height={size}
            className="drop-shadow-2xl rounded-xl"
          />
        )}
        <div className={cn("text-text  flex-1  indent-2", contentClassName)}>
          {children}
        </div>
      </div>
    </>
  );
};
