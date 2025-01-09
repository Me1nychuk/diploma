"use client";
import { GoogleContent } from "@/shared/components/shared/auth";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const Page: React.FC = () => {
  const token = useSearchParams().get("token");
  return (
    <div className="w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
      <Suspense fallback={<Loader2 className="animate-spin mx-auto mt-2" />}>
        {token && <GoogleContent token={token} />}
      </Suspense>
    </div>
  );
};

export default Page;
