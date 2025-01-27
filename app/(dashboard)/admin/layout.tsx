import { Container } from "@/shared/components/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Admin panel",
  description: "Панель адміністратора",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container className=" relative  flex-1 glass max-w-[1400px]  max-h-full rounded-2xl px-4 py-3 ">
        <main>{children}</main>
      </Container>
    </>
  );
}
