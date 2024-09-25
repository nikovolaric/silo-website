"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

function ServiceCard({
  children,
  title,
  description,
  img,
}: {
  children: ReactNode;
  title: string;
  description: string;
  img: string;
}) {
  const [firstPage, setFirstPage] = useState(true);

  return (
    <div className="md:overflow-hidden p-1.5 md:p-2">
      <div
        className={`flex w-full gap-4 justify-between ${
          !firstPage ? "-translate-x-[103%]" : "translate-x-0"
        } transition-transform duration-200 md:h-full`}
      >
        <div className="text-secondary flex flex-col justify-start gap-8 w-full flex-none bg-neutraltwo py-6 px-5 rounded-lg shadow-lg lg:px-8">
          <div className="relative w-full h-40">
            <Image
              src={img}
              alt="service image"
              className="object-cover rounded-lg"
              fill
              sizes="(max-width:768px)85vw,50vw"
            />
          </div>
          <h2 className="font-raj font-bold text-2xl text-primary text-center">
            {title}
          </h2>
          <p>{description}</p>
          <div className="grow flex flex-col justify-end">
            <button
              className="bg-accent w-10 h-10 rounded-full font-raj text-2xl text-primary self-end lg:hover:bg-white transition-colors duration-300"
              onClick={() => setFirstPage((page) => !page)}
            >
              &rarr;
            </button>
          </div>
        </div>
        <div className="bg-neutraltwo py-4 px-2 rounded-lg shadow-lg flex flex-col justify-between w-full flex-none lg:px-8">
          <div className="text-secondary">{children}</div>
          <button
            className="border border-primary w-10 h-10 rounded-full font-raj text-2xl text-primary self-end lg:hover:bg-white lg:hover:border-white transition-colors duration-300"
            onClick={() => setFirstPage((page) => !page)}
          >
            &larr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
