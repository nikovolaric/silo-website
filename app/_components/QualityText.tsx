import { Suspense } from "react";
import QualityStandards from "./QualityStandards";
import Spinner from "./Spinner";
import LinkBtn from "./LinkBtn";

function QualityText({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <>
      <div className="mt-12 text-secondary flex flex-col gap-16 md:mt-20 lg:gap-20 xl:w-5/6 mx-auto">
        <div className="font-light">
          <h3 className="font-raj font-bold text-2xl text-primary">
            {srb
              ? "Kao jedan od lidera u industriji, posedujemo sertifikate koji garantuju kvalitet, bezbednost i održivost naših operacija."
              : slo
              ? "Kot vodilni v industriji imamo certifikate, ki zagotavljajo kakovost, varnost in trajnost naših operacij."
              : "As an industry leader, we hold certifications that guarantee the quality, safety, and sustainability of our operations."}
          </h3>
          <p className="mt-8">
            {srb
              ? "Naše preduzeće je posvećeno pružanju vrhunskih usluga drumskog transporta rasutih materijala pomoću silo cisterni, što potvrđujemo usklađenošću sa najvišim međunarodnim standardima."
              : slo
              ? "Naše podjetje je predano zagotavljanju vrhunskih storitev cestnega transporta prostih materialov s pomočjo silo cistern, kar potrjujemo z usklajenostjo z najvišjimi mednarodnimi standardi."
              : "Our commitment to quality and safety is reflected in our ISO certification and SQAS assessment, ensuring safety, quality, and sustainability in the chemical logistics chain."}
          </p>
          <p className="mt-4">
            {srb
              ? "Kroz članstvo u organizacijama CEFIC i ECTA, pratimo najbolje prakse i inovacije u industriji. Pored toga, pridržavamo se GMP+ standarda za obezbeđivanje sigurnosti u transportu hrane i hrane za životinje."
              : slo
              ? "S članstvom v organizacijah CEFIC in ECTA sledimo najboljšim praksam in inovacijam v industriji. Poleg tega se držimo GMP+ standardov za zagotavljanje varnosti pri transportu hrane in krme za živali."
              : "Through membership in CEFIC and ECTA, we stay updated on industry best practices and innovations. Additionally, we adhere to GMP+ standards to ensure safety in the transport of food and animal feed."}
          </p>
        </div>
        <div className="font-light">
          <h3 className="font-raj font-bold text-2xl text-primary">
            {srb
              ? "Ekološka i društvena odgovornost"
              : slo
              ? "Okoljska in družbena odgovornost"
              : "Environmental and social responsibility"}
          </h3>
          <p className="mt-8">
            {srb
              ? "Naša odgovornost prema životnoj sredini i društvenoj zajednici potvrđena je ocenama na EcoVadis platformi, kao i članstvom u inicijativi Operation Clean Sweep za smanjenje gubitka plastike u životnoj sredini."
              : slo
              ? "Naša odgovornost do okolja in družbene skupnosti je potrjena z ocenami na platformi EcoVadis ter s članstvom v iniciativi Operation Clean Sweep, ki si prizadeva zmanjšati izgubo plastike v okolju."
              : "Our commitment to environmental and social responsibility is demonstrated through our ratings on the EcoVadis platform and our membership in the Operation Clean Sweep initiative, which aims to reduce plastic waste in the environment."}
          </p>
          <p className="mt-4">
            {srb
              ? "Svojim angažovanjem na evropskom nivou, doprinosimo i bezbednosti na putevima kroz pridržavanje principa European Road Safety Charter."
              : slo
              ? "S svojim angažmajem na evropski ravni prispevamo k varnosti na cestah z upoštevanjem načel Evropske listine o varnosti na cestah."
              : "Our engagement at the European level also contributes to road safety by adhering to the principles of the European Road Safety Charter."}
          </p>
        </div>
        <Suspense fallback={<Spinner />}>
          <QualityStandards srb={srb} slo={slo} />
        </Suspense>
        <div className="font-light text-secondary flex flex-col gap-4">
          <p>
            {srb
              ? "Naša trajna opredeljenost je doslednost u primeni naprednih metode za upravljanje efikasnošću, kvalitetom i sistemskim rešavanjem problema, što nam omogućava da proaktivno unapređujemo naše procese i usluge."
              : slo
              ? "Naša trajna predanost se odraža v dosledni uporabi naprednih metod za upravljanje učinkovitosti, kakovosti in sistemskega reševanja problemov. Ta pristop nam omogoča proaktivno izboljševanje naših procesov in storitev."
              : "Our ongoing commitment is reflected in our consistent application of advanced methods for managing efficiency, quality, and systematic problem-solving. This approach enables us to proactively enhance our processes and services."}
          </p>
          <p>
            {srb
              ? "Naša sertifikacija prema ovim standardima nije samo obaveza i izraz naše posvećenosti neprekidnom unapređenju i pružanju najkvalitetnijih usluga našim klijentima, već deo naše strateške vizije usmerenja ka stalnom unapređenju, kako bi naši klijenti uvek dobili najkvalitetniju i najodgovorniju uslugu."
              : slo
              ? "Naša certifikacija v skladu s temi standardi ni le obveza in izraz naše predanosti nenehnemu izboljševanju in zagotavljanju najkakovostnejših storitev našim strankam, temveč del naše strateške vizije, usmerjene k stalnemu izboljšanju, da naši naročniki vedno prejmejo najkakovostnejše in najbolj odgovorne storitve."
              : "Our certification to these standards not only demonstrates our dedication to continuous improvement and delivering top-quality services but also aligns with our strategic vision for ongoing enhancement, ensuring that our clients always receive the highest quality and most responsible service."}
          </p>
        </div>
      </div>
      <div className="mt-24 flex justify-center gap-5 lg:mt-36">
        <LinkBtn
          href={srb ? "/rs/kontakt" : slo ? "/si/kontakt" : "/contact"}
          type="secondary"
        >
          {srb ? "Kontakt" : slo ? "Kontakt" : "Contact"}
        </LinkBtn>
        <LinkBtn
          href={
            srb ? "/rs/odrzivost" : slo ? "/si/trajnost" : "/sustainability"
          }
          type="primary"
        >
          {srb ? "Održivost" : slo ? "Trajnost" : "Sustainability"}
        </LinkBtn>
      </div>
    </>
  );
}

export default QualityText;
