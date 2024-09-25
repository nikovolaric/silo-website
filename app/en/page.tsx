import { Metadata } from "next";
import HomeHeader from "../_components_en/HomeHeader";
import WhySilo from "../_components/WhySilo";
import Counter from "../_components/Counter";
import ContactForm from "../_components/ContactForm";
import HomeServices from "../_components/HomeServices";
import HomeText from "../_components/HomeText";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Welcome",
  description:
    "We are leading dry bulk transporter dedicated to needs of our partners since 2001.",
};

// export const dynamic = "force-static";

function Page() {
  const session = cookies().get("jwt")?.value;

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <HomeHeader />
      <main>
        <div className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
          <HomeServices />
          <WhySilo
            srb={false}
            one="Top technology"
            two="Integrated Software Solutions"
            three="Confirmed Quality"
            four="Experienced and Trained Driving Crew"
          />
          <HomeText />
        </div>
        <Counter srb={false} />
        <div className="mx-4 md:mx-8 lg:mx-20 xl:px-20 xl:mx-auto max-w-7xl">
          <ContactForm srb={false} />
        </div>
      </main>
    </>
  );
}

export default Page;
