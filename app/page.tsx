import { cookies } from "next/headers";
import ContactForm from "./_components/ContactForm";
import CookiesFirstPage from "./_components/CookiesFirstPage";
import Counter from "./_components/Counter";
import HomeHeader from "./_components/HomeHeader";
import HomeServices from "./_components/HomeServices";
import HomeText from "./_components/HomeText";
import WhySilo from "./_components/WhySilo";

function Page() {
  const cookie = cookies().get("analyticsConsent");
  return (
    <>
      <HomeHeader />
      <main>
        <div className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
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
        <div className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
          <ContactForm srb={true} />
        </div>
      </main>
      {!cookie && <CookiesFirstPage srb />}
    </>
  );
}

export default Page;
