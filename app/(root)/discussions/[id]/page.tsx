import { DiscussionArticle } from "@/shared/components/shared";
import React from "react";

interface PageProps {
  params: { id: string };
}

const DiscussionPage: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  return (
    <>
      <div>
        {id && <DiscussionArticle id={id} />}
        {!id && <p className="mt-50 text-4xl">ID - обговорення не знайдено</p>}
      </div>
    </>
  );
};

export default DiscussionPage;
