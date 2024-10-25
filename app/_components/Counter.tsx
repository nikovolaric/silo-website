"use client";

import { useEffect, useRef, useState } from "react";
import img from "@/public/counter-bg.jpeg";
import Image from "next/image";

function Counter({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const myref = useRef(null);

  const [start, setStart] = useState(false);
  const [experienceCount, setExperienceCount] = useState(0);
  const [kmCount, setKmCount] = useState(299950);
  const [vehiceleCount, SetVehicleCount] = useState(100);

  useEffect(
    function () {
      const observer = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting) {
            setStart(true);
          }
        },
        {
          root: null,
          threshold: 0.1,
        }
      );

      if (myref.current) {
        observer.observe(myref.current);
      }
      if (start) {
        const interval = setInterval(function () {
          if (experienceCount <= new Date().getFullYear() - 2001) {
            setExperienceCount((count: number) => count + 1);
          }
          if (kmCount < 300000) {
            setKmCount((count: number) => count + 1);
          }
          if (vehiceleCount < 150) {
            SetVehicleCount((count: number) => count + 1);
          }
        }, 50);

        return () => {
          clearInterval(interval);
        };
      }
    },
    [experienceCount, kmCount, vehiceleCount, start]
  );

  return (
    <>
      <div className="bg-primary mt-24 relative w-full max-h-[1000px] py-20 md:mt-32 lg:mt-40">
        <Image
          src={img}
          alt="image"
          fill
          className="object-cover object-left opacity-50 md:object-bottom 2xl:object-[0,-700px]"
          placeholder="blur"
          sizes="(max-width:1024px)95vw, 66vw"
        />
        <div
          className="relative text-primary flex flex-col gap-4 md:gap-5 md:flex-row md:justify-between md:items-center lg:h-72 mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl"
          ref={myref}
        >
          <div className="bg-neutral text-center mx-auto w-2/3 border border-primary rounded-lg p-8 shadow-xl flex flex-col justify-between">
            <p className="font-bold font-raj text-2xl">{experienceCount}+</p>
            <div className="md:basis-14 md:flex md:flex-col md:justify-center">
              <p className="font-semibold text-xl">
                {slo
                  ? "let izkušenj"
                  : srb
                  ? "godina iskustva"
                  : "years of experience"}
              </p>
            </div>
          </div>
          <div className="bg-neutral text-center mx-auto w-2/3 border border-primary rounded-lg p-8 shadow-xl flex flex-col justify-between">
            <p className="font-bold font-raj text-2xl">{kmCount}+</p>
            <div className="md:basis-14 md:flex md:flex-col md:justify-center">
              <p className="font-semibold text-xl">
                {slo
                  ? "kilometrov mesečno"
                  : srb
                  ? "kilometara mesečno"
                  : "kilometers/month"}
              </p>
            </div>
          </div>
          <div className="bg-neutral text-center mx-auto w-2/3 border border-primary rounded-lg p-8 shadow-xl flex flex-col justify-between">
            <p className="font-bold font-raj text-2xl">{vehiceleCount}+</p>
            <div className="md:basis-14 md:flex md:flex-col md:justify-center">
              <p className="font-semibold text-xl">
                {slo ? "vozil" : srb ? "vozila" : "vehicles"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
