import ContactText from "@/app/_components/ContactText";
import Header from "@/app/_components/Header";
import HeadText from "@/app/_components/HeadText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
};

function Page() {
  return (
    <>
      <Header />
      <main className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <HeadText>Naš iskusni tim će vam rado pomoći.</HeadText>
        <ContactText srb />
      </main>
    </>
  );
}

export default Page;
