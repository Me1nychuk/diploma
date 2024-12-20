"use client";
import React from "react";
import Image from "next/image";

import { InfoBlock } from "@/shared/components/shared";
import { useFadeInAnimation } from "@/shared/hooks";
import { animated } from "@react-spring/web";
export const AboutUsContent = () => {
  const { ref: ref1, styles: styles1 } = useFadeInAnimation();
  const { ref: ref2, styles: styles2 } = useFadeInAnimation();
  const { ref: ref3, styles: styles3 } = useFadeInAnimation();
  const { ref: ref4, styles: styles4 } = useFadeInAnimation();
  const { ref: ref5, styles: styles5 } = useFadeInAnimation();
  const { ref: ref6, styles: styles6 } = useFadeInAnimation();

  return (
    <>
      <div>
        <h1 className=" text-4xl text-center font-bold mb-5">Про нас</h1>
        <div className="relative max-w-[80%] mx-auto min-sm:w-[60%]">
          <Image
            src="/about-us/proc-1.png"
            alt="processor"
            width={100}
            height={100}
            className="  drop-shadow-2xl absolute -top-4
            -left-14  floating-1  max-sm:max-w-[50px] max-sm:-top-2 max-sm:-left-5"
          />
          <Image
            src="/about-us/proc-2.png"
            alt="processor"
            width={100}
            height={100}
            className="  drop-shadow-2xl absolute -bottom-4
            -right-14  floating-2 max-sm:max-w-[50px] max-sm:-bottom-2 max-sm:-right-5"
          />
          <Image
            src="/about-us/members.jpg"
            alt="Our family"
            width={1920}
            height={1080}
            className="rounded-xl  w-full custom-shadow mx-auto mb-5"
          />
        </div>

        <animated.div ref={ref1} style={styles1}>
          <InfoBlock
            contentClassName="max-w-[500px] max-md:max-w-full  bg-background p-3 rounded-xl custom-shadow"
            url="/lion/5.png"
            alt="Lion"
            size={200}
          >
            <p>
              Ми кафедра обчислювальної техніки – спадкоємниця кафедри
              обчислювальної математики, яку створено у вересні 1966 р.
              внаслідок розділення кафедри вищої математики. Протягом свого
              існування кафедра стала важливим центром підготовки фахівців у
              галузі інформаційних технологій та обчислювальної техніки.
            </p>
          </InfoBlock>
        </animated.div>

        <animated.div ref={ref2} style={styles2}>
          <InfoBlock
            contentClassName="max-w-[500px] max-md:max-w-full  bg-background p-3 rounded-xl custom-shadow"
            url="/lion/6.png"
            alt="Lion"
            size={200}
            right
          >
            <p>
              З моменту заснування ми активно впроваджуємо сучасні методи
              навчання та досліджень, орієнтуючи нашу програму на потреби ринку
              праці та технологічні тренди. Кафедра проводить численні наукові
              дослідження в таких напрямках, як алгоритмізація, розробка
              програмного забезпечення, обробка даних та штучний інтелект. Наші
              викладачі – це професіонали, які мають значний досвід у наукових
              розробках, що дозволяє студентам отримувати актуальні знання і
              навички.
            </p>
          </InfoBlock>
        </animated.div>

        <animated.div ref={ref3} style={styles3}>
          <InfoBlock
            contentClassName="max-w-[500px] max-md:max-w-full  bg-background p-3 rounded-xl custom-shadow"
            url="/lion/8.png"
            alt="Lion"
            size={200}
          >
            <p>
              Ми також активно співпрацюємо з провідними IT-компаніями, що надає
              нашим студентам можливість проходити практику та стажування, а
              також брати участь у реальних проектах. Відкрите спілкування зі
              студентами, можливість обговорення ідей та спільна робота над
              інноваційними проектами створюють унікальну атмосферу для навчання
              і розвитку.
            </p>
          </InfoBlock>
        </animated.div>

        <animated.div ref={ref4} style={styles4}>
          <InfoBlock
            contentClassName="max-w-[500px] max-md:max-w-full  bg-background p-3 rounded-xl custom-shadow"
            url="/lion/7.png"
            alt="Lion"
            size={200}
            right
          >
            <p>
              В рамках кафедри регулярно проводяться семінари, конференції та
              конкурси, що стимулює наукову діяльність серед студентів і
              викладачів. Наші випускники успішно реалізують себе в різних
              сферах, зокрема в академічній науці, IT-індустрії, стартапах та
              державних установах.
            </p>
          </InfoBlock>
        </animated.div>

        <animated.div ref={ref5} style={styles5}>
          <InfoBlock
            contentClassName="max-w-[500px] max-md:max-w-full  bg-background p-3 rounded-xl custom-shadow"
            url="/lion/9.png"
            alt="Lion"
            size={200}
          >
            <p>
              Таким чином, кафедра обчислювальної техніки не лише продовжує
              традиції своєї попередниці, а й активно розвивається, відповідаючи
              на виклики сучасності та забезпечуючи високий рівень освіти у
              своїй галузі.
            </p>
          </InfoBlock>
        </animated.div>

        <animated.div ref={ref6} style={styles6}>
          <p className="mb-5 mx-auto text-center w-[300px] max-xxs::max-w-full  bg-background p-3 rounded-xl custom-shadow ">
            Ну якось воно так виходить😁😁😁
          </p>
        </animated.div>
      </div>
    </>
  );
};
