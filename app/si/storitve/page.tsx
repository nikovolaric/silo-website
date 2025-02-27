import BigBagComparison from "@/app/_components/BigBagComparison";
import ContactForm from "@/app/_components/ContactForm";
import Header from "@/app/_components/Header";
import HeadText from "@/app/_components/HeadText";
import Services from "@/app/_components/Services";
import ServicesNav from "@/app/_components/ServicesNav";
import ServiceText from "@/app/_components/ServiceText";
import SoftwareText from "@/app/_components/SoftwareText";
import Spinner from "@/app/_components/Spinner";
import SuppliersText from "@/app/_components/SuppliersText";
import { Suspense } from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{
    suppliers?: boolean;
    software?: boolean;
  }>;
}) {
  const params = await searchParams;

  if (!params?.software && !params?.suppliers) {
    return { title: "Storitve" };
  }
  if (params?.suppliers) {
    return { title: "Dobavitelji" };
  }
  if (params?.software) {
    return { title: "Programska oprema" };
  }
}

async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    suppliers?: boolean;
    software?: boolean;
  }>;
}) {
  const params = await searchParams;

  return (
    <>
      <Header slo />
      <main className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <ServicesNav slo params={params} />
        {!params?.software && !params?.suppliers && (
          <>
            <HeadText>
              Specializirani smo za cestni prevoz blaga s silo cisternami
              priznanih proizvajalcev, usposobljenim osebjem in napredno
              tehnologijo, kar zagotavlja vrhunsko kakovost storitev.
            </HeadText>
            <Services slo />
            <BigBagComparison slo />
            <ServiceText slo />
          </>
        )}
        {params?.suppliers && (
          <>
            <HeadText>
              V našem podjetju je odgovorno upravljanje dobavne verige temelj
              trajnostnega in uspešnega poslovanja.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <SuppliersText slo />
            </Suspense>
          </>
        )}
        {params?.software && (
          <>
            <HeadText>
              Stremimo k čim bolj učinkoviti uporabi sodobnih tehnologij. To nam
              omogoča hitro odzivanje na zahteve naših strank.
            </HeadText>
            <SoftwareText slo />
          </>
        )}
        <ContactForm slo />
      </main>
    </>
  );
}

export default Page;
