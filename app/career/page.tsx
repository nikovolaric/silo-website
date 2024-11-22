import CareerForm from "@/app/_components/CareerForm";
import HeadText from "@/app/_components/HeadText";
import OpenPositions from "@/app/_components/OpenPositions";
import WhatWeOffer from "@/app/_components/WhatWeOffer";
import Header from "@/app/_components_en/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
};

export const dynamic = "force-dynamic";

function Page() {
  return (
    <>
      <Header />
      <div className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <HeadText>Together, we shape the future of transport.</HeadText>
        <WhatWeOffer />
        <OpenPositions />
        <CareerForm />
      </div>
    </>
  );
}

export default Page;
