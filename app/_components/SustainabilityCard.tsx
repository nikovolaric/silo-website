"use client";

import Image from "next/image";
import { useState } from "react";

interface iESG {
  ime: string;
  title: string;
  tekst: string;
  text: string;
  img: string;
}

function SustainabilityCard({ el, srb }: { el: iESG; srb?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const { ime, title, tekst, text, img } = el;

  const tekstArr: string[] = tekst.split("  ");
  const textArr: string[] = text.split("  ");

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`bg-neutraltwo rounded-2xl shadow-xl flex flex-col gap-10 items-center pt-14 px-4 pb-4 md:px-5 md:w-5/6 md:mx-auto lg:w-full ${
        isOpen
          ? `${srb ? "lg:h-[820px] xl:h-[760px]" : "lg:h-[730px] xl:h-[710px]"}`
          : `${srb ? "lg:h-[420px] xl:h-[400px]" : "lg:h-[400px] xl:h-[390px]"}`
      } transition-[height] duration-300`}
    >
      <div className="absolute flex items-center justify-center w-20 h-20 bg-neutral rounded-full shadow-xl -mt-24">
        <Image src={img} alt="icon" height="40" width="40" />
      </div>
      <h3 className="font-raj font-bold text-primary text-2xl text-center lg:h-16">
        {srb ? ime : title}
      </h3>
      {srb && (
        <div className="flex flex-col gap-4 font-light text-secondary">
          {tekstArr.map((el: string, i: number) => (
            <p key={i} className={`${i === 0 || isOpen ? "" : "lg:hidden"}`}>
              {el}
            </p>
          ))}
        </div>
      )}
      {!srb && (
        <div className="flex flex-col gap-4 font-light text-secondary">
          {textArr.map((el: string, i: number) => (
            <p key={i} className={`${i === 0 || isOpen ? "" : "lg:hidden"}`}>
              {el}
            </p>
          ))}
        </div>
      )}
      {!isOpen && (
        <div className="self-end grow flex items-end">
          <button
            onClick={handleClick}
            className="hidden lg:block w-8 h-8 rounded-full border border-primary text-primary hover:bg-white hover:border-white transition-colors duration-300"
          >
            +
          </button>
        </div>
      )}
      {isOpen && (
        <div className="self-end grow flex items-end">
          <button
            onClick={handleClick}
            className="hidden lg:block w-8 h-8 rounded-full border border-primary text-primary hover:bg-white hover:border-white transition-colors duration-300"
          >
            -
          </button>
        </div>
      )}
    </div>
  );
}

export default SustainabilityCard;
