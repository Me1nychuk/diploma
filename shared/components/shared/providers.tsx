"use client";

import React from "react";

import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store, { persistor } from "@/shared/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "@/shared/components/shared/auth/auth-provider";

interface ProvidersProps {
  children?: React.ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <div className="flex-1 flex relative z-10 min-h-full">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthProvider>{children}</AuthProvider>
            <NextTopLoader />
            <Toaster position="top-right" reverseOrder={false} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};
