"use client";
import React from "react";
import { animated } from "@react-spring/web";
import { InfoBlock } from "@/shared/components/shared";
import { useFadeInAnimation } from "@/shared/hooks";
interface GreetingsProps {
  className?: string;
}
export const Greetings = ({ className }: GreetingsProps) => {
  const { ref: ref1, styles: styles1 } = useFadeInAnimation();
  const { ref: ref2, styles: styles2 } = useFadeInAnimation();
  const { ref: ref3, styles: styles3 } = useFadeInAnimation();
  const { ref: ref4, styles: styles4 } = useFadeInAnimation();
  return (
    <>
      <animated.div ref={ref1} style={styles1}>
        <InfoBlock
          url="/lion/1.png"
          alt="Lion"
          size={200}
          width={500}
          contentClassName=" bg-background p-3 rounded-xl custom-shadow"
        >
          <p className=" ">
            Наша кафедра є частиною Національного університету водного
            господарства та природокористування (НУВГП) у Рівному — технічного
            університету України, що спеціалізується на природничих та
            інженерних науках.
          </p>
        </InfoBlock>
      </animated.div>

      <animated.div ref={ref2} style={styles2}>
        <InfoBlock
          url="/lion/2.png"
          alt="Lion"
          size={200}
          width={500}
          right
          contentClassName=" bg-background p-3 rounded-xl custom-shadow"
        >
          <p>
            Ми готуємо висококваліфікованих спеціалістів у галузях IT,
            програмування, автоматизації та обчислювальної техніки.
          </p>
        </InfoBlock>
      </animated.div>

      <animated.div ref={ref3} style={styles3}>
        <InfoBlock
          url="/lion/3.png"
          alt="Lion"
          size={200}
          width={500}
          contentClassName=" bg-background p-3 rounded-xl custom-shadow"
        >
          <p>
            Наші студенти вивчають розробку програмного забезпечення,
            комп'ютерні мережі, штучний інтелект та автоматизовані системи
            управління, що забезпечує їх сучасними знаннями й навичками для
            роботи з новітніми технологіями.
          </p>
        </InfoBlock>
      </animated.div>

      <animated.div ref={ref4} style={styles4}>
        <InfoBlock
          url="/lion/4.png"
          alt="Lion"
          size={200}
          width={500}
          right
          contentClassName=" bg-background p-3 rounded-xl custom-shadow"
        >
          <p>
            Кафедра розташована у головному корпусі НУВГП за адресою: м. Рівне,
            вул. Соборна, 11. Оснащена сучасними лабораторіями, вона створює всі
            умови для поглибленого навчання та досліджень у сфері комп'ютерних
            наук і автоматизації.
          </p>
        </InfoBlock>
      </animated.div>
    </>
  );
};
