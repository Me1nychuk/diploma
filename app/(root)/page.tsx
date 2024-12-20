import { Container, Greetings, HeroSection } from "@/shared/components/shared";
import { Loader2 } from "lucide-react";

import Link from "next/link";
import React, { Suspense } from "react";

const Home: React.FC = () => {
  return (
    <Container className="max-w-full h-full">
      <Suspense fallback={<Loader2 className=" animate-spin mx-auto mt-2" />}>
        <HeroSection />

        <Greetings />

        <Link href="/users/1">Users</Link>
      </Suspense>
    </Container>
  );
};

export default Home;
