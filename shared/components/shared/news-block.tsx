import { cn } from "@/shared/lib/utils";
import React from "react";
import { NewsItem } from "./news-item";

interface NewsBlockProps {
  className?: string;
}
export const NewsBlock = ({ className }: NewsBlockProps) => {
  return (
    <>
      <div className={cn("news-block ", className)}>
        <NewsItem
          id="1"
          title="New Title"
          description="some description, bla bla blaaa lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia"
        />
        <NewsItem
          id="2"
          title="New Title"
          description="some description, bla bla blaaa lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia"
        />
        <NewsItem
          id="3"
          title="New Title"
          description="some description, bla bla blaaa lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia"
        />
        <NewsItem
          id="4"
          title="New Title"
          description="some description, bla bla blaaa lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia"
        />
        <NewsItem id="5" title="New Title" />
        <NewsItem
          id="6"
          title="New Title"
          description="some description, bla bla blaaa lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia"
        />
        <NewsItem
          id="7"
          title="New Title"
          description="some description, bla bla blaaa lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia"
        />
        <NewsItem
          id="8"
          title="New Title"
          description="some description, bla bla blaaa lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia"
        />
        <NewsItem
          id="9"
          title="New Title"
          description="some description, bla bla blaaa lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia"
        />
      </div>
    </>
  );
};
