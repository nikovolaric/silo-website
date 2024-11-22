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
  searchParams: { history?: boolean; quality?: boolean };
}) {
  if (!searchParams.history && !searchParams.quality) {
    return { title: "O nama" };
  }
  if (searchParams.history) {
    return { title: "Istorijat" };
  }
  if (searchParams.quality) {
    return { title: "Kvalitet" };
  }
}

function Page({
  searchParams,
}: {
  searchParams: { history?: boolean; quality?: boolean };
}) {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
        <AboutUsNav srb params={searchParams} />
        {!searchParams.history && !searchParams.quality && (
          <>
            <HeadText>
              Ponosimo se dugogodišnjom saradnjom sa našim partnerima. Nudeći
              kvalitet, pouzdanost I fleksibilnost zaslužili smo njihovo
              poverenje.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <AboutUsText srb />
            </Suspense>
          </>
        )}
        {searchParams.history && (
          <>
            <HeadText>
              Više od {new Date().getFullYear() - 1998} godina iskustva i više
              od 6.000.000 kilometara godišnje na putu.
            </HeadText>
            <HistoryText srb />
          </>
        )}
        {searchParams.quality && (
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
