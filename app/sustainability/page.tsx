import HeadText from "@/app/_components/HeadText";
import SustainabilityText from "@/app/_components/SustainabilityText";
import Header from "@/app/_components_en/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability",
};

// export const dynamic = "force-static";

function Page() {
  return (
    <>
      <Header />
      <main className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <HeadText>
          We are committed to creating an effective framework for conducting all
          our activities in a way that contributes to building a sustainable
          society.
        </HeadText>
        <SustainabilityText />
      </main>
    </>
  );
}

export default Page;
