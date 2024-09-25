import HeadText from "@/app/_components/HeadText";
import SustainabilityText from "@/app/_components/SustainabilityText";
import Header from "@/app/_components_en/Header";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sustainability",
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
      <main className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
        <HeadText>
          We are committed to creating an effective framework for conducting all
          our activities in a way that contributes to building a sustainable
          society.
        </HeadText>
        <SustainabilityText />
      </main>
    </>
  );
}

export default Page;
