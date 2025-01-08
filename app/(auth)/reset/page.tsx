import { ResetContent } from "@/shared/components/shared/auth";
import { Loader2 } from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "NUWM | Reset password",
  description: "Reset password",
};

const VerifyPage = () => {
  return (
    <>
      <div className=" w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
        <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
          <ResetContent />
        </Suspense>
      </div>
    </>
  );
};

export default VerifyPage;
