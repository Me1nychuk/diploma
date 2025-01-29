import { Container } from "@/shared/components/shared";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oops! Page not found",
  description: "Page wasn't found",
};
export default function NotFound() {
  return (
    <Container className=" relative  flex-1 glass max-w-[1400px]  max-h-full rounded-2xl px-4 py-3 ">
      <main className="grid place-items-center h-full mb-[80px] max-xs:mb-[95px] ">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold mb-5 min-sm:text-3xl min-sm:mb-8">
            Сторінку не знайдено
          </h1>
          <Image
            src="/gifs/404.gif"
            alt="404"
            width={300}
            height={300}
            className="rounded-xl min-sm:mb-5"
          />

          <p className="text-sm text-center min-sm:text-base">
            Вибачте, але ця сторінка не існує або була видалена.
          </p>
          <Link
            href="/"
            className="mt-5 cursor-pointer  block p-2 bg-text text-background rounded-xl hover:opacity-60 opacity-100 transition-all duration-200 "
          >
            На головну
          </Link>
        </div>
      </main>
    </Container>
  );
}
