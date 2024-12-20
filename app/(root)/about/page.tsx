import React, { Suspense } from "react";
import type { Metadata } from "next";
import { AboutUsContent } from "@/shared/components/shared";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "NUWM | About us",
  description: "",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
        <AboutUsContent />
      </Suspense>
    </>
  );
};

export default AboutPage;
