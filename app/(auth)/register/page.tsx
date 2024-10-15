import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Register",
  description: ", ..",
};

const RegisterPage: React.FC = () => {
  return (
    <>
      <div className="bg-background  grid  place-items-center">
        <p className="mt-50 text-4xl">RegisterPage</p>
      </div>
    </>
  );
};

export default RegisterPage;
