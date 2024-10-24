import { Metadata } from "next";
import Header from "@/app/_components/Header";
import HeadText from "@/app/_components/HeadText";
import ContactText from "@/app/_components/ContactText";

export const metadata: Metadata = {
  title: "Kontakt",
};

function Page() {
  return (
    <>
      <Header slo />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
        <HeadText>Naša izkušena ekipa vam z veseljem pomaga.</HeadText>
        <ContactText slo />
      </main>
    </>
  );
}

export default Page;
