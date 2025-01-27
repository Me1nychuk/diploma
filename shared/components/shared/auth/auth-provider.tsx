"use client";
import { useTokenRefresh } from "@/shared/hooks";
import React from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  useTokenRefresh();
  return <>{children} </>;
};

export { AuthProvider };
