import { EditPageContent } from "@/shared/components/shared/edit";
import { Loader2 } from "lucide-react";

import React, { Suspense } from "react";

interface PageProps {
  params: { id: string };
}

const NewsEditPage: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  return (
    <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
      <EditPageContent id={id} />;
    </Suspense>
  );
};

export default NewsEditPage;
