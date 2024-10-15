"use client";

import React from "react";

import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children?: React.ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      <NextTopLoader />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
