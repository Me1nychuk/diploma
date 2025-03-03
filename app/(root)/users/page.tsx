import { UsersPageContent } from "@/shared/components/shared";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const Page: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
        <UsersPageContent />
      </Suspense>
    </div>
  );
};

export default Page;
