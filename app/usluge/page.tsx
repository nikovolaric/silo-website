import Header from "../_components/Header";
import ServicesNav from "../_components/ServicesNav";
import HeadText from "../_components/HeadText";
import Services from "../_components/Services";
import ServiceText from "../_components/ServiceText";
import ContactForm from "../_components/ContactForm";
import SuppliersText from "../_components/SuppliersText";
import SoftwareText from "../_components/SoftwareText";

export const dynamic = "force-dynamic";

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
            <ServiceText srb />
          </>
        )}
        {searchParams?.suppliers && (
          <>
            <HeadText>
              U našoj kompaniji, odgovorno upravljanje lancem snabdevanja čini
              osnovu održivog i uspešnog poslovanja.
            </HeadText>
            <SuppliersText srb />
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
