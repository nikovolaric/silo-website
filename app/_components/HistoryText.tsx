import img1 from "@/public/history-1.jpg";
import img2 from "@/public/history-2.jpg";
import img3 from "@/public/history-3.jpg";
import Image from "next/image";
import Timeline from "./Timeline";
import LinkBtn from "./LinkBtn";

function HistoryText({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <div className="mt-10 text-secondary">
      <div className="w-full grid grid-cols-2 gap-2.5 md:w-3/4 mx-auto lg:w-2/3">
        <div className="relative h-full w-full row-span-2">
          <Image
            src={img1}
            alt="history image"
            placeholder="blur"
            className="object-cover rounded-lg"
            fill
            sizes="50vw"
          />
        </div>
        <div className="relative h-36 w-full md:h-48 lg:h-64">
          <Image
            src={img2}
            alt="history image"
            placeholder="blur"
            className="object-cover rounded-lg"
            fill
            sizes="50vw"
          />
        </div>
        <div className="relative h-36 w-full md:h-48 lg:h-64">
          <Image
            src={img3}
            alt="history image"
            placeholder="blur"
            className="object-cover rounded-lg"
            fill
            sizes="50vw"
          />
        </div>
      </div>
      <Timeline srb={srb} slo={slo} />
      <div>
        <h3 className="mt-24 text-2xl text-primary font-bold font-raj">
          {srb
            ? "I dalje smo posvećeni našoj misiji i viziji da ponudimo vodeće performanse od:"
            : slo
            ? "Še vedno smo predani naši misiji in viziji, da ponudimo vodilne storitve s:"
            : "We are still dedicated to our mission and vision to offer leading performance by:"}
        </h3>
        <ul className="mt-8 font-light flex flex-col gap-4 list-inside list-image-check md:mt-10 md:w-5/6 mx-auto">
          <li>
            {srb
              ? "Pružanje bezbednih i pouzdanih transportnih usluga"
              : slo
              ? "Zagotavljanje varnih in zanesljivih transportnih storitev"
              : "Providing safe and reliable transport services"}
          </li>
          <li>
            {srb
              ? "Biti kompanija po izboru naših zaposlenih i drugih zainteresovanih strana"
              : slo
              ? "Biti podjetje izbire za naše zaposlene in druge zainteresirane strani"
              : "Being the company of choice for our employees and other stakeholders"}
          </li>
          <li>
            {srb
              ? "Biti odgovorni članovi naše zajednice"
              : slo
              ? "Biti odgovorni člani naše skupnosti"
              : "Being responsible members of our community"}
          </li>
        </ul>
        <div className="mt-20 flex justify-center gap-5 md:mt-40">
          <LinkBtn
            href={srb ? "/rs/kontakt" : slo ? "/si/kontakt" : "/contact"}
            type="secondary"
          >
            {srb ? "Kontakt" : slo ? "Kontakt" : "Contact"}
          </LinkBtn>
          <LinkBtn
            href={srb ? "/rs/kariera" : slo ? "/si/zaposlitev" : "/career"}
            type="primary"
          >
            {srb ? "Kariera" : slo ? "Zaposlitev" : "Career"}
          </LinkBtn>
        </div>
      </div>
    </div>
  );
}

export default HistoryText;
