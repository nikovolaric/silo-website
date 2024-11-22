import Header from "@/app/_components/Header";
import { Metadata } from "next";
import HeadText from "@/app/_components/HeadText";
import SustainabilityText from "@/app/_components/SustainabilityText";

export const metadata: Metadata = {
  title: "Održivost",
};

export const dynamic = "force-dynamic";

function Page() {
  return (
    <>
      <Header />
      <main className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
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
