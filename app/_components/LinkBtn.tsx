import Link from "next/link";
import { ReactNode } from "react";

function LinkBtn({
  children,
  type,
  href,
}: {
  children: ReactNode;
  type: string;
  href: string;
}) {
  const base =
    "py-0.5 px-6 rounded-full font-semibold shadow-xl md:px-10 md:hover:bg-white md:hover:text-primary transition-colors duration-300";

  const style: { [key: string]: string } = {
    primary: base + " text-white bg-accent",
    secondary:
      base +
      " text-primary bg-none border border-primary md:hover:border-white",
  };

  return (
    <Link href={href} className={style[type]}>
      {children}
    </Link>
  );
}

export default LinkBtn;
