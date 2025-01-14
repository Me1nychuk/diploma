import { NewsArticle } from "@/shared/components/shared";
import React from "react";

interface PageProps {
  params: { id: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { id } = params;

  return (
    <>
      <div className="">
        {id && <NewsArticle id={id} />}
        {!id && <p className="mt-50 text-4xl">ID - новини не знайдено</p>}
      </div>
    </>
  );
};

export default Page;
