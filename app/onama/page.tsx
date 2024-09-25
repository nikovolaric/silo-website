import { cookies } from "next/headers";
import AboutUsNav from "../_components/AboutUsNav";
import AboutUsText from "../_components/AboutUsText";
import Header from "../_components/Header";
import HeadText from "../_components/HeadText";
import HistoryText from "../_components/HistoryText";
import QualityText from "../_components/QualityText";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

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

// export const dynamic = "force-static";

function Page({
  searchParams,
}: {
  searchParams: { history?: boolean; quality?: boolean };
}) {
  const session = cookies().get("jwt")?.value;

  if (!session) {
    redirect("/login");
  }
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
              Više od {new Date().getFullYear() - 2001} godina iskustva i više
              od xxxxxxxxx kilometara godišnje na putu.
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
