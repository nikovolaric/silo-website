"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { acceptAllCookies, declineAllCookies } from "../_lib/actions";

function CookiesFirstPage({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleSubmit() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      {isOpen && (
        <div className="sticky bottom-0 z-50 rounded-t-lg bg-white/90 py-4 animate-cookieAni text-secondary px-4 md:px-8 xl:mx-auto max-w-6xl flex flex-col gap-5">
          <div className="flex justify-end">
            <XMarkIcon className="h-6 cursor-pointer" onClick={handleSubmit} />
          </div>
          <p className="font-raj font-semibold text-lg">
            {slo
              ? "Spletno mesto uporablja piškotke za zagotavljanje boljše uporabniške izkušnje in spremljanje statistike obiska."
              : srb
              ? "Veb lokacija koristi kolačiće kako bi pružila bolje korisničko iskustvo i pratila statistiku poseta."
              : "This website uses cookies to improve your browsing experience and to track website traffic."}
          </p>
          <div className="flex gap-5 items-center justify-center md:justify-start">
            <form action={acceptAllCookies} onSubmit={handleSubmit}>
              <button className="text-primary border border-primary font-semibold text-sm px-4 py-0.5 rounded-full transition-colors duration-200 hover:bg-neutral">
                {slo ? "Sprejmi vse" : srb ? "Prihvati sve" : "Accept all"}
              </button>
            </form>
            <form action={declineAllCookies} onSubmit={handleSubmit}>
              <button className="text-primary border border-primary font-semibold text-sm px-4 py-0.5 rounded-full transition-colors duration-200 hover:bg-neutral">
                {slo ? "Zavrni vse" : srb ? "Odbij sve" : "Decline all"}
              </button>
            </form>
          </div>
          <p className="text-base">
            {slo
              ? "Za nastavitve in več informacij sledite "
              : srb
              ? "Za podešavanja i više informacija pratite "
              : "For Settings and more information, please follow the "}
            <Link
              href={slo ? "/si/piskotki" : srb ? "/rs/kolacici" : "/cookies"}
              className="underline"
            >
              {slo ? "povezavi." : srb ? "vezu." : "link."}
            </Link>
          </p>
        </div>
      )}
    </>
  );
}

export default CookiesFirstPage;
