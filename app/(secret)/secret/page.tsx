import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Admin panel",
  description: ", ..",
};

const SecretPage: React.FC = () => {
  return (
    <>
      <div className="bg-background  grid  place-items-center">
        <p className="mt-50 text-4xl">SecretPage page</p>
      </div>
    </>
  );
};

export default SecretPage;
