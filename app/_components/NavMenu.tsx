"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [sloSite, setSloSite] = useState("");
  const [engSite, setEngSite] = useState("");
  const pathname = usePathname();
  const router = useRouter();

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

    if (pathname === "/rs") {
      setSloSite("/si");
      setEngSite("/");
    }

    if (pathname === "/rs/usluge") {
      setSloSite("/si/storitve");
      setEngSite("/services");
    }

    if (pathname === "/rs/onama") {
      setSloSite("/si/onas");
      setEngSite("/aboutus");
    }

    if (pathname === "/rs/odrzivost") {
      setSloSite("/si/trajnost");
      setEngSite("/sustainability");
    }

    if (pathname === "/rs/karijera") {
      setSloSite("/si/zaposlitev");
      setEngSite("/career");
    }
    if (pathname === "/rs/kontakt") {
      setSloSite("/si/kontakt");
      setEngSite("/contact");
    }
    if (pathname === "/rs/kolacici") {
      setSloSite("/si/piskotki");
      setEngSite("/cookies");
    }
  }, [isOpen, pathname, router]);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <div className="lg:hidden">
        <div>
          <Bars3Icon
            className={`h-8 ${
              pathname === "/rs" ? "text-white" : "text-primary"
            } hover:cursor-pointer`}
            onClick={handleClick}
          />
        </div>
        <div
          className={`absolute left-0 top-0 z-20 mx-0 w-dvw bg-neutraltwo transition-all duration-200 ${
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
                className={`${pathname === "/rs/usluge" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "hidden h-0"
                }`}
              >
                <Link href="/rs/usluge">Usluge</Link>
              </li>
              <li
                className={`${pathname === "/rs/onama" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "hidden h-0"
                }`}
              >
                <Link href="/rs/onama">O nama</Link>
              </li>
              <li
                className={`${
                  pathname === "/rs/odrzivost" ? "font-bold" : ""
                } ${isOpen ? "h-6" : "hidden h-0"}`}
              >
                <Link href="/rs/odrzivost">Održivost</Link>
              </li>
              <li
                className={`${pathname === "/rs/karijera" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "hidden h-0"
                }`}
              >
                <Link href="/rs/karijera">Karijera</Link>
              </li>
              <li className={`${isOpen ? "h-6" : "hidden h-0"}`}>
                <Link
                  href="/rs/kontakt"
                  className={`${
                    pathname === "/rs/kontakt" ? "font-bold" : ""
                  } rounded-full bg-accent px-6 py-1.5 text-white shadow-lg`}
                >
                  Kontakt
                </Link>
              </li>
              <li className={`${isOpen ? "h-6" : "hidden h-0"} flex gap-8`}>
                <Link href={engSite}>
                  <Image
                    src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                    alt="gb-flag"
                    height={18}
                    width={24}
                    className="rounded-sm object-contain"
                  />
                </Link>
                <Link href={sloSite}>
                  <Image
                    src="https://flagicons.lipis.dev/flags/4x3/si.svg"
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
            pathname === "/rs" ? "text-white" : "text-primary"
          } flex items-center gap-8 font-raj text-lg font-semibold uppercase`}
        >
          <li
            className={`w-fit ${
              pathname === "/rs/usluge"
                ? "font-bold"
                : "transition-[font] duration-200 hover:font-bold"
            }`}
          >
            <Link href="/rs/usluge">Usluge</Link>
          </li>
          <li
            className={`w-fit ${
              pathname === "/rs/onama"
                ? "font-bold"
                : "transition-[font] duration-200 hover:font-bold"
            }`}
          >
            <Link href="/rs/onama">O nama</Link>
          </li>
          <li
            className={`w-20 text-center ${
              pathname === "/rs/odrzivost"
                ? "font-bold"
                : "transition-[font] duration-200 hover:font-bold"
            }`}
          >
            <Link href="/rs/odrzivost">Održivost</Link>
          </li>
          <li
            className={`w-20 text-center ${
              pathname === "/rs/karijera"
                ? "font-bold"
                : "transition-[font] duration-200 hover:font-bold"
            }`}
          >
            <Link href="/rs/karijera">Karijera</Link>
          </li>
          <li>
            <Link
              href="/rs/kontakt"
              className={`${
                pathname === "/rs/kontakt"
                  ? "bg-white font-bold text-primary"
                  : "bg-accent text-white"
              } rounded-full px-5 py-1 shadow-lg transition-colors duration-300 lg:hover:bg-white lg:hover:text-primary`}
            >
              Kontakt
            </Link>
          </li>
          <li className="flex gap-1">
            <Link href={engSite}>
              <Image
                src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                alt="gb-flag"
                height={15}
                width={20}
                className="rounded-sm object-contain"
              />
            </Link>
            <Link href={sloSite}>
              <Image
                src="https://flagicons.lipis.dev/flags/4x3/si.svg"
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
