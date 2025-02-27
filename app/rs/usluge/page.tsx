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
  searchParams?: Promise<{
    suppliers?: boolean;
    software?: boolean;
  }>;
}) {
  const params = await searchParams;

  if (!params?.software && !params?.suppliers) {
    return { title: "Usluge" };
  }
  if (params?.suppliers) {
    return { title: "Dobavljaći" };
  }
  if (params?.software) {
    return { title: "Softver" };
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
      <Header />
      <main className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <ServicesNav srb={true} params={params} />
        {!params?.software && !params?.suppliers && (
          <>
            <HeadText>
              Specijalizovani smo za drumski transport robe silo cisternama
              renomiranih proizvodjača, kvalifikovanim osobljem i naprednom
              tehnologijom, obezbeđujući uslugu vrhunskog kvaliteta.
            </HeadText>
            <Services />
            <BigBagComparison srb />
            <ServiceText srb />
          </>
        )}
        {params?.suppliers && (
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
        {params?.software && (
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
