import { cookies } from "next/headers";
import HomeServices from "../_components/HomeServices";
import WhySilo from "../_components/WhySilo";
import HomeText from "../_components/HomeText";
import Counter from "../_components/Counter";
import ContactForm from "../_components/ContactForm";
import HomeHeader from "../_components/HomeHeader";
import CookiesFirstPage from "../_components/CookiesFirstPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dobrodošli",
};

async function Page() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("analyticsConsent")?.value;

  return (
    <>
      <HomeHeader slo />
      <main>
        <div className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
          <HomeServices slo />
          <WhySilo
            slo
            one="Vrhunska tehnologija"
            two="Integrirane programske rešitve"
            three="Potrjena kakovost"
            four="Izkušeni in usposobljeni vozniki"
          />
          <HomeText slo />
        </div>
        <Counter slo />
        <div className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
          <ContactForm slo />
        </div>
      </main>
      {!cookie && <CookiesFirstPage slo />}
    </>
  );
}

export default Page;
