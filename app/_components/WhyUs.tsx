import {
  BriefcaseIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

function WhyUs({ slo, srb }: { slo?: boolean; srb?: boolean }) {
  return (
    <div className="mt-10">
      <h3 className="font-raj font-bold text-primary text-2xl text-center">
        {slo
          ? "Zakaj izbrati nas?"
          : srb
          ? "Zašto izabrati nas?"
          : "Why choose us?"}
      </h3>
      <ul className="mt-8 font-semibold text-primary flex flex-col gap-6 md:flex-row md:gap-5">
        <li className="py-5 px-7 border rounded-lg shadow-xl flex items-center gap-6 flex-col md:text-center md:w-1/4 md:py-4 md:px-2">
          <ChartBarIcon className="text-accent h-8 basis-8" />
          <div className="text-center md:flex md:flex-col">
            <p className="md:basis-[72px] md:flex md:items-center md:justify-center">
              {slo
                ? "Vrhunska tehnologija"
                : srb
                ? "Vrhunska tehnologija"
                : "Top technology"}
            </p>
            <p className="mt-8 font-normal md:mt-0">
              {slo
                ? "Naša flota polprikolic s silosi izpolnjuje najvišje zahteve glede kakovosti. Flota tovornjakov EURO 6 zagotavlja zanesljivost na oddaljenih destinacijah."
                : srb
                ? "Naša flota poluprikolica silosa ispunjava najviše zahteve kvaliteta. Flota EURO 6 kamiona obezbeđuje pouzdanost na udaljenim destinacijama."
                : "Our fleet of silo semi-trailers meets highest demands of quality. Fleet of EURO 6 trucks ensures reliability on distant destinations."}
            </p>
          </div>
        </li>
        <li className="py-5 px-7 border rounded-lg shadow-xl flex items-center gap-6 flex-col md:gap-6 md:text-center md:w-1/4 md:py-4 md:px-2">
          <ComputerDesktopIcon className="text-accent basis-8" />
          <div className="text-center md:flex md:flex-col">
            <p className="md:basis-[72px] md:flex md:items-center md:justify-center">
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
        <li className="py-5 px-7 border rounded-lg shadow-xl flex items-center gap-6 flex-col md:gap-6 md:text-center md:w-1/4 md:py-4 md:px-2">
          <WrenchScrewdriverIcon className="text-accent h-8 basis-8" />
          <div className="text-center md:flex md:flex-col">
            <p className="md:basis-[72px] md:flex md:items-center md:justify-center">
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
        <li className="py-5 px-7 border rounded-lg shadow-xl flex items-center gap-6 flex-col md:gap-6 md:text-center md:w-1/4 md:py-4 md:px-2">
          <BriefcaseIcon className="text-accent h-8 basis-8" />
          <div className="text-center md:flex md:flex-col">
            <p className="md:basis-[72px] md:flex md:items-center md:justify-center">
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
