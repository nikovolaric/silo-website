import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/logo.svg";
import NavMenu from "./NavMenu";
import NavMenuSlo from "./NavMenuSlo";

function Header({ slo }: { slo?: boolean }) {
  return (
    <header>
      <div className="mx-4 mt-6 flex max-w-7xl items-center justify-between md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <Link
          href={slo ? "/si" : "/rs"}
          className="relative h-7 w-32 lg:h-8 lg:w-36"
        >
          <Image src={logo} alt="logo" fill sizes="30vw" />
        </Link>
        {slo ? <NavMenuSlo /> : <NavMenu />}
      </div>
    </header>
  );
}

export default Header;
