import { Suspense } from "react";
import QualityStandards from "./QualityStandards";
import Spinner from "./Spinner";
import LinkBtn from "./LinkBtn";

function QualityText({ srb }: { srb?: boolean }) {
  return (
    <>
      <div className="mt-12 text-secondary flex flex-col gap-16 md:mt-20 lg:gap-20 xl:w-5/6 mx-auto">
        <div className="font-light">
          <h3 className="font-raj font-bold text-2xl text-primary">
            {srb
              ? "Kao jedan od lidera u industriji, posedujemo sertifikate koji garantuju kvalitet, bezbednost i održivost naših operacija."
              : "As an industry leader, we hold certifications that guarantee the quality, safety, and sustainability of our operations."}
          </h3>
          <p className="mt-8">
            {srb
              ? "Naše preduzeće je posvećeno pružanju vrhunskih usluga drumskog transporta rasutih materijala pomoću silo cisterni, što potvrđujemo usklađenošću sa najvišim međunarodnim standardima."
              : "Our commitment to quality and safety is reflected in our ISO certification and SQAS assessment, ensuring safety, quality, and sustainability in the chemical logistics chain."}
          </p>
          <p className="mt-4">
            {srb
              ? "Kroz članstvo u organizacijama CEFIC i ECTA, pratimo najbolje prakse i inovacije u industriji. Pored toga, pridržavamo se GMP+ standarda za obezbeđivanje sigurnosti u transportu hrane i hrane za životinje. "
              : "Through membership in CEFIC and ECTA, we stay updated on industry best practices and innovations. Additionally, we adhere to GMP+ standards to ensure safety in the transport of food and animal feed."}
          </p>
        </div>
        <div className="font-light">
          <h3 className="font-raj font-bold text-2xl text-primary">
            {srb
              ? "Ekološka i društvena odgovornost"
              : "Environmental and social responsibility"}
          </h3>
          <p className="mt-8">
            {srb
              ? "Naša odgovornost prema životnoj sredini i društvenoj zajednici potvrđena je ocenama na EcoVadis platformi, kao i članstvom u inicijativi Operation Clean Sweep za smanjenje gubitka plastike u životnoj sredini. "
              : "Our commitment to environmental and social responsibility is demonstrated through our ratings on the EcoVadis platform and our membership in the Operation Clean Sweep initiative, which aims to reduce plastic waste in the environment. "}
          </p>
          <p className="mt-4">
            {srb
              ? "Svojim angažovanjem na evropskom nivou, doprinosimo i bezbednosti na putevima kroz pridržavanje principa European Road Safety Charter."
              : "Our engagement at the European level also contributes to road safety by adhering to the principles of the European Road Safety Charter."}
          </p>
        </div>
        <Suspense fallback={<Spinner />}>
          <QualityStandards srb={srb} />
        </Suspense>
        <div className="font-light text-secondary flex flex-col gap-4">
          <p>
            {srb
              ? "Naša trajna opredeljenost je doslednost u primeni naprednih metode za upravljanje efikasnošću, kvalitetom i sistemskim rešavanjem problema, što nam omogućava da proaktivno unapređujemo naše procese i usluge. "
              : "Our ongoing commitment is reflected in our consistent application of advanced methods for managing efficiency, quality, and systematic problem-solving. This approach enables us to proactively enhance our processes and services."}
          </p>
          <p>
            {srb
              ? "Naša sertifikacija prema ovim standardima nije samo obaveza i izraz naše posvećenosti neprekidnom unapređenju i pružanju najkvalitetnijih usluga našim klijentima, već deo naše strateške vizije usmerenja ka stalnom unapređenju, kako bi naši klijenti uvek dobili najkvalitetniju i najodgovorniju uslugu."
              : "Our certification to these standards not only demonstrates our dedication to continuous improvement and delivering top-quality services but also aligns with our strategic vision for ongoing enhancement, ensuring that our clients always receive the highest quality and most responsible service."}
          </p>
        </div>
      </div>
      <div className="mt-24 flex justify-center gap-5 lg:mt-36">
        <LinkBtn href={srb ? "/kontakt" : "/en/contact"} type="secondary">
          {srb ? "Kontakt" : "Contact"}
        </LinkBtn>
        <LinkBtn
          href={srb ? "/odrzivost" : "/en/sustainability"}
          type="primary"
        >
          {srb ? "Održivost" : "Sustainability"}
        </LinkBtn>
      </div>
    </>
  );
}

export default QualityText;
