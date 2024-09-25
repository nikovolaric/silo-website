import img1 from "@/public/history-1.jpg";
import img2 from "@/public/history-2.jpg";
import img3 from "@/public/history-3.jpg";
import Image from "next/image";
import Misija from "./Misija";
import Vizija from "./Vizija";
import WhyUs from "./WhyUs";
import LinkBtn from "./LinkBtn";
import { getAllDownloads } from "../_lib/downloadApi";
import DownloadItem from "./DownloadItem";

async function AboutUsText({ srb }: { srb?: boolean }) {
  const data = await getAllDownloads("about");

  return (
    <div className="mt-10 md:mt-20 flex flex-col gap-14 lg:gap-24">
      <div className="font-light text-secondary flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5">
        <div className="relative w-full h-48 md:w-2/3 mx-auto lg:w-full lg:h-full lg:col-start-1 lg:col-end-1 lg:row-span-2">
          <Image
            src={img1}
            alt="about us image"
            fill
            placeholder="blur"
            className="object-cover rounded-lg"
            sizes="(max-width:768px)95vw,50vw"
          />
        </div>
        <h3 className="font-raj font-bold text-2xl text-primary">
          {srb
            ? "Fokusirani na pouzdanost, kvalitet, fleksibilnost i dugoročna partnerstva"
            : "Focused on reliability, quality, flexibility, and long-term partnerships"}
        </h3>
        <div className="lg:flex lg:flex-col lg:gap-4">
          <p>
            {srb
              ? "Od 2001. godine specijalizovani smo za drumski transport suvog rasutog praha i granulisanog materijala najsavremenijim silos kamionima"
              : "Since 2001, we have specialized in road transport of dry bulk powders and granulated materials using state-of-the-art silo trucks."}
          </p>
          <p>
            {srb
              ? "Naš iskusan tim, u kombinaciji sa naprednom opremom, obezbeđuje pouzdanu uslugu za klijente u industrijskom, stočnom, prehrambenom i hemijskom sektoru."
              : "Our experienced team, combined with advanced equipment, ensures reliable service for customers in the industrial, feed, food, and chemical sectors."}
          </p>
          <p>
            {srb
              ? "Naša filozofija menadžmenta se fokusira na blisku saradnju između rukovodstva i vozača, uz posvećenost ispunjavanju obećanja i održavanju snažnog partnerstva sa klijentima."
              : "Our management philosophy focuses on close collaboration between leadership and drivers, with a commitment to delivering on promises and maintaining strong client partnerships."}
          </p>
        </div>
      </div>
      <Misija srb={srb} img2={img2} />
      <Vizija srb={srb} img3={img3} />
      <div className="font-light flex flex-col gap-6">
        <h3 className="font-raj font-bold text-2xl text-primary">
          {srb
            ? "Naša poslovna politika zasniva se na principima kvalitetnog upravljanja, stalnih poboljšanja i održivog razvoja."
            : "Our business policy is based on principles of quality management, continuous improvement, and sustainable development."}
        </h3>
        <p>
          {srb
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
          )
        )}
      </div>
      <WhyUs srb={srb} />
      <div className="flex gap-5 justify-center">
        <LinkBtn href={srb ? "/kontakt" : "/en/contact"} type="secondary">
          {srb ? "Kontakt" : "Contact"}
        </LinkBtn>
        <LinkBtn href={srb ? "/kariera" : "/en/career"} type="primary">
          {srb ? "Kariera" : "Career"}
        </LinkBtn>
      </div>
    </div>
  );
}

export default AboutUsText;
