"use client";
import { GoogleContent } from "@/shared/components/shared/auth";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page: React.FC = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  return (
    <div className="w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
      {token && <GoogleContent token={token} />}
    </div>
  );
};

export default Page;
