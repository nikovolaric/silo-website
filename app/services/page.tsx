import BigBagComparison from "@/app/_components/BigBagComparison";
import ContactForm from "@/app/_components/ContactForm";
import HeadText from "@/app/_components/HeadText";
import ServicesNav from "@/app/_components/ServicesNav";
import ServiceText from "@/app/_components/ServiceText";
import SoftwareText from "@/app/_components/SoftwareText";
import Spinner from "@/app/_components/Spinner";
import SuppliersText from "@/app/_components/SuppliersText";
import Header from "@/app/_components_en/Header";
import Services from "@/app/_components_en/Services";
import { Suspense } from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: {
    suppliers?: boolean;
    software?: boolean;
  };
}) {
  if (!searchParams?.software && !searchParams?.suppliers) {
    return { title: "Services" };
  }
  if (searchParams?.suppliers) {
    return { title: "Suppliers" };
  }
  if (searchParams?.software) {
    return { title: "Software" };
  }
}

// export const dynamic = "force-static";

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
      <main className="mx-4 max-w-7xl md:mx-8 lg:mx-20 xl:mx-auto xl:px-20">
        <ServicesNav srb={false} params={searchParams} />
        {!searchParams?.software && !searchParams?.suppliers && (
          <>
            <HeadText>
              We are specialized in road transport of goods with silo tanks of
              renowned manufacturers, qualified staff and advanced technology,
              ensuring top-quality service.
            </HeadText>
            <Services />
            <BigBagComparison />
            <ServiceText srb={false} />
          </>
        )}
        {searchParams?.suppliers && (
          <>
            <HeadText>
              In our company, responsible supply chain management forms the
              foundation of sustainable and successful business operations.
            </HeadText>
            <Suspense fallback={<Spinner />}>
              <SuppliersText />
            </Suspense>
          </>
        )}
        {searchParams?.software && (
          <>
            <HeadText>
              We strive for most efficient application of available modern
              technologies. This provides us with possibility to quickly react
              to our clients’ requests.
            </HeadText>
            <SoftwareText />
          </>
        )}
        <ContactForm srb={false} />
      </main>
    </>
  );
}

export default Page;
