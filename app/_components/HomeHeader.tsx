import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/logo.svg";
import NavMenu from "./NavMenu";
import bg from "@/public/home-bg.jpg";
import LinkBtn from "./LinkBtn";

function HomeHeader() {
  return (
    <header>
      <div className="relative w-full h-[600px]">
        <Image
          src={bg}
          alt="background photo"
          fill
          className="object-cover object-bottom grayscale"
          placeholder="blur"
        />
        <div className="relative flex items-center justify-between px-4 pt-6 md:px-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
          <Link
            href="/"
            className="relative h-5 w-24 md:h-7 md:w-32 lg:h-8 lg:w-36"
          >
            <Image src={logo} alt="logo" fill />
          </Link>
          <NavMenu />
        </div>
        <div className="relative mt-48 px-4 md:px-8 lg:px-20 xl:mx-auto max-w-7xl">
          <p className="font-raj font-semibold text-primary text-2xl">
            Pouzdan, efikasan i siguran transport
            <span className="font-bold"> prilagođen vašim potrebama.</span>
          </p>
        </div>
        <div className="relative mt-52 mx-4 flex justify-center gap-5 md:mx-8 md:justify-end lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
          <LinkBtn type="primary" href="/onama">
            O nama
          </LinkBtn>
          <LinkBtn type="secondary" href="/usluge">
            Naše usluge
          </LinkBtn>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
