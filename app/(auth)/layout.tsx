import { Container, Header } from "@/shared/components/shared";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Container className="min-h-full flex flex-col h-full ">
        <Header
          className="bg-background-transparent glass px-5 py-3 rounded-xl mb-5"
          clear
        />
        {children}
      </Container>
    </>
  );
};

export default Layout;
