import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsItemProps {
  className?: string;
  title: string;
  imageUrl?: string;
  id: string;
  description?: string;
}
export const NewsItem = ({
  className,
  title,
  imageUrl,
  id,
  description,
}: NewsItemProps) => {
  return (
    <>
      <div
        className={cn(
          " flex flex-col gap-1 bg-background p-2 rounded-xl custom-shadow hover:scale-105 transition-all duration-200 ]",
          className
        )}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={200}
            className="rounded-xl mx-auto min-md:w-[150px] min-md:h-[150px]"
          />
        ) : (
          <Image
            src={"/lion/14.png"}
            alt={title}
            width={200}
            height={200}
            className="rounded-xl mx-auto  min-md:w-[150px] min-md:h-[150px]"
          />
        )}
        <h3 className="font-bold mb-auto">{title}</h3>
        {description && (
          <p className=" mb-3 ">
            {description?.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        )}
        <Link
          href={`/news/${id}`}
          className="block bg-tertiary rounded-[5px] p-2 text-background hover:opacity-60 transition-all duration-200  self-center"
        >
          Детальніше
        </Link>
      </div>
    </>
  );
};
