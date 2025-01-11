import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Discussion",
  description: "Обговорення та плітки",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
