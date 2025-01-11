import { cn } from "@/shared/lib/utils";
import React from "react";
import { NewsItem } from "./news-item";
import { News } from "@/types";

interface NewsBlockProps {
  className?: string;
  news: News[] | undefined;
}
export const NewsBlock = ({ className, news }: NewsBlockProps) => {
  if (!news) return <p className="text-center">Не було знайдено новин..</p>;
  return (
    <>
      <div className={cn("news-block h-full", className)}>
        {news &&
          news.map((item) => (
            <NewsItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.content}
              date={item.createdAt}
            />
          ))}
      </div>
    </>
  );
};
