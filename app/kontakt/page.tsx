import { cookies } from "next/headers";
import ContactText from "../_components/ContactText";
import Header from "../_components/Header";
import HeadText from "../_components/HeadText";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Kontakt",
};

// export const dynamic = "force-static";

function Page() {
  const session = cookies().get("jwt")?.value;

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-8 lg:mx-20 xl:mx-auto xl:px-20 max-w-7xl">
        <HeadText>Naš iskusni tim će vam rado pomoći.</HeadText>
        <ContactText srb />
      </main>
    </>
  );
}

export default Page;
