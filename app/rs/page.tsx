import { cookies } from "next/headers";
import ContactForm from "@/app/_components/ContactForm";
import CookiesFirstPage from "@/app/_components/CookiesFirstPage";
import Counter from "@/app/_components/Counter";
import HomeHeader from "@/app/_components/HomeHeader";
import HomeServices from "@/app/_components/HomeServices";
import HomeText from "@/app/_components/HomeText";
import WhySilo from "@/app/_components/WhySilo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dobrodošli",
  description:
    "Transportna kompanija Silo Jeličić d.o.o. je vodeći drumski prevoznik suvih materijala u rasutom stanju.",
};

async function Page() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("analyticsConsent");
  return (
    <>
      <HomeHeader />
      <main>
        <div className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
          <HomeServices srb />
          <WhySilo
            srb
            one="Vrhunska tehnologija"
            two="Integrisana softverska rešenja"
            three="Potvđen kvalitet"
            four="Iskusni i obučeni vozači"
          />
          <HomeText srb />
        </div>
        <Counter srb />
        <div className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
          <ContactForm srb={true} />
        </div>
      </main>
      {!cookie && <CookiesFirstPage srb />}
    </>
  );
}

export default Page;
