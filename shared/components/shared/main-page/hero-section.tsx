"use client";
import { cn } from "@/shared/lib/utils";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import { LogoIcon } from "../../ui";
import { MiniGallery } from "../mini-gallery";

interface HeroSectionProps {
  className?: string;
  words?: string[];
}
const slogans = [
  "Обчислюємо майбутнє разом!",
  "Ваші ідеї – наші алгоритми!",
  "Від даних до рішень: ми створюємо можливості!",
  "Кодимо знання, будуємо майбутнє!",
  "Досліджуй. Аналізуй. Створюй.",
  "Обчислення: творчість на перетині науки і технологій!",
  "Зробіть крок у світ алгоритмів і інновацій!",
  "Ваша кар'єра починається з обчислень!",
  "Знання – це потужність, обчислення – це ключ!",
  "Від ідеї до реалізації: обчислення на всіх етапах!",
];

export const HeroSection = ({
  className,
  words = slogans,
}: HeroSectionProps) => {
  return (
    <div className={cn("pt-5 mb-5 ", className)}>
      <div className="w-full min-h-  pl-5 min-md:pr-10 mb-5 text-3xl min-sm:text-5xl min-md:text-7xl  font-bold text-tertiary flex justify-between border-b-2 border-text border-opacity-45   h-[600px] min-md:h-[700px]">
        <div className="max-w-[70%] min-w-[70%] max-md:w-full  ">
          <Typewriter
            cursorColor="lightBlue"
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={words}
          />
        </div>
        <div className="flex flex-col justify-start items-center max-w-full max-h-[450px]  max-md:hidden">
          <LogoIcon size={450} />
          <p className=" text-text text-3xl">NUWM</p>
        </div>
      </div>
      <MiniGallery />
      <h1 className="text-3xl font-bold text-center underline italic">
        Кафедра обчислень: Ваш старт у світ технологій
      </h1>
    </div>
  );
};
