import { redirect } from "next/navigation";
import ContactForm from "./_components/ContactForm";
import Counter from "./_components/Counter";
import HomeHeader from "./_components/HomeHeader";
import HomeServices from "./_components/HomeServices";
import HomeText from "./_components/HomeText";
import WhySilo from "./_components/WhySilo";
import { cookies } from "next/headers";

// export const dynamic = "force-static";

function Page() {
  const session = cookies().get("jwt")?.value;

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <HomeHeader />
      <main>
        <div className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
          <HomeServices srb />
          <WhySilo
            srb={true}
            one="Vrhunska tehnologija"
            two="Integrisana softverska rešenja"
            three="Potvđen kvalitet"
            four="Iskusni i obučeni vozači"
          />
          <HomeText srb />
        </div>
        <Counter srb={true} />
        <div className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
          <ContactForm srb={true} />
        </div>
      </main>
    </>
  );
}

export default Page;
