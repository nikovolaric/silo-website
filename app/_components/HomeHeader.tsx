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
      <div className="relative h-[600px] w-full bg-primary 2xl:h-[700px]">
        <Image
          src={bg}
          alt="background photo"
          fill
          className="object-cover opacity-60"
          quality={50}
          sizes="100vw"
          loading="eager"
          priority
        />
        <div className="relative flex max-w-7xl items-center justify-between px-4 pt-6 md:px-8 lg:mx-20 xl:mx-auto xl:px-20">
          <Link
            href={slo ? "/si" : "/rs"}
            className="relative h-7 w-32 lg:h-8 lg:w-36"
          >
            <Image src={logo} alt="logo" fill sizes="30vw" />
          </Link>
          {slo ? <NavMenuSlo /> : <NavMenu />}
        </div>
        <div className="flex max-w-7xl justify-between md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
          <div></div>
          <div className="relative ml-4 mt-56 flex flex-col gap-12 rounded-s-lg bg-neutraltwo/55 p-4 shadow-xl md:w-2/3 md:flex-none md:self-end md:rounded-lg md:p-5 lg:w-1/2 xl:w-5/12 2xl:mt-64">
            <div className="text-primary">
              <p className="font-raj text-2xl font-semibold">
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
              <LinkBtn type="primary" href={slo ? "/si/onas" : "/rs/onama"}>
                {slo ? "O nas" : "O nama"}
              </LinkBtn>
              <LinkBtn
                type="secondary"
                href={slo ? "/si/storitve" : "/rs/usluge"}
              >
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
