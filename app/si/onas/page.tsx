import AboutUsNav from "@/app/_components/AboutUsNav";
import AboutUsText from "@/app/_components/AboutUsText";
import Header from "@/app/_components/Header";
import HeadText from "@/app/_components/HeadText";
import HistoryText from "@/app/_components/HistoryText";
import QualityText from "@/app/_components/QualityText";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ history?: boolean; quality?: boolean }>;
}) {
  const params = await searchParams;

  if (!params.history && !params.quality) {
    return { title: "O nas" };
  }
  if (params.history) {
    return { title: "Zgodovina" };
  }
  if (params.quality) {
    return { title: "Kakovost" };
  }
}

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ history?: boolean; quality?: boolean }>;
}) {
  const params = await searchParams;

  return (
    <>
      <Header slo />
      <main className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <AboutUsNav slo params={params} />
        {!params.history && !params.quality && (
          <>
            <HeadText>
              Ponosni smo na dolgoletno sodelovanje z našimi naročniki, ki
              temelji na zaupanju, kakovosti in prilagodljivosti.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <AboutUsText slo />
            </Suspense>
          </>
        )}
        {params.history && (
          <>
            <HeadText>
              Več kot {new Date().getFullYear() - 1998} let izkušenj in več kot
              6.000.000 kilometrov na cesti letno.
            </HeadText>
            <HistoryText slo />
          </>
        )}
        {params.quality && (
          <>
            <HeadText>
              Naše podjetje se zavezuje k zagotavljanju vrhunskih storitev
              cestnega transporta rasutih materialov s silo cisternami, kar
              dokazujemo z usklajenostjo z najvišjimi mednarodnimi standardi.
            </HeadText>
            <QualityText slo />
          </>
        )}
      </main>
    </>
  );
}

export default Page;
