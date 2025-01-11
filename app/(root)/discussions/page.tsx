import { DiscussionsPageContent } from "@/shared/components/shared";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const News: React.FC = () => {
  return (
    <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
      <DiscussionsPageContent />
    </Suspense>
  );
};

export default News;