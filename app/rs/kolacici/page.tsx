import CookieText from "@/app/_components/CookieText";
import HeadText from "@/app/_components/HeadText";
import Header from "@/app/_components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kolačići",
};

function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16 mx-4 md:mx-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
        <HeadText>Kolačići</HeadText>
        <CookieText srb />
      </main>
    </>
  );
}

export default Page;
