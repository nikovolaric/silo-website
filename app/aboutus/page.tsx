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

function Page({
  searchParams,
}: {
  searchParams: { history?: boolean; quality?: boolean };
}) {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
        <AboutUsNav params={searchParams} />
        {!searchParams.history && !searchParams.quality && (
          <>
            <HeadText>
              We take pride in long-term relationships with our clients, built
              on trust, quality, and flexibility.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <AboutUsText />
            </Suspense>
          </>
        )}
        {searchParams.history && (
          <>
            <HeadText>
              More than {new Date().getFullYear() - 1998} years of experience,
              and more than 6.000.000 kilometers per year on the road.
            </HeadText>
            <HistoryText />
          </>
        )}
        {searchParams.quality && (
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
