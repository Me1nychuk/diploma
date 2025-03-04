import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUWM | Users",
  description: "Користувачі сайту, список юзерів  ",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
