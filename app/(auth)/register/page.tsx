import React from "react";
import type { Metadata } from "next";
import { RegisterForm } from "@/shared/components/shared";

export const metadata: Metadata = {
  title: "NUWM | Register",
  description: ", ..",
};

const RegisterPage: React.FC = () => {
  return (
    <>
      <div className=" w-full max-w-[700px] p-5 rounded-xl glass h-full mx-auto">
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
