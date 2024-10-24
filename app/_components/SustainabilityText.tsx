import Image from "next/image";
import SustainabilityCard from "./SustainabilityCard";
import img from "@/public/sustainability.jpg";
import img2 from "@/public/counter-bg.jpg";
import LinkBtn from "./LinkBtn";
import ESM from "./ESM";
import ComplaintForm from "./ComplaintForm";
import { Suspense } from "react";
import Spinner from "./Spinner";

interface iESG {
  ime: string;
  imeSlo: string;
  title: string;
  tekst: string;
  text: string;
  textSlo: string;
  img: string;
}

const ESG: iESG[] = [
  {
    ime: "Environmental (Zaštita životne sredine)",
    imeSlo: "Environmental (Varstvo okolja)",
    title: "Envirnomental Protection",
    tekst:
      "Primenjujemo najbolju praksu u transportu rasutog tereta koristeći silos tankere, dajući prioritet smanjenim emisijama, energetskoj efikasnosti i minimiziranju otpada.  Kroz stalne inovacije i ulaganja u ekološku tehnologiju, radimo na smanjenju našeg uticaja na životnu sredinu. Naš dugoročni plan se fokusira na prelazak na budućnost sa niskim emisijama smanjenjem emisija GHG i minimiziranjem uticaja naših operacija na životnu sredinu.",
    text: "We apply best practices in bulk transport using silo tankers, prioritizing reduced emissions, energy efficiency, and waste minimization.  Through ongoing innovation and eco-friendly technology investments, we work to lower our environmental footprint. Our long-term plan focuses on transitioning to a low-emission future by reducing GHG emissions and minimizing the environmental impact of our operations.",
    textSlo:
      "Uporabljamo najboljše prakse pri transportu rasutih materialov s silo cisternami, pri čemer dajemo prednost zmanjšanju emisij, energetski učinkovitosti in minimizaciji odpadkov.  S stalnimi inovacijami in naložbami v okolju prijazne tehnologije si prizadevamo zmanjšati naš okoljski odtis. Naš dolgoročni načrt se osredotoča na prehod v prihodnost z nizkimi emisijami z zmanjšanjem emisij toplogrednih plinov in minimizacijo vpliva naših operacij na okolje.",
    img: "/icons/env.svg",
  },
  {
    ime: "Social (Društvena odgovornost)",
    imeSlo: "Social (Družbena odgovornost)",
    title: "Social Responsibility",
    tekst:
      "Aktivno podržavamo lokalne zajednice, obezbeđujući bezbedne i poštene uslove rada i promovišući inkluzivnost i jednakost.  Fokusiramo se na stvaranje zdravog, bezbednog radnog okruženja i kontinuirano unapređenje procesa kako bismo ispunili najviše bezbednosne standarde.  Posvećeni smo pružanju jednakih mogućnosti, prihvatanju različitosti i suprotstavljanju svim oblicima eksploatacije radnika i modernog ropstva. Naši zaposleni, dobavljači i partneri moraju poštovati stroge etičke standarde kako bi osigurali poštene i humane uslove za sve.",
    text: "We actively support local communities, ensuring safe and fair working conditions, and promoting inclusivity and equality.  We focus on creating a healthy, safe work environment and continuously improving processes to meet the highest safety standards.  We are dedicated to offering equal opportunities, embracing diversity, and opposing all forms of worker exploitation and modern slavery. Our employees, suppliers, and partners must follow strict ethical standards to ensure fair and humane conditions for all.",
    textSlo:
      "Aktivno podpiramo lokalne skupnosti, zagotavljamo varne in poštene delovne razmere ter spodbujamo vključevanje in enakopravnost.  Osredotočamo se na ustvarjanje zdravega in varnega delovnega okolja ter nenehno izboljšujemo procese, da izpolnjujemo najvišje varnostne standarde. Zavezani smo k zagotavljanju enakih možnosti, sprejemanju raznolikosti in nasprotovanju vsem oblikam izkoriščanja delavcev ter sodobnemu suženjstvu. Naši zaposleni, dobavitelji in partnerji morajo upoštevati stroge etične standarde, da zagotovimo poštene in humane razmere za vse.",
    img: "/icons/social.svg",
  },
  {
    ime: "Governance (Upravljanje)",
    imeSlo: "Governance (Upravljanje)",
    title: "Governance",
    tekst:
      "Naše upravljanje je izgrađeno na etici, transparentnosti i odgovornosti, pridržavajući se najviših korporativnih standarda kako bismo osigurali usklađenost sa zakonskim propisima i internim politikama.  Cilj nam je da izgradimo poverenje kroz stroge smernice i ESG principe u svim poslovnim aktivnostima. Odgovornost je ojačana na svim nivoima, uz tekuće evaluacije kako bi se uskladili sa najboljim praksama ESG-a i promovisao održivi razvoj.  Redovne evaluacije pomažu u osiguravanju usklađenosti sa najboljim praksama ESG-a i podržavaju održivi razvoj.",
    text: "Our governance is built on ethics, transparency, and accountability, adhering to the highest corporate standards to ensure compliance with legal regulations and internal policies.  We aim to build trust through strict guidelines and ESG principles across all business activities. Accountability is reinforced at all levels, with ongoing evaluations to align with best ESG practices and promote sustainable development.  Regular evaluations help ensure alignment with ESG best practices and support sustainable development.",
    textSlo:
      "Naša uprava temelji na etiki, preglednosti in odgovornosti, pri čemer se držimo najvišjih korporativnih standardov za zagotavljanje skladnosti z zakonskimi predpisi in notranjimi politikami.  Cilj nam je zgraditi zaupanje s strogimi smernicami in načeli ESG v vseh poslovnih dejavnostih. Odgovornost je okrepila na vseh ravneh, z nenehnimi ocenami, da se uskladimo z najboljšimi praksami ESG in spodbujamo trajnostni razvoj. Redne ocene pomagajo zagotavljati usklajenost z najboljšimi praksami ESG in podpirajo trajnostni razvoj.",
    img: "/icons/gov.svg",
  },
];

function SustainabilityText({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <div className="mt-10 flex flex-col gap-24 md:mt-16 xl:mx-auto">
      <div>
        <h3 className="font-bold font-raj text-2xl text-primary">
          {slo
            ? "V našem podjetju trajnostnost ni le cilj, temveč temelj našega poslovanja."
            : srb
            ? "U našem preduzeću, održivost nije samo cilj, već temelj našeg poslovanja."
            : "In our company, sustainability is not just a goal but the foundation of our business."}
        </h3>
        <p className="mt-8 text-secondary font-light">
          {slo
            ? "Naš sistem vodenja temelji na "
            : srb
            ? "Naš sistem upravljanja zasniva se na "
            : "Our management system is based on "}
          <span className="font-bold">
            {slo
              ? "ESG principih "
              : srb
              ? "ESG principima "
              : "ESG principles "}
          </span>
          {slo
            ? "(Environmental, Social, Governance), ki tvorijo jedro naše strategije trajnostnosti"
            : srb
            ? "(Environmental, Social, Governance), koji čine srž naše strategije održivosti"
            : "(Environmental, Social, Governance), which form the core of our sustainability strategy."}
        </p>
      </div>
      <div className="flex flex-col gap-20 lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-20">
        {ESG.map((el: iESG, i: number) => (
          <SustainabilityCard el={el} key={i} srb={srb} slo={slo} />
        ))}
      </div>
      <div className="flex flex-col gap-10 md:gap-5 md:flex-row">
        <div className="relative h-52 w-full md:h-72 mx-auto">
          <Image
            src={img}
            alt="image"
            fill
            className="rounded-lg object-cover object-bottom"
            placeholder="blur"
            sizes="(max-width:768px)95vw, 50vw"
          />
        </div>
        <div className="relative h-52 w-full md:h-72 mx-auto">
          <Image
            src={img2}
            alt="image"
            fill
            className="rounded-lg object-cover object-bottom"
            placeholder="blur"
            sizes="(max-width:768px)95vw, 50vw"
          />
        </div>
      </div>
      <div className="text-center">
        <LinkBtn
          href={
            slo
              ? "/si/onas?quality=true"
              : srb
              ? "/onama?quality=true"
              : "/en/aboutus?quality=true"
          }
          type="primary"
        >
          {slo
            ? "Standardi kakovosti"
            : srb
            ? "Standardi kvaliteta"
            : "Quality standards"}
        </LinkBtn>
      </div>
      <Suspense fallback={<Spinner />}>
        <ESM srb={srb} slo={slo} />
      </Suspense>
      <ComplaintForm srb={srb} slo={slo} />
    </div>
  );
}

export default SustainabilityText;
