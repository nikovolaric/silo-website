import Image from "next/image";
import img from "@/public/service-img.png";
import img2 from "@/public/slika-servicetext.png";
import LinkBtn from "./LinkBtn";

function ServiceText({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <>
      <div className="mt-20 flex flex-col gap-8 md:gap-20 md:mt-24 lg:mt-36 lg:grid lg:grid-cols-2">
        <div className="relative w-full h-56 md:w-7/12 md:h-64 lg:w-full lg:h-80 mx-auto">
          <Image
            src={img2}
            alt="service image"
            fill
            placeholder="blur"
            className="object-cover rounded-lg"
            sizes="(max-width:768px)95vw,66vw"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="font-raj font-bold text-2xl text-primary">
            {slo
              ? "Naša zavezanost zanesljivosti in varnosti"
              : srb
              ? "Naša posvećenost pouzdanosti i bezbednosti"
              : "Our Commitment to Reliability and Safety"}
          </h3>
          <div className="text-secondary font-light">
            {slo ? (
              <p>
                Zanesljivost zagotavljamo z neprestano rastjo, usposabljanjem
                osebja in napredno tehnologijo.
                <br />
                <br />
                Varnost je na prvem mestu z EFTCO certificiranim čiščenjem silo
                prikolic, čemur sledijo temeljiti pregledi. Vsi podatki o
                prevozu in čiščenju so sledljivi in na voljo strankam na
                zahtevo.
              </p>
            ) : srb ? (
              <p>
                Obezbeđujemo pouzdanost kroz kontinuirani rast, obuku osoblja i
                naprednu tehnologiju.
                <br />
                <br />
                Bezbednost je prioritet uz EFTCO sertifikovano čišćenje
                prikolica silosa, nakon čega slede detaljne inspekcije. Svi
                podaci o transportu i čišćenju su sledljivi i dostupni kupcima
                na zahtev.
              </p>
            ) : (
              <p>
                We ensure reliability through continuous growth, staff training,
                and advanced technology.
                <br />
                <br />
                Safety is prioritized with EFTCO-certified cleaning of silo
                trailers, followed by thorough inspections. All transport and
                cleaning data is traceable and available to customers on
                request.
              </p>
            )}
          </div>
        </div>
        <div className="relative w-full h-56 md:w-7/12 md:h-64 lg:w-full lg:h-80 lg:col-start-2 lg:row-start-2 mx-auto">
          <Image
            src={img}
            alt="service image"
            fill
            placeholder="blur"
            className="object-cover rounded-lg"
            sizes="(max-width:768px)95vw,66vw"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="font-raj font-bold text-2xl text-primary">
            {slo
              ? "Prilagodljivost in proaktivne rešitve"
              : srb
              ? "Fleksibilnost i proaktivna rešenja"
              : "Flexibility and Proactive Solutions"}
          </h3>
          <div className="text-secondary font-light">
            {slo ? (
              <p>
                S proaktivnim načrtovanjem, integracijo tehnologije in strateško
                prisotnostjo po vsej Evropi se hitro odzivamo na potrebe trga.
                Nenehno usposabljanje zaposlenih nam omogoča, da smo v skladu s
                pričakovanji strank in tehnološkim napredkom.
                <br />
                <br />
                Zavedamo se občutljivosti vsakega materiala, ki ga prevažamo, in
                velik pomen pripisujemo individualnim zahtevam vsake stranke.
              </p>
            ) : srb ? (
              <p>
                Uz proaktivno planiranje, integraciju tehnologije i strateško
                prisustvo širom Evrope, brzo odgovaramo na potrebe tržišta.
                Stalna obuka zaposlenih drži nas u skladu sa očekivanjima
                klijenata i tehnološkim napretkom.
                <br />
                <br />
                Svesni smo senzibilnosti svakog materijala koji transportujemo i
                pridajemo veliki značaj individualnim zahtevima svakog kupca.
              </p>
            ) : (
              <p>
                With proactive planning, technology integration, and a strategic
                presence across Europe, we respond swiftly to market needs.
                Ongoing employee training keeps us aligned with client
                expectations and technological advancements.
                <br />
                <br />
                We are aware of sensibility of each material we transport and we
                put great importance to individual requests of every customer.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-5 md:mt-20">
        <LinkBtn
          type="secondary"
          href={
            slo
              ? "/rs/onas?quality=true"
              : srb
              ? "/onama?quality=true"
              : "/aboutus?quality=true"
          }
        >
          {slo
            ? "Starndardi kakovosti"
            : srb
            ? "Standardi kvaliteta"
            : "Quality standards"}
        </LinkBtn>
        <LinkBtn
          type="primary"
          href={slo ? "/si/zaposlitev" : srb ? "/rs/kariera" : "/career"}
        >
          {slo ? "Zaposlitev" : srb ? "Kariera" : "Career"}
        </LinkBtn>
      </div>
    </>
  );
}

export default ServiceText;
