import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | News",
  description: "Новини кафедри, останні події, додаткова інформація",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
