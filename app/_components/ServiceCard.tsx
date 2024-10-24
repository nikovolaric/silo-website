"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

function ServiceCard({
  children,
  title,
  description,
  img,
  left,
}: {
  children: ReactNode;
  title: string;
  description: string;
  img: string;
  left?: boolean;
}) {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="text-secondary flex flex-col justify-start gap-8 w-full flex-none bg-neutraltwo py-6 px-5 rounded-lg shadow-lg md:bg-transparent md:shadow-none lg:grid lg:grid-cols-2">
      <div className="relative w-full h-40 md:w-7/12 md:h-60 lg:w-full lg:min-h-[280px]">
        <Image
          src={img}
          alt="service image"
          className="object-cover rounded-lg"
          fill
          sizes="(max-width:768px)85vw,50vw"
        />
      </div>
      <h2 className="font-raj font-bold text-2xl text-primary text-center md:text-left lg:col-start-1 lg:row-start-1 lg:col-span-2">
        {title}
      </h2>
      <p className="lg:col-start-1 lg:row-start-2 lg:col-span-2">
        {description}
      </p>
      <div className="grow flex flex-col justify-end">
        {!isOpen && (
          <button
            className="bg-accent w-10 h-10 rounded-full font-raj text-2xl text-white self-end lg:hover:text-primary lg:hover:bg-white transition-colors duration-300 md:hidden"
            onClick={() => setIsopen((isOpen) => !isOpen)}
          >
            +
          </button>
        )}
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-col gap-4 md:block ${
          left ? "lg:col-start-2" : "lg:col-start-1"
        } lg:row-start-3`}
      >
        <div className="text-secondary md:order-4">{children}</div>
        <button
          className="border border-primary w-10 h-10 rounded-full font-raj text-2xl text-primary self-end lg:hover:bg-white lg:hover:border-white transition-colors duration-300 md:hidden"
          onClick={() => setIsopen((isOpen) => !isOpen)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
