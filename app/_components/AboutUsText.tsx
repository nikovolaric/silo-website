import img1 from "@/public/aboutus-photo.png";
import img2 from "@/public/history-2.jpg";
import img3 from "@/public/history-6.jpg";
import Image from "next/image";
import Misija from "./Misija";
import Vizija from "./Vizija";
import WhyUs from "./WhyUs";
import LinkBtn from "./LinkBtn";
import { getAllDownloads } from "../_lib/downloadApi";
import DownloadItem from "./DownloadItem";

async function AboutUsText({ slo, srb }: { slo?: boolean; srb?: boolean }) {
  const data = await getAllDownloads("about");

  return (
    <div className="mt-10 flex flex-col gap-14 md:mt-20 lg:gap-24">
      <div className="flex flex-col gap-6 font-light text-secondary lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-10">
        <div className="relative mx-auto h-48 w-full md:w-2/3 lg:col-start-1 lg:col-end-1 lg:row-span-2 lg:h-full lg:w-full">
          <Image
            src={img1}
            alt="about us image"
            fill
            placeholder="blur"
            className="rounded-lg object-cover"
            sizes="(max-width:768px)95vw,50vw"
          />
        </div>
        <h3 className="font-raj text-2xl font-bold text-primary">
          {slo
            ? "Osredotočeni na zanesljivost, kakovost, prilagodljivost in dolgoročna partnerstva"
            : srb
              ? "Fokusirani na pouzdanost, kvalitet, fleksibilnost i dugoročna partnerstva"
              : "Focused on reliability, quality, flexibility, and long-term partnerships"}
        </h3>
        <div className="lg:flex lg:flex-col lg:gap-4">
          <p>
            {slo
              ? "Od leta 2001 smo specializirani za cestni prevoz suhega razsutega prahu in granuliranega materiala z uporabo najsodobnejših silos cistern."
              : srb
                ? "Od 2001. godine specijalizovani smo za drumski transport suvog rasutog praha i granulisanog materijala najsavremenijim silo cisternama."
                : "Since 2001, we have specialized in road transport of dry bulk powders and granulated materials using state-of-the-art silo trucks."}
          </p>
          <p>
            {slo
              ? "Naša izkušena ekipa v kombinaciji z napredno opremo zagotavlja zanesljivo storitev za stranke v industrijskem, krmnem, prehrambnem in kemijskem sektorju."
              : srb
                ? "Naš iskusan tim, u kombinaciji sa naprednom opremom, obezbeđuje pouzdanu uslugu za klijente u industrijskom, stočnom, prehrambenom i hemijskom sektoru."
                : "Our experienced team, combined with advanced equipment, ensures reliable service for customers in the industrial, feed, food, and chemical sectors."}
          </p>
          <p>
            {slo
              ? "Naša vodstvena filozofija se osredotoča na tesno sodelovanje med vodstvom in vozniki ter na zavezanost k izpolnjevanju obljub in ohranjanju močnih partnerstev s strankami."
              : srb
                ? "Naša filozofija menadžmenta se fokusira na blisku saradnju između rukovodstva i vozača, uz posvećenost ispunjavanju obećanja i održavanju snažnog partnerstva sa klijentima."
                : "Our management philosophy focuses on close collaboration between leadership and drivers, with a commitment to delivering on promises and maintaining strong client partnerships."}
          </p>
        </div>
      </div>
      <Misija slo={slo} srb={srb} img2={img2} />
      <Vizija slo={slo} srb={srb} img3={img3} />
      <div className="flex flex-col gap-6 font-light">
        <h3 className="font-raj text-2xl font-bold text-primary">
          {slo
            ? "Naša poslovna politika temelji na načelih kakovostnega upravljanja, nenehnih izboljšav in trajnostnega razvoja."
            : srb
              ? "Naša poslovna politika zasniva se na principima kvalitetnog upravljanja, stalnih poboljšanja i održivog razvoja."
              : "Our business policy is based on principles of quality management, continuous improvement, and sustainable development."}
        </h3>
        <p>
          {slo
            ? "Zavezani smo visokim etičnim standardom, spoštovanju zakonodaje in predpisov ter doslednemu upoštevanju mednarodnih standardov in najboljših praks. V vseh vidikih našega poslovanja si prizadevamo doseči ravnotežje med ekonomskimi, okoljskimi in družbenimi cilji, da zagotovimo dolgoročni uspeh in zadovoljstvo vseh naših deležnikov."
            : srb
              ? "Posedujemo posvećenost visokim etičkim standardima, poštovanju zakona i regulativa, kao i doslednoj primeni međunarodnih standarda i najbolje prakse. U svim aspektima našeg poslovanja, težimo da postignemo ravnotežu između ekonomskih, ekoloških i društvenih ciljeva, osiguravajući dugoročni uspeh i zadovoljstvo svih naših zainteresovanih strana."
              : "We are committed to high ethical standards, compliance with laws and regulations, and consistent adherence to international standards and best practices. In all aspects of our operations, we strive to balance economic, environmental, and social objectives to ensure long-term success and satisfaction for all our stakeholders."}
        </p>
      </div>
      <div>
        {data.downloads.map(
          (el: {
            ime: string;
            name: string;
            downloadLink: string;
            _id: string;
          }) => (
            <DownloadItem key={el._id} download={el} srb={srb} />
          ),
        )}
      </div>
      <WhyUs slo={slo} srb={srb} />
      <div className="flex justify-center gap-5">
        <LinkBtn
          href={slo ? "/si/kontakt" : srb ? "/rs/kontakt" : "/contact"}
          type="secondary"
        >
          {slo ? "Kontakt" : srb ? "Kontakt" : "Contact"}
        </LinkBtn>
        <LinkBtn
          href={slo ? "/si/zaposlitev" : srb ? "/rs/karijera" : "/career"}
          type="primary"
        >
          {slo ? "Zaposlitev" : srb ? "Karijera" : "Career"}
        </LinkBtn>
      </div>
    </div>
  );
}

export default AboutUsText;
