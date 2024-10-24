"use client";

import { useEffect, useState } from "react";
import { acceptAllCookies, declineAllCookies } from "../_lib/actions";
import CookieManageCard from "./CookieManageCard";

function CookieManage({
  srb,
  slo,
  ga,
  tp,
}: {
  srb?: boolean;
  slo?: boolean;
  ga?: string;
  tp?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(
    function () {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      }
      if (!isOpen) {
        document.body.style.overflow = "auto";
      }
    },
    [isOpen]
  );

  return (
    <>
      <div className="flex flex-col gap-8" onClick={() => setIsOpen(false)}>
        <h4 className="font-raj font-semibold text-primary text-2xl">
          {srb
            ? "Upravljanje kolačićima"
            : slo
            ? "Upravljanje piškotki"
            : "Manage cookies"}
        </h4>
        <p>
          {srb
            ? "Kolačićima možete upravljati ili ih onemogućiti u bilo kojem trenutku putem postavki vašeg pretraživača. Imajte na umu da onemogućavanje kolačića može uticati na funkcionalnost web stranice i neke funkcije možda neće pravilno raditi."
            : slo
            ? "Piškotke lahko kadar koli upravljate ali onemogočite prek nastavitev vašega brskalnika. Upoštevajte, da lahko onemogočanje piškotkov vpliva na delovanje spletne strani, in nekatere funkcije morda ne bodo delovale pravilno."
            : "You can manage or disable cookies at any time through your browser settings. Please note that disabling cookies may affect the functionality of the website, and some features may not work properly."}
        </p>
      </div>
      <div className="flex gap-5 justify-center">
        <form action={acceptAllCookies}>
          <button className="bg-accent py-1 px-8 rounded-full text-white font-semibold border border-accent hover:bg-white hover:border-white hover:text-primary transition-colors duration-300">
            {srb
              ? "Prihvati sve kolačiće"
              : slo
              ? "Sprejmi vse piškotke"
              : "Accept all cookies"}
          </button>
        </form>
        <form action={declineAllCookies}>
          <button className="border border-primary py-1 px-8 rounded-full text-primary font-semibold hover:bg-white hover:border-white transition-colors duration-300">
            {srb
              ? "Odbij sve kolačiće"
              : slo
              ? "Zavrni vse piškotke"
              : "Decline all cookies"}
          </button>
        </form>
      </div>
      <div className="text-center">
        <button className="underline" onClick={() => setIsOpen(true)}>
          {srb
            ? "Prilagođene postavke"
            : slo
            ? "Prilagojene nastavitve"
            : "Custom Settings"}
        </button>
        {isOpen && (
          <CookieManageCard
            setIsOpen={setIsOpen}
            slo={slo}
            srb={srb}
            ga={ga}
            tp={tp}
          />
        )}
      </div>
    </>
  );
}

export default CookieManage;
