import Header from "../_components/Header";
import { Metadata } from "next";
import HeadText from "../_components/HeadText";
import SustainabilityText from "../_components/SustainabilityText";

export const metadata: Metadata = {
  title: "Održivost",
};

export const dynamic = "force-dynamic";

function Page() {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
        <HeadText>
          Posvećeni smo stvaranju delotvornog okvira za sprovođenje svih naših
          aktivnosti na način koji doprinosi izgradnji održivog društva.{" "}
        </HeadText>
        <SustainabilityText srb />
      </main>
    </>
  );
}

export default Page;
