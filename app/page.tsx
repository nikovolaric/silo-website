import HomeHeader from "@/app/_components_en/HomeHeader";
import WhySilo from "@/app/_components/WhySilo";
import Counter from "@/app/_components/Counter";
import ContactForm from "@/app/_components/ContactForm";
import HomeServices from "@/app/_components/HomeServices";
import HomeText from "@/app/_components/HomeText";
import CookiesFirstPage from "@/app/_components/CookiesFirstPage";
import { cookies } from "next/headers";

async function Page() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("analyticsConsent");

  return (
    <>
      <HomeHeader />
      <main>
        <div className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
          <HomeServices />
          <WhySilo
            srb={false}
            one="Top Technology"
            two="Integrated Software Solutions"
            three="Confirmed Quality"
            four="Experienced and Trained Driving Crew"
          />
          <HomeText />
        </div>
        <Counter srb={false} />
        <div className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
          <ContactForm srb={false} />
        </div>
      </main>
      {!cookie && <CookiesFirstPage />}
    </>
  );
}

export default Page;
