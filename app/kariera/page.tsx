import Header from "@/app/_components/Header";
import HeadText from "../_components/HeadText";
import WhatWeOffer from "../_components/WhatWeOffer";
import { Metadata } from "next";
import OpenPositions from "../_components/OpenPositions";
import CareerForm from "../_components/CareerForm";

export const metadata: Metadata = {
  title: "Kariera",
};

export const dynamic = "force-static";

function Page() {
  return (
    <>
      <Header />
      <div className="mx-4 md:mx-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
        <HeadText>Zajedno, oblikujemo budučnost transporta.</HeadText>
        <WhatWeOffer srb />
        <OpenPositions srb />
        <CareerForm srb />
      </div>
    </>
  );
}

export default Page;
