import Header from "@/app/_components/Header";
import HeadText from "@/app/_components/HeadText";
import SustainabilityText from "@/app/_components/SustainabilityText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trajnost",
};

export const dynamic = "force-static";

function Page() {
  return (
    <>
      <Header slo />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
        <HeadText>
          Zavezani smo k ustvarjanju učinkovitega okvira za izvajanje vseh naših
          aktivnosti na način, ki prispeva k izgradnji trajnostne družbe.
        </HeadText>
        <SustainabilityText slo />
      </main>
    </>
  );
}

export default Page;
