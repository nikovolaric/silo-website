"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logow.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={`bg-primary text-white font-medium mt-24 ${
        pathname.startsWith("/dashboard") ? "hidden" : ""
      }`}
    >
      <div className="mx-4 md:mx-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
        <div className="pt-10 flex flex-col gap-14 md:grid md:grid-cols-2 lg:grid-cols-[5fr,7fr] xl:grid-cols-3">
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
                {!pathname.startsWith("/en")
                  ? "Matični broj"
                  : "Company Registration Number"}
              </p>
              <p>6475248000</p>
            </div>
            <div>
              <p className="font-bold">
                {!pathname.startsWith("/en")
                  ? "DDV broj"
                  : "Tax Identification Number"}
              </p>
              <p>61173843</p>
            </div>
            <div>
              <p>IBAN</p>
              <p>SI56 0279 7026 5705 707</p>
              <p>SI56 0316 3100 0478 196</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <p className="font-bold">
              {!pathname.startsWith("/en") ? "Brzi kontakt" : "Quick contact"}
            </p>
            <p className="flex items-center gap-5">
              <span>
                <PhoneIcon className="h-6 text-accent" />
              </span>
              +386 00 000 000
            </p>
            <p className="flex items-center gap-5">
              <span>
                <EnvelopeIcon className="h-6 text-accent" />
              </span>
              info@silo-jelicic.rs
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:gap-x-8 xl:grid-cols-6 xl:col-span-3 xl:w-3/4">
            <p className="font-bold lg:col-span-6">
              {pathname.startsWith("/en") ? "Quick Links" : "Brze veze"}
            </p>
            <Link
              href={pathname.startsWith("/en") ? "/en/services" : "/usluge"}
              className="hover:font-bold transition-[font] duration-300"
            >
              {!pathname.startsWith("/en") ? "Usluge" : "Services"}
            </Link>
            <Link
              href={pathname.startsWith("/en") ? "/en/aboutus" : "/onama"}
              className="hover:font-bold transition-[font] duration-300"
            >
              {!pathname.startsWith("/en") ? "O nama" : "About us"}
            </Link>
            <Link
              href={
                pathname.startsWith("/en") ? "/en/sustainability" : "/odrzivost"
              }
              className="hover:font-bold transition-[font] duration-300"
            >
              {!pathname.startsWith("/en") ? "Održivost" : "Sustainability"}
            </Link>
            <Link
              href={pathname.startsWith("/en") ? "/en/career" : "/kariera"}
              className="hover:font-bold transition-[font] duration-300"
            >
              {!pathname.startsWith("/en") ? "Kariera" : "Carrer"}
            </Link>
            <Link
              href={pathname.startsWith("/en") ? "/en/contact" : "/kontakt"}
              className="hover:font-bold transition-[font] duration-300"
            >
              {!pathname.startsWith("/en") ? "Kontakt" : "Contact"}
            </Link>
            <Link
              href={pathname.startsWith("/en") ? "/en/services" : "/usluge"}
              className="hover:font-bold transition-[font] duration-300 lg:col-span-3 xl:col-span-1"
            >
              {!pathname.startsWith("/en") ? "Kolačići" : "Cookie Policy"}
            </Link>
          </div>
        </div>
        <div className="mt-40 pb-14 font-medium text-sm flex flex-col gap-3 md:flex-row md:justify-between md:mt-36">
          <p>
            Web Design and Development:{" "}
            <Link
              href="https://www.lamastrategies.com"
              target="_blank"
              className="underline hover:font-bold transition-[font] duration-300"
            >
              LAMA Strategies
            </Link>
          </p>
          <p>
            &copy;{new Date().getFullYear()} Silo Jeličić, d.o.o.{" "}
            {pathname.startsWith("/en")
              ? "All rights reserved"
              : "Sva prava zadržana"}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
