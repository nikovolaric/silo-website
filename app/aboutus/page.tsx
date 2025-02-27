import AboutUsNav from "@/app/_components/AboutUsNav";
import AboutUsText from "@/app/_components/AboutUsText";
import HeadText from "@/app/_components/HeadText";
import HistoryText from "@/app/_components/HistoryText";
import QualityText from "@/app/_components/QualityText";
import Spinner from "@/app/_components/Spinner";
import Header from "@/app/_components_en/Header";
import { Suspense } from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ history?: boolean; quality?: boolean }>;
}) {
  const params = await searchParams;

  if (!params.history && !params.quality) {
    return { title: "About us" };
  }
  if (params.history) {
    return { title: "History" };
  }
  if (params.quality) {
    return { title: "Quality" };
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
        <AboutUsNav params={params} />
        {!params.history && !params.quality && (
          <>
            <HeadText>
              We are proud of long-term cooperation with our clients, built on
              trust, quality and flexibility.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <AboutUsText />
            </Suspense>
          </>
        )}
        {params.history && (
          <>
            <HeadText>
              More than {new Date().getFullYear() - 1998} years of experience,
              and more than 6.000.000 kilometers per year on the road.
            </HeadText>
            <HistoryText />
          </>
        )}
        {params.quality && (
          <>
            <HeadText>
              Our company is committed to providing top-quality road transport
              services for bulk materials using silo tankers, demonstrated by
              compliance with the highest international standards.
            </HeadText>
            <QualityText />
          </>
        )}
      </main>
    </>
  );
}

export default Page;
