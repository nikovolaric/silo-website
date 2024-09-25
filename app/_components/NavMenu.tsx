"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [isOpen, router]);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <div className="lg:hidden">
        <div>
          <Bars3Icon
            className="h-8 text-primary hover:cursor-pointer"
            onClick={handleClick}
          />
        </div>
        <div
          className={`absolute top-0 left-0 mx-0 bg-neutraltwo w-dvw z-20 transition-all duration-200 ${
            isOpen ? "h-dvh" : "h-0"
          }`}
        >
          <div className="px-6 py-4">
            {isOpen && (
              <div className="flex justify-center my-10">
                <XMarkIcon className="h-8 text-primary" onClick={handleClick} />
              </div>
            )}
            <ul
              className={`flex flex-col items-center ${
                isOpen ? "h-dvh gap-10" : "h-0 gap-0"
              } text-center text-primary font-semibold text-2xl font-raj uppercase transition-all delay-50 duration-300`}
            >
              <li
                className={`${pathname === "/usluge" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "h-0 hidden"
                }`}
              >
                <Link href="/usluge">Usluge</Link>
              </li>
              <li
                className={`${pathname === "/onama" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "h-0 hidden"
                }`}
              >
                <Link href="/onama">O nama</Link>
              </li>
              <li
                className={`${pathname === "/odrzivost" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "h-0 hidden"
                }`}
              >
                <Link href="/odrzivost">Održivost</Link>
              </li>
              <li
                className={`${pathname === "/kariera" ? "font-bold" : ""} ${
                  isOpen ? "h-6" : "h-0 hidden"
                }`}
              >
                <Link href="/kariera">Kariera</Link>
              </li>
              <li className={`${isOpen ? "h-6" : "h-0 hidden"}`}>
                <Link
                  href="/kontakt"
                  className={`${
                    pathname === "/kontakt" ? "font-bold" : ""
                  } bg-accent text-white py-1.5 px-6 rounded-full shadow-lg`}
                >
                  Kontakt
                </Link>
              </li>
              <li className={`${isOpen ? "h-6" : "h-0 hidden"}`}>
                <Link href="/en">
                  <Image
                    src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                    alt="gb-flag"
                    height={18}
                    width={24}
                    className="object-contain rounded-sm"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <ul className="text-primary font-raj flex items-center gap-8 text-lg font-semibold uppercase">
          <li
            className={`w-fit ${
              pathname === "/usluge"
                ? "font-bold"
                : "hover:font-bold transition-[font] duration-200"
            }`}
          >
            <Link href="/usluge">Usluge</Link>
          </li>
          <li
            className={`w-fit ${
              pathname === "/onama"
                ? "font-bold"
                : "hover:font-bold transition-[font] duration-200"
            }`}
          >
            <Link href="/onama">O nama</Link>
          </li>
          <li
            className={`w-20 text-center ${
              pathname === "/odrzivost"
                ? "font-bold"
                : "hover:font-bold transition-[font] duration-200"
            }`}
          >
            <Link href="/odrzivost">Održivost</Link>
          </li>
          <li
            className={`w-20 text-center ${
              pathname === "/kariera"
                ? "font-bold"
                : "hover:font-bold transition-[font] duration-200"
            }`}
          >
            <Link href="/kariera">Kariera</Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className={`${
                pathname === "/kontakt"
                  ? "bg-white text-primary font-bold"
                  : "bg-accent text-white"
              } py-1 px-5 rounded-full shadow-lg lg:hover:bg-white lg:hover:text-primary transition-colors duration-300`}
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link href="/en">
              <Image
                src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                alt="gb-flag"
                height={15}
                width={20}
                className="object-contain rounded-sm"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavMenu;
