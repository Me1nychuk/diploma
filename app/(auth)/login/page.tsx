import React, { Suspense } from "react";
import type { Metadata } from "next";
import { LoginForm } from "@/shared/components/shared";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "NUWM | Login",
  description: "Форма входу у систему",
};

const LoginPage: React.FC = () => {
  return (
    <>
      <div className=" w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
        <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
          <LoginForm />
        </Suspense>
      </div>
    </>
  );
};

export default LoginPage;
