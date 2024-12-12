import Image from "next/image";
import img1 from "@/public/history-1.jpg";

function HomeText({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <div className="mt-24 flex flex-col gap-6 font-light text-secondary lg:mt-40 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-10">
      <div className="relative mx-auto h-48 w-full md:w-2/3 lg:col-start-1 lg:col-end-1 lg:h-full lg:w-full xl:w-5/6">
        <Image
          src={img1}
          alt="about us image"
          fill
          placeholder="blur"
          className="rounded-lg object-cover"
          sizes="(max-width:768px)95vw,50vw"
          quality={50}
        />
      </div>
      <h3 className="font-raj text-2xl font-bold text-primary lg:col-span-2 lg:col-start-1 lg:row-start-1">
        {slo
          ? "Osredotočeni na zanesljivost, kakovost, prilagodljivost in dolgoročna partnerstva"
          : srb
            ? "Fokusirani na pouzdanost, kvalitet, fleksibilnost i dugoročna partnerstva"
            : "Focused on reliability, quality, flexibility, and long-term partnerships"}
      </h3>
      <div className="lg:flex lg:flex-col lg:gap-4 xl:w-5/6">
        <p>
          {slo
            ? "Od leta 2001 smo specializirani za cestni prevoz suhega razsutega prahu in granuliranega materiala z uporabo najsodobnejših silos cistern."
            : srb
              ? "Od 2001. godine specijalizovani smo za drumski transport suvog rasutog praha i granulisanog materijala najsavremenijim silo cisternama"
              : "Since 2001, we have specialized in road transport of dry bulk powders and granulated materials using state-of-the-art silo trucks."}
        </p>
        <p>
          {slo
            ? "Naša izkušena ekipa v kombinaciji z napredno opremo zagotavlja zanesljivo storitev za stranke v industrijskem, krmnem, prehrambnem in kemičnem sektorju."
            : srb
              ? "Naš iskusan tim, u kombinaciji sa naprednom opremom, obezbeđuje pouzdanu uslugu za klijente u industrijskom, stočnom, prehrambenom i hemijskom sektoru."
              : "Our experienced team, combined with advanced equipment, ensures reliable service for customers in the industrial, feed, food, and chemical sectors."}
        </p>
        <p>
          {slo
            ? "Naša filozofija upravljanja se osredotoča na tesno sodelovanje med vodstvom in vozniki, s poudarkom na izpolnjevanju obljub in ohranjanju močnih partnerstev s strankami."
            : srb
              ? "Naša filozofija menadžmenta se fokusira na blisku saradnju između rukovodstva i vozača, uz posvećenost ispunjavanju obećanja i održavanju snažnog partnerstva sa klijentima."
              : "Our management philosophy focuses on close collaboration between leadership and drivers, with a commitment to delivering on promises and maintaining strong client partnerships."}
        </p>
      </div>
    </div>
  );
}

export default HomeText;
