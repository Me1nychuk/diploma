import React, { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { DiscussionVerifyPageContent } from "@/shared/components/shared";

const Page: React.FC = () => {
  return (
    <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
      <DiscussionVerifyPageContent />
    </Suspense>
  );
};

export default Page;
