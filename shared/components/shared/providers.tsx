"use client";

import React from "react";

import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "@/shared/store/store";

interface ProvidersProps {
  children?: React.ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <div className="flex-1 flex relative z-10 min-h-full">
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <NextTopLoader />
          <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>
      </Provider>
    </div>
  );
};
