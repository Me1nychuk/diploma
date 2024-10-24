import { Nunito } from "next/font/google";
import "./globals.scss";
import { Background, Providers } from "@/shared/components/shared";
import { cn } from "@/shared/lib/utils";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={cn(
          "min-h-screen   bg-main-background py-6 flex",
          nunito.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
      <Background />
    </html>
  );
}
