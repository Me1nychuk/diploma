import { Container } from "@/shared/components/shared";
import { ThemeSwitch } from "@/shared/components/shared/theme-switch";
import { Skeleton } from "@/shared/components/ui";

import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <Container className="h-full">
      <p className="mt-50 h-40 text-4xl ">Homepage</p>

      <ThemeSwitch />

      <Link href="/users/1">Users</Link>
    </Container>
  );
};

export default Home;
