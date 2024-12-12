import img4 from "@/public/history-4.jpg";
import img5 from "@/public/history-5.jpg";
import img6 from "@/public/history-6.jpg";
import img7 from "@/public/history-7.jpg";
import img8 from "@/public/history-8.jpg";
import Image from "next/image";
import TimelineListItem from "./TimelineListItem";

function Timeline({ slo, srb }: { slo?: boolean; srb?: boolean }) {
  return (
    <ul className="mx-auto mt-36 grid list-outside list-image-check grid-cols-[1fr,5fr] gap-x-5 gap-y-8 font-light italic md:w-5/6 md:grid-cols-[1fr,9fr]">
      <div className="row-start-1 row-end-[15] bg-gradient-to-b from-neutral via-grad to-neutral"></div>
      <TimelineListItem>
        <p className="font-raj font-bold not-italic text-primary">1965</p>
        <p>
          {slo
            ? "Začetki že leta 1965."
            : srb
              ? "Poreklo daleke 1965. godine."
              : "Origins from as far back as 1965."}
        </p>
        <div className="relative my-6 h-44 w-full md:h-52 md:w-2/3 lg:w-1/2">
          <Image
            src={img4}
            alt="history image"
            fill
            placeholder="blur"
            className="rounded-lg object-cover object-top"
            sizes="(max-width:768px)80vw,(max-width:1024px):50vw,30vw"
          />
        </div>
      </TimelineListItem>{" "}
      <TimelineListItem>
        <p className="font-raj font-bold not-italic text-primary">1998</p>
        <p>
          {slo
            ? "ustanovitev podjetniškega transportnega podjetja."
            : srb
              ? "osnivanje preduzetničke transportne firme."
              : "establishment of an entrepreneurial transport company."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <p className="font-raj font-bold not-italic text-primary">2001</p>
        <p>
          {slo
            ? "preoblikovanje v družbo z omejeno odgovornostjo. Podjetje opravlja bilateralne in mednarodne prevoze med evropskimi državami in tako prevzema vlogo mednarodnega prevoznika. Naše izkušnje in znanje rastejo skupaj s ugledom podjetja, ki je našlo svoje mesto na evropskem trgu."
            : srb
              ? "transformacija u društvo s ograničenom odgovornošću. Kompanija vrši, pored bilateralnih transporta i transporte između evropskih zemalja, preuzimajući ulogu međunarodnog transportera u pravom smislu te reči. Fond znanja i iskustva raste sa ugledom kompanije koja nalazi svoje mesto na evropskom tržištu transporta."
              : "transformation into a limited liability company. Company performs bilateral and international transports between European countries , thus taking on a roll of international transporter. Our expirience and knowledge levels grow along with respectability of a company that found it’s place on European market."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2004</p>
        </div>
        <p>
          {slo
            ? "prinaša nove trende, saj podjetje razširi svoj portfelj s prevozi suhih materialov s silo cisternami."
            : srb
              ? "godina donosi nove trendove i kompanija počinje sa transportom suvih materija silo cisternama kao delom svog transportnog portfolia."
              : "brings new trends as company expands it’s portfolio with transports of dry bulk materials with silo semitrailers."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2008</p>
        </div>
        <p>
          {slo
            ? "vizija namenskega industrijskega prevoznika se uresniči s popolnim osredotočanjem na cestni transport suhih razsutih tovorov s silosi. Specializiran vozni park je raznolik za vse potrebe naših strank."
            : srb
              ? "vizija namenskog industrijskog transportera se ostvaruje kroz potpuni fokus na  drumski transport rasutog tereta silo cisternama."
              : "a vision of dedicated industrial transporter is realized through complete focus on silo road dry bulk transport. Specialized fleet is diversified for all needs of our clients."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2011</p>
        </div>
        <p>
          {slo
            ? "podjetje presega zahteve lokalne zakonodaje z verifikacijo uspešne poslovne prakse in pridobitvijo prvega certifikata – SQAS."
            : srb
              ? "kompanija preuzima korake u nadmašivanju zahteva lokalnog zakonodavstva verifikovanjem sopstvene uspešne poslovne prakse dobijanjem prvog sertifikata – SQAS."
              : "takes steps to surpass local legislative requirements by verifying it’s succesfull business practice by obtaining it’s first quality assesment – SQAS."}
        </p>
        <div className="relative mt-6 h-44 w-full md:h-52 md:w-2/3 lg:w-1/2">
          <Image
            src={img6}
            alt="history image"
            fill
            placeholder="blur"
            className="rounded-lg object-cover"
            sizes="(max-width:768px)80vw,(max-width:1024px):50vw,30vw"
          />
        </div>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2012</p>
        </div>
        <p>
          {slo
            ? "pridobimo GMP+ (Good Manufacturing Practice) certifikat, s katerim potrjujemo visoke standarde za prevoz krme za živali."
            : srb
              ? "obezbeđujemo i GMP+ (Good Manufacturing Practice) sertifikat čime smo verifikovali svoje visoke standarde za prevoz hrane za životinje."
              : "we earn GMP+ (Good Manufacturing Practice) certificate through which we verify our high standards in transport of feed."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2013</p>
        </div>
        <p>
          {slo
            ? "ustanovimo podružnico v EU in s tem pridobimo enakopraven položaj z drugimi evropskimi prevozniki, kar omogoča uporabo prednosti enotnega trga EU. Prav tako smo prejeli certifikata za ISO 9001 in HACCP"
            : srb
              ? "osnivamo ogranak u EU. Ovim se stavljamo u ravnopravan položaj sa ostalim evropskim prevoznicima koristeći sve prednosti jedinstvenog EU tržišta. Takođe smo dobili sertifikate za ISO 9001 i HACCP."
              : "we establish our EU branch. Thus we step up to the equal position with other European bulk transporters and we take all opportunities of EU market. We also got certified for ISO 9001 and HACCP."}
        </p>
        <div className="relative mt-6 h-44 w-full md:h-52 md:w-2/3 lg:w-1/2">
          <Image
            src={img5}
            alt="history image"
            fill
            placeholder="blur"
            className="rounded-lg object-cover"
            sizes="(max-width:768px)80vw,(max-width:1024px):50vw,30vw"
          />
        </div>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2016</p>
        </div>
        <p>
          {slo
            ? "pridobimo certifikat GMP+B.4 v Sloveniji."
            : srb
              ? "godine kroz sertifikaciju na GMP+B.4 izjednačavamo ogranke zasebno ostvarenim sertifikatima kvaliteta."
              : "we obtain GMP+B.4 certificate in Slovenia."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2017</p>
        </div>
        <p>
          {slo
            ? "uvedemo strateško sodelovanje s SCANIA Group. Prav tako potrjujemo svojo družbeno odgovornost s pregledom SMETA skupine SEDEX."
            : srb
              ? "godine uspostavljamo stratešku saradnju sa SCANIA Group. Takodje, potvrdjujemo se kroz SMETA nadzor grupacije SEDEX."
              : "the strategic cooperation with Scania Group is initiated. We also confirm our corporate responsibility levels through SMETA audit of SEDEX group."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2018</p>
        </div>
        <p>
          {slo
            ? "pridružimo se globalni pobudi Clean sweep (Zero pellet loss)."
            : srb
              ? "pridružujemo se globalnoj inicijativi Clean sweep (Zero pellet loss)."
              : "we take Clean sweep pledge and joins global initiative for Zero pellet loss."}
        </p>
        <div className="relative mt-6 h-44 w-full md:h-52 md:w-2/3 lg:w-1/2">
          <Image
            src={img8}
            alt="history image"
            fill
            placeholder="blur"
            className="rounded-lg object-cover"
            sizes="(max-width:768px)80vw,(max-width:1024px):50vw,30vw"
          />
        </div>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2019</p>
        </div>
        <p>
          {slo
            ? "nabava vakuumskega silosa in razširitev portfelja storitev."
            : srb
              ? "nabavka vakuum silosa i proširenje portfolia usluga."
              : "introduction of vacuum silos in our service portfolio."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2020</p>
        </div>
        <p>
          {slo
            ? "podpora partnerjem v času pandemije Covid19."
            : srb
              ? "podrška partnerima za vreme Covid19 pandemije."
              : "supporting our partners during Covid19 pandemics."}
        </p>
      </TimelineListItem>
      <TimelineListItem>
        <div>
          <p className="font-raj font-bold not-italic text-primary">2023</p>
        </div>
        <p>
          {slo
            ? "Ecovadis presoja."
            : srb
              ? "Ecovadis procena."
              : "Ecovadis assesment."}
        </p>
        <div className="relative mt-6 h-44 w-full md:h-52 md:w-2/3 lg:w-1/2">
          <Image
            src={img7}
            alt="history image"
            fill
            placeholder="blur"
            className="rounded-lg object-cover"
            sizes="(max-width:768px)80vw,(max-width:1024px):50vw,30vw"
          />
        </div>
      </TimelineListItem>
    </ul>
  );
}

export default Timeline;
