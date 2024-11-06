import { NewsPageContent } from "@/shared/components/shared";
import React, { Suspense } from "react";

const News: React.FC = () => {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <NewsPageContent />
    </Suspense>
  );
};

export default News;
