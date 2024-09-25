import Image from "next/image";
import SustainabilityCard from "./SustainabilityCard";
import img from "@/public/history-6.jpg";
import LinkBtn from "./LinkBtn";
import ESM from "./ESM";
import ComplaintForm from "./ComplaintForm";
import { Suspense } from "react";
import Spinner from "./Spinner";

interface iESG {
  ime: string;
  title: string;
  tekst: string;
  text: string;
  img: string;
}

const ESG: iESG[] = [
  {
    ime: "Environmental (Zaštita životne sredine) ",
    title: "Envirnomental Protection",
    tekst:
      "Primenjujemo najbolju praksu u transportu rasutog tereta koristeći silos tankere, dajući prioritet smanjenim emisijama, energetskoj efikasnosti i minimiziranju otpada.  Kroz stalne inovacije i ulaganja u ekološku tehnologiju, radimo na smanjenju našeg uticaja na životnu sredinu. Naš dugoročni plan se fokusira na prelazak na budućnost sa niskim emisijama smanjenjem emisija GHG i minimiziranjem uticaja naših operacija na životnu sredinu.",
    text: "We apply best practices in bulk transport using silo tankers, prioritizing reduced emissions, energy efficiency, and waste minimization.  Through ongoing innovation and eco-friendly technology investments, we work to lower our environmental footprint. Our long-term plan focuses on transitioning to a low-emission future by reducing GHG emissions and minimizing the environmental impact of our operations.",
    img: "/icons/env.svg",
  },
  {
    ime: "Social (Društvena odgovornost) ",
    title: "Social Responsibility",
    tekst:
      "Aktivno podržavamo lokalne zajednice, obezbeđujući bezbedne i poštene uslove rada i promovišući inkluzivnost i jednakost.  Fokusiramo se na stvaranje zdravog, bezbednog radnog okruženja i kontinuirano unapređenje procesa kako bismo ispunili najviše bezbednosne standarde.  Posvećeni smo pružanju jednakih mogućnosti, prihvatanju različitosti i suprotstavljanju svim oblicima eksploatacije radnika i modernog ropstva. Naši zaposleni, dobavljači i partneri moraju poštovati stroge etičke standarde kako bi osigurali poštene i humane uslove za sve.",
    text: "We actively support local communities, ensuring safe and fair working conditions, and promoting inclusivity and equality.  We focus on creating a healthy, safe work environment and continuously improving processes to meet the highest safety standards.  We are dedicated to offering equal opportunities, embracing diversity, and opposing all forms of worker exploitation and modern slavery. Our employees, suppliers, and partners must follow strict ethical standards to ensure fair and humane conditions for all.",
    img: "/icons/social.svg",
  },
  {
    ime: "Governance (Upravljanje) ",
    title: "Governance",
    tekst:
      "Naše upravljanje je izgrađeno na etici, transparentnosti i odgovornosti, pridržavajući se najviših korporativnih standarda kako bismo osigurali usklađenost sa zakonskim propisima i internim politikama.  Cilj nam je da izgradimo poverenje kroz stroge smernice i ESG principe u svim poslovnim aktivnostima. Odgovornost je ojačana na svim nivoima, uz tekuće evaluacije kako bi se uskladili sa najboljim praksama ESG-a i promovisao održivi razvoj.  Redovne evaluacije pomažu u osiguravanju usklađenosti sa najboljim praksama ESG-a i podržavaju održivi razvoj.",
    text: "Our governance is built on ethics, transparency, and accountability, adhering to the highest corporate standards to ensure compliance with legal regulations and internal policies.  We aim to build trust through strict guidelines and ESG principles across all business activities. Accountability is reinforced at all levels, with ongoing evaluations to align with best ESG practices and promote sustainable development.  Regular evaluations help ensure alignment with ESG best practices and support sustainable development.",
    img: "/icons/gov.svg",
  },
];

function SustainabilityText({ srb }: { srb?: boolean }) {
  return (
    <div className="mt-10 flex flex-col gap-24 md:mt-16 xl:w-11/12 xl:mx-auto">
      <div>
        <h3 className="font-bold font-raj text-2xl text-primary">
          {srb
            ? "U našem preduzeću, održivost nije samo cilj, već temelj našeg poslovanja."
            : "In our company, sustainability is not just a goal but the foundation of our business."}
        </h3>
        <p className="mt-8 text-secondary font-light">
          {srb
            ? "Naš sistem upravljanja zasniva se na "
            : "Our management system is based on "}
          <span className="font-bold">
            {srb ? "ESG principima " : "ESG principles "}
          </span>
          {srb
            ? "(Environmental, Social, Governance), koji čine srž naše strategije održivosti"
            : "(Environmental, Social, Governance), which form the core of our sustainability strategy."}
        </p>
      </div>
      <div className="flex flex-col gap-20 lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20">
        {ESG.map((el: iESG, i: number) => (
          <SustainabilityCard el={el} key={i} srb={srb} />
        ))}
      </div>
      <div className="relative h-52 md:w-2/3 md:h-72 lg:w-1/2 mx-auto">
        <Image
          src={img}
          alt="image"
          fill
          className="rounded-lg object-cover"
          placeholder="blur"
          sizes="(max-width:768px)95vw, 50vw"
        />
      </div>
      <div className="text-center">
        <LinkBtn
          href={srb ? "/onama?quality=true" : "/en/aboutus?quality=true"}
          type="primary"
        >
          {srb ? "Standardi kvaliteta" : "Quality standards"}
        </LinkBtn>
      </div>
      <Suspense fallback={<Spinner />}>
        <ESM srb={srb} />
      </Suspense>
      <ComplaintForm srb={srb} />
    </div>
  );
}

export default SustainabilityText;
