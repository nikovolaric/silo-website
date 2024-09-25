import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/logo.svg";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between mx-4 mt-6 md:mx-24 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
        <Link
          href="/en"
          className="relative h-5 w-24 md:h-7 md:w-32 lg:h-8 lg:w-36"
        >
          <Image src={logo} alt="logo" fill />
        </Link>
        <NavMenu />
      </div>
    </header>
  );
}

export default Header;
