import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Loader2 } from "lucide-react";
import { ResetForm } from "@/shared/components/shared/auth";

export const metadata: Metadata = {
  title: "NUWM | Reset password",
  description: "Reset password",
};

const VerifyPage = ({ params: { token } }: { params: { token: string } }) => {
  return (
    <>
      <div className=" w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
        <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
          <ResetForm token={token} />
        </Suspense>
      </div>
    </>
  );
};

export default VerifyPage;
