"use client";

import { useEffect, useRef, useState } from "react";
import img from "@/public/counter-bg.jpeg";
import Image from "next/image";

function Counter({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const myref = useRef(null);

  const [start, setStart] = useState(false);
  const [experienceCount, setExperienceCount] = useState(0);
  const [kmCount, setKmCount] = useState(499950);
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
        },
      );

      if (myref.current) {
        observer.observe(myref.current);
      }
      if (start) {
        const interval = setInterval(function () {
          if (experienceCount < new Date().getFullYear() - 1998) {
            setExperienceCount((count: number) => count + 1);
          }
          if (kmCount < 500000) {
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
    [experienceCount, kmCount, vehiceleCount, start],
  );

  return (
    <>
      <div className="relative mt-24 max-h-[1000px] w-full bg-primary py-20 md:mt-32 lg:mt-40">
        <Image
          src={img}
          alt="image"
          fill
          className="object-cover object-left opacity-50 md:object-bottom 2xl:object-[0,-700px]"
          placeholder="blur"
          sizes="(max-width:1024px)95vw, 66vw"
          quality={50}
        />
        <div
          className="relative mx-4 flex max-w-7xl flex-col gap-4 text-primary md:mx-8 md:flex-row md:items-center md:justify-between md:gap-5 lg:mx-20 lg:h-72 xl:mx-auto xl:px-20"
          ref={myref}
        >
          <div className="mx-auto flex w-2/3 flex-col justify-between rounded-lg border border-primary bg-neutral p-8 text-center shadow-xl">
            <p className="font-raj text-2xl font-bold">{experienceCount}+</p>
            <div className="md:flex md:basis-14 md:flex-col md:justify-center">
              <p className="text-xl font-semibold">
                {slo
                  ? "let izkušenj"
                  : srb
                    ? "godina iskustva"
                    : "years of experience"}
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-2/3 flex-col justify-between rounded-lg border border-primary bg-neutral p-8 text-center shadow-xl">
            <p className="font-raj text-2xl font-bold">
              {new Intl.NumberFormat("de-DE").format(kmCount)}+
            </p>
            <div className="md:flex md:basis-14 md:flex-col md:justify-center">
              <p className="text-xl font-semibold">
                {slo
                  ? "kilometrov mesečno"
                  : srb
                    ? "kilometara mesečno"
                    : "kilometers/month"}
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-2/3 flex-col justify-between rounded-lg border border-primary bg-neutral p-8 text-center shadow-xl">
            <p className="font-raj text-2xl font-bold">{vehiceleCount}+</p>
            <div className="md:flex md:basis-14 md:flex-col md:justify-center">
              <p className="text-xl font-semibold">
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
