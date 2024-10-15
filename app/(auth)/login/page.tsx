import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Login",
  description: ", ..",
};

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-background  grid  place-items-center">
        <p className="mt-50 text-4xl">LoginPage</p>
      </div>
    </>
  );
};

export default LoginPage;
