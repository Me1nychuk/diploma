import React, { Suspense } from "react";
import type { Metadata } from "next";
import { VerificationForm } from "@/shared/components/shared/auth/verification-form";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "NUWM | Verify",
  description: " Verify your email",
};

const VerifyPage = ({ params: { token } }: { params: { token: string } }) => {
  return (
    <>
      <div className=" w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
        <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
          <VerificationForm token={token} />
        </Suspense>
      </div>
    </>
  );
};

export default VerifyPage;
