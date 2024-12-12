"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logow.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Footer() {
  const pathname = usePathname();

  const isSlo = pathname.startsWith("/si");
  const isRs = pathname.startsWith("/rs");

  return (
    <footer
      className={`mt-24 bg-primary font-medium text-white ${
        pathname.startsWith("/dashboard") ? "hidden" : ""
      }`}
    >
      <div className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <div className="flex flex-col gap-14 pt-10 md:grid md:grid-cols-2 lg:grid-cols-[5fr,7fr] xl:grid-cols-3">
          <Image
            src={logo}
            alt="logo-beli"
            height={154}
            width={135}
            className="md:col-span-2 xl:col-span-3"
          />
          <div>
            <div>
              <p>Silo Jeličić, prevozi in storitve, d.o.o.</p>
              <p>Celjska cesta 7</p>
              <p>3250 Rogaška Slatina</p>
              <p>Slovenija, EU</p>
            </div>
            <div className="mt-10">
              <p>PE: Silo Jeličić, prevozi in storitve, d.o.o.</p>
              <p>Mestinje 6</p>
              <p>3241 Podplat</p>
              <p>Slovenija, EU</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-bold">
                {isRs
                  ? "Matični broj"
                  : isSlo
                    ? "Matična številka"
                    : "Company Registration Number"}
              </p>
              <p>6475248000</p>
            </div>
            <div>
              <p className="font-bold">
                {isRs
                  ? "DDV broj"
                  : isSlo
                    ? "Davčna številka"
                    : "Tax Identification Number"}
              </p>
              <p>SI61173843</p>
            </div>
            <div>
              <p>IBAN</p>
              <p>SI56 0279 7026 5705 707</p>
              <p>SI56 0316 3100 0478 196</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <p className="font-bold">
              {isRs
                ? "Brzi kontakt"
                : isSlo
                  ? "Hiter kontakt"
                  : "Quick contact"}
            </p>
            <p className="flex items-center gap-5">
              <span>
                <PhoneIcon className="h-6 text-accent" />
              </span>
              +386 59 789 700
            </p>
            <p className="flex items-center gap-5">
              <span>
                <EnvelopeIcon className="h-6 text-accent" />
              </span>
              office@silo-jelicic.rs
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:gap-x-8 xl:col-span-3 xl:w-3/4 xl:grid-cols-6">
            <p className="font-bold lg:col-span-6">
              {isRs ? "Brze veze" : isSlo ? "Hitre povezave" : "Quick Links"}
            </p>
            <Link
              href={isRs ? "/rs/usluge" : isSlo ? "/si/storitve" : "/services"}
              className="transition-[font] duration-300 hover:font-bold"
            >
              {isRs ? "Usluge" : isSlo ? "Storitve" : "Services"}
            </Link>
            <Link
              href={isRs ? "/rs/onama" : isSlo ? "/si/onas" : "/aboutus"}
              className="transition-[font] duration-300 hover:font-bold"
            >
              {isRs ? "O nama" : isSlo ? "O nas" : "About us"}
            </Link>
            <Link
              href={
                isRs
                  ? "/rs/odrzivost"
                  : isSlo
                    ? "/si/trajnost"
                    : "/sustainability"
              }
              className="transition-[font] duration-300 hover:font-bold"
            >
              {isRs ? "Održivost" : isSlo ? "Trajnost" : "Sustainability"}
            </Link>
            <Link
              href={
                isRs ? "/rs/karijera" : isSlo ? "/si/zaposlitev" : "/career"
              }
              className="transition-[font] duration-300 hover:font-bold"
            >
              {isRs ? "Karijera" : isSlo ? "Zaposlitev" : "Career"}
            </Link>
            <Link
              href={isRs ? "/rs/kontakt" : isSlo ? "/si/kontakt" : "/contact"}
              className="transition-[font] duration-300 hover:font-bold"
            >
              {isRs ? "Kontakt" : isSlo ? "Kontakt" : "Contact"}
            </Link>
            <Link
              href={isRs ? "/rs/kolacici" : isSlo ? "/si/piskotki" : "/cookies"}
              className="transition-[font] duration-300 hover:font-bold lg:col-span-3 xl:col-span-1"
            >
              {isRs ? "Kolačići" : isSlo ? "Piškotki" : "Cookie Policy"}
            </Link>
          </div>
        </div>
        <div className="mt-40 flex flex-col gap-3 pb-14 text-sm font-medium md:mt-36 md:flex-row md:justify-between">
          <p>
            Web Design and Development:{" "}
            <Link
              href="https://www.lamastrategies.com"
              target="_blank"
              className="underline transition-[font] duration-300 hover:font-bold"
            >
              LAMA Strategies
            </Link>
          </p>
          <p>
            &copy;{new Date().getFullYear()} Silo Jeličić, d.o.o.{" "}
            {isRs
              ? "Sva prava zadržana"
              : isSlo
                ? "Vse pravice pridržane"
                : "All rights reserved"}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
