import {
  BriefcaseIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

function WhyUs({ slo, srb }: { slo?: boolean; srb?: boolean }) {
  return (
    <div className="mt-10">
      <h3 className="text-center font-raj text-2xl font-bold text-primary">
        {slo
          ? "Zakaj izbrati nas?"
          : srb
            ? "Zašto izabrati nas?"
            : "Why choose us?"}
      </h3>
      <ul className="mt-8 flex flex-col gap-6 font-semibold text-primary md:flex-row md:gap-5">
        <li className="flex flex-col items-center gap-6 rounded-lg border px-7 py-5 shadow-xl md:w-1/4 md:px-2 md:py-4 md:text-center">
          <ChartBarIcon className="h-8 basis-8 text-accent" />
          <div className="text-center md:flex md:flex-col">
            <p className="md:flex md:basis-[72px] md:items-center md:justify-center">
              {slo
                ? "Vrhunska tehnologija"
                : srb
                  ? "Vrhunska tehnologija"
                  : "Top technology"}
            </p>
            <p className="mt-8 font-normal md:mt-0">
              {slo
                ? "Naša flota silo priklopnikov izpolnjuje najvišje zahteve glede kakovosti. Flota tovornjakov EURO 6 zagotavlja zanesljivost na oddaljenih destinacijah."
                : srb
                  ? "Naša flota silo poluprikolica ispunjava najviše zahteve kvaliteta. Flota EURO 6 kamiona obezbeđuje pouzdanost na udaljenim destinacijama."
                  : "Our fleet of silo semi-trailers meets highest demands of quality. Fleet of EURO 6 trucks ensures reliability on distant destinations."}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center gap-6 rounded-lg border px-7 py-5 shadow-xl md:w-1/4 md:gap-6 md:px-2 md:py-4 md:text-center">
          <ComputerDesktopIcon className="basis-8 text-accent" />
          <div className="text-center md:flex md:flex-col">
            <p className="md:flex md:basis-[72px] md:items-center md:justify-center">
              {slo
                ? "Integrirane programske rešitve"
                : srb
                  ? "Integrisana softverska rešenja"
                  : "Integrated Software Solutions"}
            </p>
            <p className="mt-8 font-normal md:mt-0">
              {slo
                ? "Naša flota je pod 24/7 GPS nadzorom, ki zagotavlja informacije o lokaciji z vitalnimi podatki o stanju vozila ter omogoča komunikacijo z vozniki."
                : srb
                  ? "Naša flota je pod 24/7 GPS nadzorom koji obezbeđuje informacije o lokaciji sa vitalnim podacima o stanju vozila i obezbeđuje komunikaciju sa vozačkim ekipama."
                  : "Our fleet is under 24/7 GPS surveillance which provides location information with vital data of vehicle condition, and ensures communication with driving crews."}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center gap-6 rounded-lg border px-7 py-5 shadow-xl md:w-1/4 md:gap-6 md:px-2 md:py-4 md:text-center">
          <WrenchScrewdriverIcon className="h-8 basis-8 text-accent" />
          <div className="text-center md:flex md:flex-col">
            <p className="md:flex md:basis-[72px] md:items-center md:justify-center">
              {slo
                ? "Potrjena kakovost"
                : srb
                  ? "Potvđen kvaliteta"
                  : "Confirmed Quality"}
            </p>
            <p className="mt-8 font-normal md:mt-0">
              {slo
                ? "Imamo certifikate IMS sistema kakovosti v kemični industriji (SQAS), prehrambni industriji (HACCP) in industriji krme (GMP+B.4)."
                : srb
                  ? "Posedujemo IMS specifične sertifikate kvaliteta u hemijskoj industriji (SQAS), prehrambenoj industriji (HACCP) i industriji stočne hrane (GMP+B.4)."
                  : "We own IMS stem specific certificates of quality in chemical industry (SQAS), food industry (HACCP) and feed industry (GMP+B.4)."}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center gap-6 rounded-lg border px-7 py-5 shadow-xl md:w-1/4 md:gap-6 md:px-2 md:py-4 md:text-center">
          <BriefcaseIcon className="h-8 basis-8 text-accent" />
          <div className="text-center md:flex md:flex-col">
            <p className="md:flex md:basis-[72px] md:items-center md:justify-center">
              {slo
                ? "Izkušeni in usposobljeni vozniki"
                : srb
                  ? "Iskusni i obučeni vozači"
                  : "Experienced and Trained Driving Crews"}
            </p>
            <p className="mt-8 font-normal md:mt-0">
              {slo
                ? "Izkušeno in usposobljeno osebje skupaj z BBS usposobljeno ekipo zagotavlja varno storitev in ohranja integriteto prepeljanega tovora."
                : srb
                  ? "Iskusno i obučeno osoblje, zajedno sa BBS obučenom posadom, obezbeđuje bezbedan servis i očuvanje integriteta transportovane robe."
                  : "Experienced and trained staff, along with BBS trained crews ensures safe service and preservation of integrity of transported goods."}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WhyUs;
