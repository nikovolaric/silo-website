import ContactForm from "@/app/_components/ContactForm";
import HeadText from "@/app/_components/HeadText";
import ServicesNav from "@/app/_components/ServicesNav";
import ServiceText from "@/app/_components/ServiceText";
import SoftwareText from "@/app/_components/SoftwareText";
import SuppliersText from "@/app/_components/SuppliersText";
import Header from "@/app/_components_en/Header";
import Services from "@/app/_components_en/Services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

function Page({
  searchParams,
}: {
  searchParams?: {
    suppliers?: boolean;
    software?: boolean;
  };
}) {
  const session = cookies().get("jwt")?.value;

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
        <ServicesNav srb={false} params={searchParams} />
        {!searchParams?.software && !searchParams?.suppliers && (
          <>
            <HeadText>
              We specialize in road silo transport with a dedicated fleet,
              skilled staff, and advanced technology, ensuring top-quality
              service.
            </HeadText>
            <Services />
            <ServiceText srb={false} />
          </>
        )}
        {searchParams?.suppliers && (
          <>
            <HeadText>
              In our company, responsible supply chain management forms the
              foundation of sustainable and successful business operations.
            </HeadText>
            <SuppliersText />
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
