import img1 from "@/public/history-1.jpg";
import img2 from "@/public/history-2.jpg";
import img3 from "@/public/history-3.jpg";
import Image from "next/image";
import Timeline from "./Timeline";
import LinkBtn from "./LinkBtn";

function HistoryText({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <div className="mt-10 text-secondary">
      <div className="mx-auto grid w-full grid-cols-2 gap-2.5 md:w-3/4 lg:w-2/3">
        <div className="relative row-span-2 h-full w-full">
          <Image
            src={img1}
            alt="history image"
            placeholder="blur"
            className="rounded-lg object-cover"
            fill
            sizes="50vw"
          />
        </div>
        <div className="relative h-36 w-full md:h-48 lg:h-64">
          <Image
            src={img2}
            alt="history image"
            placeholder="blur"
            className="rounded-lg object-cover"
            fill
            sizes="50vw"
          />
        </div>
        <div className="relative h-36 w-full md:h-48 lg:h-64">
          <Image
            src={img3}
            alt="history image"
            placeholder="blur"
            className="rounded-lg object-cover"
            fill
            sizes="50vw"
          />
        </div>
      </div>
      <Timeline srb={srb} slo={slo} />
      <div>
        <h3 className="mt-24 font-raj text-2xl font-bold text-primary">
          {srb
            ? "I dalje smo posvećeni našoj misiji i viziji da ponudimo vodeće performanse tako da:"
            : slo
              ? "Še vedno smo zavezani svojemu poslanstvu in viziji zagotavljanja vodilne uspešnosti na način da:"
              : "We are still dedicated to our mission and vision to offer leading performance by:"}
        </h3>
        <ul className="mx-auto mt-8 flex list-inside list-image-check flex-col gap-4 font-light md:mt-10 md:w-5/6">
          <li>
            {srb
              ? "Pružamo bezbedne i pouzdane transportne usluge"
              : slo
                ? "Zagotavljamo varne in zanesljive transportne storitve"
                : "Providing safe and reliable transport services"}
          </li>
          <li>
            {srb
              ? "Budemo kompanija po izboru naših zaposlenih i drugih zainteresovanih strana"
              : slo
                ? "Smo podjetje izbire za naše zaposlene in druge zainteresirane strani"
                : "Being the company of choice for our employees and other stakeholders"}
          </li>
          <li>
            {srb
              ? "Budemo odgovorni članovi naše zajednice"
              : slo
                ? "Smo odgovorni člani naše skupnosti"
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
            href={srb ? "/rs/karijera" : slo ? "/si/zaposlitev" : "/career"}
            type="primary"
          >
            {srb ? "Karijera" : slo ? "Zaposlitev" : "Career"}
          </LinkBtn>
        </div>
      </div>
    </div>
  );
}

export default HistoryText;
