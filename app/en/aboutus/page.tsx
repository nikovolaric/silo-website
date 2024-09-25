import AboutUsNav from "@/app/_components/AboutUsNav";
import AboutUsText from "@/app/_components/AboutUsText";
import HeadText from "@/app/_components/HeadText";
import HistoryText from "@/app/_components/HistoryText";
import QualityText from "@/app/_components/QualityText";
import Spinner from "@/app/_components/Spinner";
import Header from "@/app/_components_en/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { history?: boolean; quality?: boolean };
}) {
  if (!searchParams.history && !searchParams.quality) {
    return { title: "About us" };
  }
  if (searchParams.history) {
    return { title: "History" };
  }
  if (searchParams.quality) {
    return { title: "Quality" };
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
        <AboutUsNav params={searchParams} />
        {!searchParams.history && !searchParams.quality && (
          <>
            <HeadText>
              Ponosimo se dugogodišnjom saradnjom sa našim partnerima. Nudeći
              kvalitet, pouzdanost I fleksibilnost zaslužili smo njihovo
              poverenje.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <AboutUsText />
            </Suspense>
          </>
        )}
        {searchParams.history && (
          <>
            <HeadText>
              Više od {new Date().getFullYear() - 2001} godina iskustva i više
              od xxxxxxxxx kilometara godišnje na putu.
            </HeadText>
            <HistoryText />
          </>
        )}
        {searchParams.quality && (
          <>
            <HeadText>
              Naša kompanija je posvećena pružanju vrhunskih usluga drumskog
              transporta rasutih materijala korišćenjem silos cisterni, što je
              dokazano u skladu sa najvišim međunarodnim standardima.
            </HeadText>
            <QualityText />
          </>
        )}
      </main>
    </>
  );
}

export default Page;
