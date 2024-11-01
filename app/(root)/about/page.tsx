import React from "react";
import type { Metadata } from "next";
import { AboutUsContent } from "@/shared/components/shared";

export const metadata: Metadata = {
  title: "NUWM | About us",
  description: "",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutUsContent />
    </>
  );
};

export default AboutPage;
