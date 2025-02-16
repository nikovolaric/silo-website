"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import siflag from "@/public/icons/si-flag.svg";
import rsflag from "@/public/icons/rs-flag.svg";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [sloSite, setSloSite] = useState("");
  const [srbSite, setSrbSite] = useState("");
  const pathname = usePathname();
  const params = useSearchParams();

  const query = Object.fromEntries(params);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
      setTimeout(function () {
        document.body.style.overflow = "hidden";
      }, 50);
    }
    if (!isOpen) {
      document.body.style.overflow = "auto";
    }

    if (pathname === "/") {
      setSloSite("/si");
      setSrbSite("/rs");
    }
    if (pathname === "/services") {
      setSloSite("/si/storitve");
      setSrbSite("/rs/usluge");
    }
    if (pathname === "/aboutus") {
      setSloSite("/si/onas");
      setSrbSite("/rs/onama");
    }
    if (pathname === "/sustainability") {
      setSloSite("/si/trajnost");
      setSrbSite("/rs/odrzivost");
    }

    if (pathname === "/career") {
      setSloSite("/si/zaposlitev");
      setSrbSite("/rs/karijera");
    }
    if (pathname === "/contact") {
      setSloSite("/si/kontakt");
      setSrbSite("/rs/kontakt");
    }
    if (pathname === "/cookies") {
      setSloSite("/si/piskotki");
      setSrbSite("/rs/kolacici");
    }
  }, [isOpen, pathname]);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <div className="lg:hidden">
        <div>
          <Bars3Icon
            className={`h-8 ${
              pathname === "/" ? "text-white" : "text-primary"
            } hover:cursor-pointer`}
            onClick={handleClick}
          />
        </div>
        <div
          className={`absolute right-0 top-0 z-20 w-dvw bg-neutraltwo transition-all duration-200 ${
            isOpen ? "h-dvh" : "h-0"
          }`}
        >
          <div className="px-6 py-4">
            {isOpen && (
              <div className="my-10 flex justify-center">
                <XMarkIcon className="h-8 text-primary" onClick={handleClick} />
              </div>
            )}
            <ul
              className={`flex flex-col items-center ${
                isOpen ? "h-dvh gap-10" : "h-0 gap-0"
              } delay-50 text-center font-raj text-2xl font-semibold uppercase text-primary transition-all duration-300`}
            >
              <li
                className={`${pathname === "/services" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "hidden h-0"
                }`}
              >
                <Link href="/services">Services</Link>
              </li>
              <li
                className={`${pathname === "/aboutus" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "hidden h-0"
                }`}
              >
                <Link href="/aboutus">About us</Link>
              </li>
              <li
                className={`${
                  pathname === "/sustainability" ? "font-bold" : ""
                } ${isOpen ? "h-6" : "hidden h-0"}`}
              >
                <Link href="/sustainability">Sustainability</Link>
              </li>
              <li
                className={`${pathname === "/career" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "hidden h-0"
                }`}
              >
                <Link href="/career">career</Link>
              </li>
              <li className={`${isOpen ? "h-6" : "hidden h-0"}`}>
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact" ? "font-bold" : ""
                  } rounded-full bg-accent px-6 py-1.5 text-white shadow-lg`}
                >
                  Contact
                </Link>
              </li>
              <li className={`${isOpen ? "h-6" : "hidden h-0"} flex gap-8`}>
                <Link href={{ pathname: srbSite, query }}>
                  <Image
                    src={rsflag}
                    alt="gb-flag"
                    height={18}
                    width={24}
                    className="rounded-sm object-contain"
                  />
                </Link>
                <Link href={{ pathname: sloSite, query }}>
                  <Image
                    src={siflag}
                    alt="slo-flag"
                    height={18}
                    width={24}
                    className="rounded-sm object-contain"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <ul
          className={`${
            pathname === "/" ? "text-white" : "text-primary"
          } flex items-center gap-8 font-raj text-lg font-semibold uppercase`}
        >
          <li
            className={`w-fit ${
              pathname === "/services"
                ? "font-bold"
                : "transition-[font] duration-200 hover:font-bold"
            }`}
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={`w-fit ${
              pathname === "/aboutus"
                ? "font-bold"
                : "transition-[font] duration-200 hover:font-bold"
            }`}
          >
            <Link href="/aboutus">About us</Link>
          </li>
          <li
            className={`w-28 text-center ${
              pathname === "/sustainability"
                ? "font-bold"
                : "transition-[font] duration-200 hover:font-bold"
            }`}
          >
            <Link href="/sustainability">Sustainability</Link>
          </li>
          <li
            className={`w-20 text-center ${
              pathname === "/career"
                ? "font-bold"
                : "transition-[font] duration-200 hover:font-bold"
            }`}
          >
            <Link href="/career">career</Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "bg-white font-bold text-primary"
                  : "bg-accent text-white"
              } rounded-full px-5 py-1 shadow-lg transition-colors duration-300 lg:hover:bg-white lg:hover:text-primary`}
            >
              Contact
            </Link>
          </li>
          <li className="flex gap-1">
            <Link href={{ pathname: srbSite, query }}>
              <Image
                src={rsflag}
                alt="gb-flag"
                height={15}
                width={20}
                className="rounded-sm object-contain"
              />
            </Link>
            <Link href={{ pathname: sloSite, query }}>
              <Image
                src={siflag}
                alt="slo-flag"
                height={15}
                width={20}
                className="rounded-sm object-contain"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavMenu;
