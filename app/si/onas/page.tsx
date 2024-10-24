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
  searchParams: { history?: boolean; quality?: boolean };
}) {
  if (!searchParams.history && !searchParams.quality) {
    return { title: "O nas" };
  }
  if (searchParams.history) {
    return { title: "Zgodovina" };
  }
  if (searchParams.quality) {
    return { title: "Kakovost" };
  }
}

function Page({
  searchParams,
}: {
  searchParams: { history?: boolean; quality?: boolean };
}) {
  return (
    <>
      <Header slo />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
        <AboutUsNav slo params={searchParams} />
        {!searchParams.history && !searchParams.quality && (
          <>
            <HeadText>
              S ponosom se ponašamo z dolgoročnimi odnosi z našimi strankami, ki
              temeljijo na zaupanju, kakovosti in prilagodljivosti.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <AboutUsText slo />
            </Suspense>
          </>
        )}
        {searchParams.history && (
          <>
            <HeadText>
              Več kot {new Date().getFullYear() - 2001} let izkušenj in več kot
              3.500.000 kilometrov na cesti letno.
            </HeadText>
            <HistoryText slo />
          </>
        )}
        {searchParams.quality && (
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
