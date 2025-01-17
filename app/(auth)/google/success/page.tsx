"use client";
import { GoogleContent } from "@/shared/components/shared/auth";
<<<<<<< HEAD
import { useSearchParams } from "next/navigation";
import React from "react";

const Page: React.FC = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  return (
    <div className="w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
      {token && <GoogleContent token={token} />}
=======
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  if (!token) {
    router.replace("/login");
  }

  return (
    <div className=" w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
      <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
        {token && <GoogleContent token={token} />}
      </Suspense>
>>>>>>> 9f009d7 (Added Composition)
    </div>
  );
};

export default Page;
