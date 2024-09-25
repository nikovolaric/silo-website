import img4 from "@/public/history-4.jpg";
import img5 from "@/public/history-5.jpg";
import img6 from "@/public/history-6.jpg";
import img7 from "@/public/history-7.jpg";
import Image from "next/image";
import TimelineListItem from "./TimelineListItem";

function Timeline({ srb }: { srb?: boolean }) {
  return (
    <ul className="mt-36 font-light italic grid grid-cols-[1fr,5fr] gap-y-8 gap-x-5 list-image-check list-outside md:grid-cols-[1fr,9fr] md:w-5/6 mx-auto">
      <div className="bg-gradient-to-b from-neutral via-grad to-neutral row-span-12"></div>
      <TimelineListItem>
        <p className="text-primary font-bold font-raj not-italic">2001</p>
        <p>
          {srb
            ? "registruje kao Ortačko društvo ˝Silo Jeličić˝ i ovaj datum se uzima kao početak korporativnog poslovanja"
            : "the company Silo Jelicic is registered and it is taken as a start of corporate activities"}
        </p>
        <div className="relative h-44 w-full my-6 md:w-2/3 md:h-52 lg:w-1/2">
          <Image
            src={img4}
            alt="history image"
            fill
            placeholder="blur"
            className="object-cover rounded-lg object-top"
            sizes="(max-width:768px)80vw,(max-width:1024px):50vw,30vw"
          />
        </div>
        <p>
          {srb
            ? "pored bilateralnih transporta i transporte između evropskih zemalja, preuzimajući ulogu međunarodnog transportera u pravom smislu te reči. Fond znanja i iskustva raste sa ugledom kompanije koja nalazi svoje mesto na evropskom tržištu transporta."
            : "we perform bilateral and international transports between European countries, thus taking on a roll of international transporter. "}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2006</p>
        </div>
        <p>
          {srb
            ? "godina donosi nove trendove i kompanija počinje sa transportom suvih materija silo cisternama kao delom svog transportnog portfolia"
            : "brings new trends as company expands it’s portfolio with transports of dry bulk materials with silo semitrailers"}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2008</p>
        </div>
        <p>
          {srb
            ? "vizija namenskog industrijskog transportera se ostvaruje kroz potpuni fokus na silos drumski transport rasutog tereta. Specijalizovani vozni park je raznolik za sve potrebe naših klijenata."
            : "a vision of dedicated industrial transporter is realized through complete focus on silo road dry bulk transport. Specialized fleet is diversified for all needs of our clients."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2011</p>
        </div>
        <p>
          {srb
            ? "kompanija preuzima korake u nadmašivanju zahteva lokalnog zakonodavstva verifikovanjem sopstvene uspešne poslovne prakse dobijanjem prvog sertifikata – SQAS"
            : "takes steps to surpass local legislative requirements by verifying it’s succesfull business practice by obtaining it’s first quality assesment – SQAS"}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2012</p>
        </div>
        <p>
          {srb
            ? "obezbeđujemo i GMP+ (Good Manufacturing Practice) sertifikat čime smo verifikovali svoje visoke standarde za prevoz hrane za životinje"
            : "we earn GMP+ (Good Manufacturing Practice) certificate through which we verify our high standards in transport of feed"}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2013</p>
        </div>
        <p>
          {srb
            ? "osnivamo ogranak u EU. Ovim se stavljamo u ravnopravan položaj sa ostalim evropskim prevoznicima koristeći sve prednosti jedinstvenog EU tržišta"
            : "we establish our EU branch. Thus we step up to the equal position with other European bulk transporters and we take all opportunities of EU market"}
        </p>
        <div className="relative h-44 w-full mt-6 md:w-2/3 md:h-52 lg:w-1/2">
          <Image
            src={img5}
            alt="history image"
            fill
            placeholder="blur"
            className="object-cover rounded-lg"
            sizes="(max-width:768px)80vw,(max-width:1024px):50vw,30vw"
          />
        </div>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2016</p>
        </div>
        <p>
          {srb
            ? "godine kroz sertifikaciju na GMP+B.4 izjednačavamo ogranke zasebno ostvarenim sertifikatima kvaliteta"
            : "we obtain GMP+B.4 certificate in Slovenia"}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2017</p>
        </div>
        <p>
          {srb
            ? "godine uspostavljamo stratešku saradnju sa SCANIA Group. Takodje, potvrdjujemo se kroz SMETA nadzor grupacije SEDEX"
            : "the strategic cooperation with Scania Group is initiated. We also confirm our corporate responsibility levels through SMETA audit of SEDEX group"}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2018</p>
        </div>
        <p>
          {srb
            ? "pridružujemo se globalnoj inicijativi Clean sweep (Zero pellet spill)"
            : "we take Clean sweep pledge and joins global initiative for Zero pellet loss"}
        </p>
        <div className="relative h-44 w-full mt-6 md:w-2/3 md:h-52 lg:w-1/2">
          <Image
            src={img6}
            alt="history image"
            fill
            placeholder="blur"
            className="object-cover rounded-lg"
            sizes="(max-width:768px)80vw,(max-width:1024px):50vw,30vw"
          />
        </div>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2019</p>
        </div>
        <p>
          {srb
            ? "nabavka vakuum silosa i proširenje portfolia usluga"
            : "introduction of vacuum silos in our service portfolio"}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="text-primary font-bold font-raj not-italic">2020</p>
        </div>
        <p>
          {srb
            ? "podrška partnerima za vreme Covid19 pandemije"
            : "supporting our partners during Covid19 pandemics"}
        </p>
        <div className="relative h-44 w-full mt-6 md:w-2/3 md:h-52 lg:w-1/2">
          <Image
            src={img7}
            alt="history image"
            fill
            placeholder="blur"
            className="object-cover rounded-lg"
            sizes="(max-width:768px)80vw,(max-width:1024px):50vw,30vw"
          />
        </div>
      </TimelineListItem>
    </ul>
  );
}

export default Timeline;
