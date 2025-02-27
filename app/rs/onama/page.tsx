import AboutUsNav from "@/app/_components/AboutUsNav";
import AboutUsText from "@/app/_components/AboutUsText";
import Header from "@/app/_components/Header";
import HeadText from "@/app/_components/HeadText";
import HistoryText from "@/app/_components/HistoryText";
import QualityText from "@/app/_components/QualityText";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ history?: boolean; quality?: boolean }>;
}) {
  const params = await searchParams;

  if (!params.history && !params.quality) {
    return { title: "O nama" };
  }
  if (params.history) {
    return { title: "Istorijat" };
  }
  if (params.quality) {
    return { title: "Kvalitet" };
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
      <Header />
      <main className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <AboutUsNav srb params={params} />
        {!params.history && !params.quality && (
          <>
            <HeadText>
              Ponosni smo na dugogodišnju saradnju sa našim klijentima,
              izgrađenu na poverenju, kvalitetu i fleksibilnosti.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <AboutUsText srb />
            </Suspense>
          </>
        )}
        {params.history && (
          <>
            <HeadText>
              Više od {new Date().getFullYear() - 1998} godina iskustva i više
              od 6.000.000 kilometara godišnje na putu.
            </HeadText>
            <HistoryText srb />
          </>
        )}
        {params.quality && (
          <>
            <HeadText>
              Naša kompanija je posvećena pružanju vrhunskih usluga drumskog
              transporta rasutih materijala korišćenjem silos cisterni, što je
              dokazano u skladu sa najvišim međunarodnim standardima.
            </HeadText>
            <QualityText srb />
          </>
        )}
      </main>
    </>
  );
}

export default Page;
