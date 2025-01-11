import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import React from "react";

interface NewsItemProps {
  className?: string;
  title: string;
  date: string;
  id: string;
  description?: string;
}
export const NewsItem = ({
  className,
  title,
  date,
  id,
  description,
}: NewsItemProps) => {
  return (
    <>
      <div
        className={cn(
          " flex flex-col gap-1 glass-2 p-2 rounded-xl  hover:scale-105 transition-all duration-200 ]",
          className
        )}
      >
        {title && (
          <h3 className="font-bold mb-auto">
            {title.length > 60 ? title.slice(0, 60) + "..." : title}{" "}
          </h3>
        )}
        {description && (
          <p className=" mb-3 text-sm ">
            {description?.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        )}
        <p className="absolute top-2 right-2 text-[12px]">
          {new Date(date).toLocaleDateString()}
        </p>
        <Link
          href={`/news/${id}`}
          className="block w-full    text-tertiary hover:underline  transition-all duration-200  text-center"
        >
          Переглянути новину
        </Link>
      </div>
    </>
  );
};
