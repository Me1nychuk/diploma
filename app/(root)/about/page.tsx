import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | About us",
  description: ", ..",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-background  grid  place-items-center">
        <p className="mt-50 text-4xl">AboutPage page</p>
      </div>
    </>
  );
};

export default AboutPage;
