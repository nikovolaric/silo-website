import Header from "@/app/_components/Header";
import ServicesNav from "@/app/_components/ServicesNav";
import HeadText from "@/app/_components/HeadText";
import Services from "@/app/_components/Services";
import ServiceText from "@/app/_components/ServiceText";
import ContactForm from "@/app/_components/ContactForm";
import SuppliersText from "@/app/_components/SuppliersText";
import SoftwareText from "@/app/_components/SoftwareText";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import BigBagComparison from "@/app/_components/BigBagComparison";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: {
    suppliers?: boolean;
    software?: boolean;
  };
}) {
  if (!searchParams?.software && !searchParams?.suppliers) {
    return { title: "Usluge" };
  }
  if (searchParams?.suppliers) {
    return { title: "Dobavljaći" };
  }
  if (searchParams?.software) {
    return { title: "Softver" };
  }
}

function Page({
  searchParams,
}: {
  searchParams?: {
    suppliers?: boolean;
    software?: boolean;
  };
}) {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
        <ServicesNav srb={true} params={searchParams} />
        {!searchParams?.software && !searchParams?.suppliers && (
          <>
            <HeadText>
              Specijalizovani smo za transport silosa sa vrednom flotom,
              kvalifikovanim osobljem i naprednom tehnologijom, obezbeđujući
              uslugu vrhunskog kvaliteta.
            </HeadText>
            <Services />
            <BigBagComparison srb />
            <ServiceText srb />
          </>
        )}
        {searchParams?.suppliers && (
          <>
            <HeadText>
              U našoj kompaniji, odgovorno upravljanje lancem snabdevanja čini
              osnovu održivog i uspešnog poslovanja.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <SuppliersText srb />
            </Suspense>
          </>
        )}
        {searchParams?.software && (
          <>
            <HeadText>
              Težimo što efikasnijoj primeni dostupnih savremenih tehnologija.
              Ovo nam daje mogućnost da brzo reagujemo na zahteve naših
              klijenata.
            </HeadText>
            <SoftwareText srb />
          </>
        )}
        <ContactForm srb />
      </main>
    </>
  );
}

export default Page;
