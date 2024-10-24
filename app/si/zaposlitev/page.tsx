import CareerForm from "@/app/_components/CareerForm";
import Header from "@/app/_components/Header";
import HeadText from "@/app/_components/HeadText";
import OpenPositions from "@/app/_components/OpenPositions";
import WhatWeOffer from "@/app/_components/WhatWeOffer";

export const dynamic = "force-static";

function Page() {
  return (
    <>
      <Header slo />
      <div className="mx-4 md:mx-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
        <HeadText>Skupaj oblikujemo prihodnost transporta.</HeadText>
        <WhatWeOffer slo />
        <OpenPositions slo />
        <CareerForm slo />
      </div>
    </>
  );
}

export default Page;
