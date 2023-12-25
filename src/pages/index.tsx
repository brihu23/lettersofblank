import { DelayedFadeIn } from "@/components/shared/DelayedFadeIn";
import classNames from "@/lib/classNames";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start py-16  mx-[20rem] ">
      <DelayedFadeIn delay={200} className="text-5xl">
        <TypeAnimation
          cursor={false}
          sequence={["Welcome", 500]}
          speed={50}
          repeat={1}
        />
      </DelayedFadeIn>
      <DelayedFadeIn delay={1000} className="text-4xl mt-12 mb-6">
        <TypeAnimation
          cursor={false}
          sequence={[text, 500]}
          speed={60}
          repeat={1}
        />
      </DelayedFadeIn>
      {textArray.map((wuji, index) => {
        return (
          <div
            className={classNames(
              "flex flex-col mt-6 items-start justify-start ml-4"
            )}
          >
            <DelayedFadeIn
              delay={getPreviousLengths(index, textArray, false) * 55 + 3000}
              className={classNames("text-3xl", ``)}
            >
              <TypeAnimation
                cursor={false}
                sequence={[wuji]}
                speed={65}
                repeat={1}
              />
            </DelayedFadeIn>
          </div>
        );
      })}
      <div className="flex justify-start items-center mt-10">
        <DelayedFadeIn
          delay={
            getPreviousLengths(textArray.length - 1, textArray, false) * 60 +
            3000
          }
          className="text-4xl ml-4 "
        >
          <TypeAnimation
            cursor={false}
            sequence={["➽ → ⇒ ⇨ ➙ ⟶ ➲ ➱ ↣ ↠"]}
            speed={30}
            repeat={1}
          />
        </DelayedFadeIn>
        <DelayedFadeIn
          delay={
            getPreviousLengths(textArray.length - 1, textArray, false) * 60 +
            5000
          }
          noFadeIn={false}
          className="text-3xl ml-2 flex items-center justify-start whitespace-nowrap "
        >

          <input
            type="text"
            name="password"
            placeholder="password"
            className="block text-lg w-full text-start bg-transparent border-b border-white  mx-2  hover:opacity-100 focus:opacity-100 placeholder:text-white focus:border-white text-white ring-0 outline-none outline-0 focus:ring-inset focus:ring-0  sm:leading-6 ml-8"
          />
          <div className="text-white cursor-pointer  transition-all duration-500 hover:scale-105 text-lg ml-2 border-0  border-white flex hover:opacity-100">
            enter ➢
          </div>
        </DelayedFadeIn>
      </div>
    </main>
  );
}

function getPreviousLengths(
  index: number,
  arr: string[],
  includeCurrent: boolean
) {
  return arr.reduce((acc, curr, i) => {
    if (i < index || (i === index && includeCurrent)) {
      return acc + curr.length;
    }
    return acc;
  }, 0);
}


const text_1 = `family, in some way, shape, or form,`;
const text_2 = `one of my closest friends, along some astral dimension,`;
const text_3 = `of my future self, one of my closest friends, `;
const text_4 = `a mentor,`;
const text_5 = `a truly impressive human being,`;
const text_6 = "a mix of the above...";

const textArray = [text_1, text_2, text_3, text_4, text_5, text_6];

