import React, { Suspense } from "react";
import { CreatePageContent } from "@/shared/components/shared/edit";
import { Loader2 } from "lucide-react";

const Page: React.FC = () => {
  return (
    <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
      <CreatePageContent />
    </Suspense>
  );
};

export default Page;
