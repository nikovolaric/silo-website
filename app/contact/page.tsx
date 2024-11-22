import ContactText from "@/app/_components/ContactText";
import HeadText from "@/app/_components/HeadText";
import Header from "@/app/_components_en/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export const dynamic = "force-dynamic";

function Page() {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
        <HeadText>Our experienced team is happy to assist you.</HeadText>
        <ContactText />
      </main>
    </>
  );
}

export default Page;
