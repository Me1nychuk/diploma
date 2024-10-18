import { Container } from "@/shared/components/shared";
import { cn } from "@/shared/lib/utils";
import React from "react";

interface HeaderProps {
  className?: string;
}
export const Header = ({ className }: HeaderProps) => {
  return (
    <>
      <Container>
        <header className={cn("glass", className)}>Header</header>
      </Container>
    </>
  );
};
