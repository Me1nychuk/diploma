import React from "react";
import type { Metadata } from "next";
import { VerificationForm } from "@/shared/components/shared/auth/verification-form";

export const metadata: Metadata = {
  title: "NUWM | Verify",
  description: " Verify your email",
};

const VerifyPage = ({ params: { token } }: { params: { token: string } }) => {
  return (
    <>
      <div className=" w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
        <VerificationForm token={token} />
      </div>
    </>
  );
};

export default VerifyPage;
