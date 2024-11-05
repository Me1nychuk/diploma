import React from "react";
import type { Metadata } from "next";
import { LoginForm } from "@/shared/components/shared";

export const metadata: Metadata = {
  title: "NUWM | Login",
  description: "Форма входу у систему",
};

const LoginPage: React.FC = () => {
  return (
    <>
      <div className=" w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
