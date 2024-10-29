import { Container, CustomCarousel } from "@/shared/components/shared";
import { ThemeSwitch } from "@/shared/components/shared/theme-switch";

import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <Container className="h-full">
      <div className="grid place-items-center mb-5 max-w-[280px] ">
        <CustomCarousel />
      </div>

      <ThemeSwitch />

      <Link href="/users/1">Users</Link>
    </Container>
  );
};

export default Home;
