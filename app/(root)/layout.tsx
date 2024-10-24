import { Container, Header } from "@/shared/components/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Main",
  description: ", ..",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Container className="flex-1 glass max-w-[1400px]  max-h-full rounded-2xl px-4 py-3 ">
        <Header className="border-b-2 border-text mb-5  py-4 " />
        <main>
          {modal}
          {children}
        </main>
      </Container>
    </>
  );
}
