import { Container, Greetings, HeroSection } from "@/shared/components/shared";

import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <Container className="max-w-full h-full">
      <HeroSection />

      <Greetings />

      <Link href="/users/1">Users</Link>
    </Container>
  );
};

export default Home;
