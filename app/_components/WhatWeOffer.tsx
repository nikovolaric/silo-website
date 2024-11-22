import Image from "next/image";
import img from "@/public/history-5.jpg";

function WhatWeOffer({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <div className="mt-10 lg:mt-24">
      <h4 className="font-raj text-2xl font-bold text-primary">
        {srb
          ? "Ambiciozni, pouzdani i spremni za izazov? Želimo te u našem timu."
          : slo
            ? "Ste ambiciozni, zanesljivi in pripravljeni na izzive? Želimo vas v naši ekipi."
            : "Ambitious, reliable, and ready for a challenge? We want you in our team."}
      </h4>
      <div className="mt-16 flex flex-col gap-6 md:grid md:grid-cols-2">
        <div className="relative h-56 w-full md:h-full">
          <Image
            src={img}
            alt="slika"
            fill
            placeholder="blur"
            className="rounded-lg object-cover"
            sizes="(max-width:768px)95vw,50vw"
          />
        </div>
        <h5 className="font-raj text-xl font-bold text-primary md:col-span-2 md:col-start-1 md:row-start-1">
          {srb ? "Ono što nudimo:" : slo ? "Kaj ponujamo:" : "What we offer:"}
        </h5>
        <ul className="flex list-inside list-image-check flex-col gap-4 font-light">
          <li>
            {srb
              ? "Stabilno i dugoročno zaposlenje"
              : slo
                ? "Stabilna in dolgoročna zaposlitev"
                : "Stable and long-term employment"}
          </li>
          <li>
            {srb
              ? "Moderna, udobna i bezbedna vozila za neometano i bezbedno iskustvo vožnje"
              : slo
                ? "Sodobna, udobna in varna vozila za nemoteno in varno vožnjo."
                : "Modern, comfortable, and safe vehicles to ensure a smooth and secure driving experience"}
          </li>
          <li>
            {srb
              ? "Konkurentna plata"
              : slo
                ? "Konkurenčna plača"
                : "Competitive salary"}
          </li>
          <li>
            {srb
              ? "Mogućnosti za profesionalni razvoj i obuku"
              : slo
                ? "Priložnosti za strokovni razvoj in usposabljanje"
                : "Opportunities for professional development and training"}
          </li>
          <li>
            {srb
              ? "Zdravstveni i bezbednosni standardi koji daju prioritet vašem blagostanju"
              : slo
                ? "Zdravstveni in varnostni standardi, ki dajejo prednost vašemu dobremu počutju."
                : "Health and safety standards that prioritize your well-being"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhatWeOffer;
