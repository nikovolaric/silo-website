import Image from "next/image";
import img1 from "@/public/history-1.jpg";

function HomeText({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <div className="mt-24 font-light text-secondary flex flex-col gap-6 lg:mt-40 lg:grid lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5">
      <div className="relative w-full h-48 md:w-2/3 mx-auto lg:w-full lg:h-full lg:col-start-1 lg:col-end-1 xl:w-5/6">
        <Image
          src={img1}
          alt="about us image"
          fill
          placeholder="blur"
          className="object-cover rounded-lg"
          sizes="(max-width:768px)95vw,50vw"
        />
      </div>
      <h3 className="font-raj font-bold text-2xl text-primary lg:col-start-1 lg:row-start-1 lg:col-span-2">
        {slo
          ? "Osredotočeni na zanesljivost, kakovost, prilagodljivost in dolgoročna partnerstva"
          : srb
          ? "Fokusirani na pouzdanost, kvalitet, fleksibilnost i dugoročna partnerstva"
          : "Focused on reliability, quality, flexibility, and long-term partnerships"}
      </h3>
      <div className="lg:flex lg:flex-col lg:gap-4 xl:w-5/6">
        <p>
          {slo
            ? "Od leta 2001 smo specializirani za cestni prevoz suhih razsutih praškov in granuliranih materialov z najsodobnejšimi silos tovornjaki."
            : srb
            ? "Od 2001. godine specijalizovani smo za drumski transport suvog rasutog praha i granulisanog materijala najsavremenijim silos kamionima"
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
