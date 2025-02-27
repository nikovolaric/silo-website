import { cookies } from "next/headers";
import CookieManage from "./CookieManage";

async function CookieText({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const cookieStore = await cookies();

  const ga = cookieStore.get("analyticsConsent")?.value;
  const tp = cookieStore.get("thirdPartyConsent")?.value;
  return (
    <div className="flex flex-col gap-16">
      <p>
        {srb
          ? "Ova politika kolačića objašnjava kako Silo Jeličić, d.o.o. koristi kolačiće i slične tehnologije za pružanje boljeg korisničkog iskustva. Prihvatanjem kolačića, saglasni ste sa njihovom upotrebom kako je opisano u ovoj politici."
          : slo
            ? "Ta politika piškotkov pojasnjuje, kako Silo Jeličić, d.o.o. uporablja piškotke in podobne tehnologije za zagotavljanje boljše uporabniške izkušnje. S sprejetjem piškotkov se strinjate z njihovo uporabo, kot je opisano v tej politiki."
            : "This cookie policy explains how Silo Jelicic, d.o.o. uses cookies and similar technologies to provide a better user experience. By accepting the cookies, you agree to the use of cookies as described in this policy."}
      </p>
      <div className="flex flex-col gap-8">
        <h4 className="font-raj text-2xl font-semibold text-primary">
          {srb
            ? "Šta su kolačići?"
            : slo
              ? "Kaj so piškotki?"
              : "What are Cookies?"}
        </h4>
        <p>
          {srb
            ? "Kolačići su male tekstualne datoteke koje se čuvaju na vašem uređaju (računaru, pametnom telefonu, tabletu) kada posetite veb sajt."
            : slo
              ? "Piškotki so majhne besedilne datoteke, ki so shranjene na vaši napravi (računalniku, pametnem telefonu, tablici), ko obiščete spletno stran."
              : "Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website."}
        </p>
        <p>
          {srb
            ? "Oni nam pomažu da poboljšamo vaše iskustvo pregledanja pamćenjem vaših postavki i aktivnosti. Kolačići mogu biti sesijski kolačići (brišu se kada zatvorite pregledač) ili trajni kolačići (ostaju na vašem uređaju dok ne isteknu ili ih sami ne obrišete)."
            : slo
              ? "Pomagajo nam izboljšati vaše izkušnje brskanja z zapomnitvijo vaših nastavitev in aktivnosti. Piškotki so lahko sejni piškotki (izbrišejo se, ko zaprete brskalnik) ali trajni piškotki (ostanejo na vaši napravi, dokler ne potečejo ali jih sami ne izbrišete)."
              : "They help us improve your browsing experience by remembering your settings and activities. Cookies can be session cookies (deleted when you close the browser) or persistent cookies (remain on your device until they expire or you delete them)."}
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h4 className="font-raj text-2xl font-semibold text-primary">
          {srb
            ? "Vrste kolačića koje koristimo:"
            : slo
              ? "Vrste piškotkov, ki jih uporabljamo:"
              : "Types of Cookies we use:"}
        </h4>
        <p className="font-semibold">
          {srb
            ? "1. Funkcionalni kolačići"
            : slo
              ? "1. Funkcionalni piškotki"
              : "1. Functional Cookies"}
        </p>
        <p>
          {srb
            ? "Oni nam pomažu da poboljšamo vaše iskustvo pregledanja pamćenjem vaših postavki i aktivnosti. Kolačići mogu biti sesijski kolačići (brišu se kada zatvorite pregledač) ili trajni kolačići (ostaju na vašem uređaju dok ne isteknu ili ih sami ne obrišete)."
            : slo
              ? "Pomagajo nam izboljšati vaše izkušnje brskanja z zapomnitvijo vaših nastavitev in aktivnosti. Piškotki so lahko sejni piškotki (izbrišejo se, ko zaprete brskalnik) ali trajni piškotki (ostanejo na vaši napravi, dokler ne potečejo ali jih sami ne izbrišete)."
              : "They help us improve your browsing experience by remembering your settings and activities. Cookies can be session cookies (deleted when you close the browser) or persistent cookies (remain on your device until they expire or you delete them)."}
        </p>
        <p className="font-semibold">
          {srb
            ? "2. Analitički i kolačići performansi"
            : slo
              ? "2. Analitični in performančni piškotki"
              : "2. Analytics and Performance Cookies"}
        </p>
        <p>
          {srb
            ? "Koristimo Google Analytics za prikupljanje anonimnih informacija o tome kako posetioci koriste naš veb sajt. Ovi podaci nam pomažu da razumemo ponašanje korisnika i poboljšamo performanse i korisničko iskustvo sajta."
            : slo
              ? "Uporabljamo Google Analytics za zbiranje anonimnih informacij o tem, kako obiskovalci uporabljajo našo spletno stran. Ti podatki nam pomagajo razumeti vedenje uporabnikov in izboljšati zmogljivost ter uporabniško izkušnjo spletne strani."
              : "We use Google Analytics to collect anonymous information about how visitors use our website. This data helps us understand user behavior and improve the performance and user experience of the website."}
        </p>
        <ul className="list-inside list-disc [&_ul]:list-[revert]">
          <li>
            <span className="font-semibold">Google Analytics:</span>{" "}
            {srb
              ? "Prikupljamo statističke podatke o posetama sajta, kao što su broj posetilaca, posete stranicama i vreme provedeno na sajtu. Google Analytics koristi sledeće kolačiće:"
              : slo
                ? "Zbiramo statistične podatke o obiskih spletne strani, kot so število obiskovalcev, obiskane strani in čas, preživet na spletni strani. Google Analytics uporablja naslednje piškotke:"
                : "We collect statistical data on website visits, such as the number of visitors, pages visited, and time spent on the website. Google Analytics uses the following cookies:"}
            <ul className="list-inside pl-4">
              <li>
                <span className="font-semibold">_ga:</span>
                {srb
                  ? "koristi se za razlikovanje korisnika. Trajanje: 2 godine."
                  : slo
                    ? "uporablja se za razlikovanje uporabnikov. Trajanje: 2 leti."
                    : "used to distinguish users. Duration: 2 years."}
              </li>
            </ul>
          </li>
        </ul>
        <p className="font-semibold">
          {srb
            ? "3. Kolačići trećih strana"
            : slo
              ? "3. Piškotki tretjih oseb"
              : "3. Third party cookies"}
        </p>
        <p>
          {srb
            ? "Naš veb sajt koristi usluge trećih strana, kao što je Google Maps, koje mogu postaviti kolačiće za čuvanje vaših preferencija i praćenje upotrebe."
            : slo
              ? "Naša spletna stran uporablja storitve tretjih oseb, kot je Google Maps, ki lahko namestijo piškotke za shranjevanje vaših nastavitev in sledenje uporabi."
              : "Our website uses third-party services such as Google Maps, which may install cookies to store your preferences and track usage."}
        </p>
        <ul className="list-inside list-disc [&_ul]:list-[revert]">
          <li>
            <span className="font-semibold">Google Maps:</span>{" "}
            {srb
              ? "Google Maps može koristiti kolačiće za čuvanje preferenci, kao što su postavke lokacije i funkcionalnosti mape."
              : slo
                ? "Google Maps lahko uporablja piškotke za shranjevanje nastavitev, kot so lokacijske nastavitve in funkcionalnosti zemljevida."
                : "Google Maps may use cookies to store preferences, such as location settings and map functionalities."}
            <ul className="list-inside pl-4">
              <li>
                <span className="font-semibold">_NID:</span>
                {srb
                  ? " koristi se za čuvanje korisničkih preferencija za Google usluge. Trajanje: 6 meseci."
                  : slo
                    ? " uporablja se za shranjevanje uporabniških nastavitev za Googlove storitve. Trajanje: 6 mesecev."
                    : " used to store user preferences for Google services. Duration: 6 months."}
              </li>
              <li>
                <span className="font-semibold">_CONSENT:</span>
                {srb
                  ? " koristi se za praćenje saglasnosti korisnika. Trajanje: trajno."
                  : slo
                    ? " uporablja se za sledenje privolitvi uporabnika. Trajanje: trajno."
                    : " used to track user consent. Duration: permanent."}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <CookieManage slo={slo} srb={srb} ga={ga} tp={tp} />
      <div className="flex flex-col gap-8">
        <h4 className="font-raj text-2xl font-semibold text-primary">
          {srb
            ? "Izmene u ovoj politici kolačića"
            : slo
              ? "Spremembe v tej politiki piškotkov"
              : "Changes to This Cookie Policy"}
        </h4>
        <p>
          {srb
            ? "Zadržavamo pravo da s vremena na vreme ažuriramo ovu politiku kolačića kako bi odražavala promene u našim praksama ili primenljivom zakonodavstvu. Preporučujemo da povremeno proveravate ovu stranicu za najnovije izmene. Datum poslednjeg ažuriranja biće naveden na dnu stranice."
            : slo
              ? "Pridržujemo si pravico, da občasno posodobimo to politiko piškotkov, da odraža spremembe v naših praksah ali veljavni zakonodaji. Priporočamo, da občasno preverite to stran za posodobitve. Datum zadnje posodobitve bo naveden na dnu strani."
              : "We reserve the right to update this cookie policy from time to time to reflect changes in our practices or applicable legislation. We recommend that you periodically check this page for updates. The date of the most recent update will be listed at the bottom of the page."}
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h4 className="font-raj text-2xl font-semibold text-primary">
          {srb ? "Kontakt" : slo ? "Kontakt" : "Contact"}
        </h4>
        <p>
          {srb
            ? "Ako imate bilo kakva pitanja u vezi sa našom upotrebom kolačića ili ovom politikom kolačića, kontaktirajte nas na info@silo-jelicic.rs."
            : slo
              ? "Če imate kakršna koli vprašanja glede naše uporabe piškotkov ali te politike piškotkov, nas kontaktirajte na info@silo-jelicic.rs."
              : "If you have any questions regarding our use of cookies or this cookie policy, please contact us at info@silo-jelicic.rs."}
        </p>
      </div>
      <p>
        {srb
          ? "Poslednje ažuriranje: "
          : slo
            ? "Nazadnje posodobljeno: "
            : "Last updated: "}
        01.10.2024
      </p>
    </div>
  );
}

export default CookieText;
