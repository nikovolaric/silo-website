import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logow.png";
import NavMenu from "./NavMenu";
import bg from "@/public/home-bg.jpg";
import LinkBtn from "./LinkBtn";
import NavMenuSlo from "./NavMenuSlo";

function HomeHeader({ slo }: { slo?: boolean }) {
  return (
    <header>
      <div className="relative w-full h-[600px] 2xl:h-[700px] bg-primary">
        <Image
          src={bg}
          alt="background photo"
          fill
          className="object-cover opacity-60 "
          placeholder="blur"
        />
        <div className="relative flex items-center justify-between px-4 pt-6 md:px-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
          <Link
            href={slo ? "/si" : "/"}
            className="relative h-5 w-24 md:h-7 md:w-32 lg:h-8 lg:w-36"
          >
            <Image src={logo} alt="logo" fill sizes="30vw" />
          </Link>
          {slo ? <NavMenuSlo /> : <NavMenu />}
        </div>
        <div className="flex justify-between md:mx-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
          <div></div>
          <div className="relative bg-neutraltwo/55 ml-4 rounded-s-lg flex flex-col gap-12 p-4 mt-56 shadow-xl md:rounded-lg md:flex-none md:w-2/3 md:self-end md:p-5 lg:w-1/2 xl:w-5/12 2xl:mt-64">
            <div className="text-primary">
              <p className="font-raj font-semibold text-2xl">
                {slo
                  ? "Zanesljiv, učinkovit in varen transport"
                  : "Pouzdan, efikasan i siguran transport"}
                <span className="font-bold">
                  {slo
                    ? " prilagojen vašim potrebam."
                    : " prilagođen vašim potrebama."}
                </span>
              </p>
              <p className="mt-2">
                {slo
                  ? "Popolnoma specializirana flota, usposobljeno osebje, sodobna informacijska tehnologija."
                  : "Potpuno specijalizovana flota, kvalifikovano osoblje, moderna informacijska tehnologija."}
              </p>
            </div>
            <div className="relative flex justify-center gap-4 md:gap-5">
              <LinkBtn type="primary" href={slo ? "/si/onas" : "/onama"}>
                {slo ? "O nas" : "O nama"}
              </LinkBtn>
              <LinkBtn type="secondary" href={slo ? "/si/storitve" : "/usluge"}>
                {slo ? "Naše storitve" : "Naše usluge"}
              </LinkBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
