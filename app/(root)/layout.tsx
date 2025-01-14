import { Container, Footer, Header } from "@/shared/components/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Main",
  description: "Main page",
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
      <Container className=" relative  flex-1 glass max-w-[1400px]  max-h-full rounded-2xl px-4 py-3 ">
        <Header className="absolute w-[calc(100%-32px)] border-b-2 border-text   py-4  " />
        <main className="pt-[85px] mb-[80px] max-xs:mb-[95px] ">
          {modal}
          {children}
        </main>
        <Footer className="absolute w-[calc(100%-32px)] bottom-2 " />
      </Container>
    </>
  );
}
