import ServiceCard from "./ServiceCard";

function Services({ slo }: { slo?: boolean }) {
  return (
    <div className="mt-12 flex flex-col gap-10">
      <ServiceCard
        title={slo ? "Silo transport" : "Silo transport"}
        img="/silo-transport.jpg"
        description={
          slo
            ? "Popolnoma specializirana flota, kvalificirano osebje, sodobna informacijska tehnologija in tehnično brezhiben vozni park zagotavljajo vrhunsko kakovost storitev."
            : "Potpuno specijalizovana flota, kvalifikovano osoblje, savremena informaciona tehnologija i tehnički besprekoran vozni park obezbeđuju vrhunski kvalitet usluga."
        }
      >
        <p>
          {slo
            ? "Naše kip silo cisterne s prostornino najmanj "
            : "Naše kip silo cisterne zapremine od minimum "}
          <span className="font-bold">
            {slo ? "60 kubičnih metrov" : "60 kubnih metara"}
          </span>{" "}
          {slo
            ? " so primerne za transport granulatov in praškov:"
            : "su podobne za prevoz granulata i prahova:"}
        </p>
        <ul className="mt-4 list-inside list-disc">
          <li>
            <span className="font-bold">
              {slo ? "Polietilen" : "Polietlien"}
            </span>{" "}
            (LDPE, MDPE, HDPE, PE…)
          </li>
          <li>
            <span className="font-bold">
              {slo ? "Polipropilen" : "Polipropilen"}
            </span>{" "}
            (homopolimeri in kopolimeri)
          </li>
          <li>
            <span className="font-bold">
              {slo
                ? "Sulfat za detergentno industrijo"
                : "Sulfat za industriju deterdženata"}
            </span>{" "}
            (natrijev sulfat, sulfat monohidrat…)
          </li>
          <li>
            <span className="font-bold">
              {slo
                ? "Kalcijev karbonat za stekleno industrijo"
                : "Karbonat za industriju deterdženata, stakla"}
            </span>{" "}
            (kalcij, natrijev karbonat, natrijev bikarbonat…)
          </li>
          <li>
            <span className="font-bold">
              {slo
                ? "Komponente hrane za živali"
                : "Komponente hrane za životinje"}
            </span>{" "}
            (žita, moka, proteini…)
          </li>
          <li>
            <span className="font-bold">
              {slo ? "Hrana za ljudi" : "Hrana za ljude"}
            </span>{" "}
            (moka, sladkor, sol, škrob, žita…)
          </li>
          <li>
            <span className="font-bold">{slo ? "Minerali" : "Mineral"}</span>{" "}
            (kaolin, feldspat, bentonit…)
          </li>
        </ul>
      </ServiceCard>
      <ServiceCard
        img="/optimization.jpg"
        title={
          slo
            ? "Optimizacija oskrbovalne verige"
            : "Optimizacija lanca snadbevanja"
        }
        description={
          slo
            ? "Optimizacija vaše verižne vrednosti s povečanjem vaše fleksibilnosti, zmanjšanje vaših stroškov, čine proces bolj transparenten in hitrejši ter vam zagotavlja dodatno čas za vašo osnovno dejavnost."
            : "Optimizacija Vašeg lanca vrednosti povećanjem vaše fleksibilnosti, smanjenjem vaših troškova, činjenjem procesa transparentnijim i bržim čime Vam obezbeđujemo dodatno vreme za vašu osnovnu delatnost."
        }
        left
      >
        <div className="flex flex-col gap-4">
          <p>
            {slo
              ? "Analiziramo obstoječe procese, da "
              : "Analiziramo postojeće procese kako bismo "}
            <span className="font-bold">
              {slo
                ? "kupcem ponudimo napredne in inovativne rešitve"
                : "kupcima ponudili napredna i inovativna rešenja"}
            </span>{" "}
            {slo
              ? "za izboljšanje oskrbovalne verige."
              : "za unapređenje lanca snabdevanja."}
          </p>
          <p>
            {slo
              ? "Naša tehnološka infrastruktura in"
              : "Naša tehnološka infrastruktura i"}{" "}
            <span className="font-bold">
              {slo ? "dosežen nivo" : "ostvareni nivo"}
            </span>{" "}
            {slo
              ? "prevoza so vedno na voljo kot podpora razvoju in kakovosti vašega oskrbovalne verige."
              : "transportnih usluga se uvek stavlja na raspolaganje kupcima kao podrška razvoju i kvalitetu njihovog lanca snabdevanja."}
          </p>
        </div>
      </ServiceCard>
      <ServiceCard
        img="/consulting.jpg"
        title={slo ? "Svetovanje" : "Konsalting"}
        description={
          slo
            ? "Če želite izboljšati svojo proizvodno tehnologijo, razširiti ali optimizirati zmogljivosti s prehodom s talnega skladišča na silosno skladiščenje, se lahko zanesete na našo strokovnost za rešitve po meri."
            : "Ako želite da unapredite svoju proizvodnu tehnologiju, proširite ili optimizujete kapacitete prelaskom sa podnog skladišta na skladište u silosima, možete se osloniti na našu stručnost za rešenja po meri."
        }
      >
        <div className="text-secondary">
          <p>
            {slo
              ? "Moderni silosi ponujajo pomembne prednosti:"
              : "Moderni silosi nude značajne prednosti:"}
          </p>
          <ul className="mt-4 list-inside list-disc font-bold">
            <li>
              {slo
                ? "Zahtevajo manj prostora, kar zmanjšuje stroške zemljišča"
                : "Zahtevaju manje prostora za izgradnju i štede na troškovima zemljišta"}
            </li>
            <li>
              {slo
                ? "Podaljšajo življenjsko dobo izdelkov"
                : "Pružaju duži vek trajanja uskladištene robe"}
            </li>
            <li>
              {slo
                ? "Ščitijo pred bakterijami, glivami in insekti ter tako zmanjšujejo izgube"
                : "Ugrađeni sistemi za zaštitu od bakterija i insekata sprečavajući gubitke žitarica"}
              <span className="font-normal">
                {" "}
                {slo
                  ? "(v klasičnih skladiščih te izgube znašajo 2–6 % skupne količine)"
                  : "(u klasičnim skladištima se na ove gubitke odnosi 2-6% ukupno uskladištenih količina)"}
              </span>
            </li>
            <li>
              {slo
                ? "Vključujejo sisteme za nadzor temperature,"
                : "Sistemi za kontrolu temperature"}{" "}
              <span className="font-normal">
                {slo
                  ? "ki preprečujejo kvarjenje zaradi nihanja temperature in vlage"
                  : "sprečavaju neželjene promene na uskladištenim materijalima nastale zbog varijacija u temperaturi/vlazi."}
              </span>
            </li>
            <li>
              {slo
                ? "Ne potrebujejo dodatnih zalog"
                : "Ne zahtevaju dodatne sisteme za upravljanje zalihama"}
            </li>
            <li>
              {slo ? "Zmanjšajo stroške dela" : "Zahtevaju manje radne snage"}
              <span className="font-normal">
                {" "}
                {slo
                  ? "(v primerjavi do 1:10 glede na klasična skladišča)"
                  : "(u odnosu do 1:10 prema konvencionalnim skladištima)"}
              </span>
            </li>
            <li>
              {slo ? "Zmanjšajo izgubo materiala" : "Umanjuju rastur robe"}
              <span className="font-normal">
                {" "}
                {slo
                  ? "zaradi človeških napak in neučinkovitosti, ki jih najdemo v tradicionalnih skladiščnih sistemih, zahvaljujoč sistemu ALL IN-ALL OUT"
                  : "vezan za ljudski faktor ali i za ostale skladišne sisteme u klasičnim skladištima, po principu ALL IN-ALL OUT"}
              </span>
            </li>
          </ul>
        </div>
      </ServiceCard>

      <ServiceCard
        img="/vakuum-silo.jpg"
        title={slo ? "Vakuum silos" : "Vacuum Silo"}
        description={
          slo
            ? "Vakuum silos vam je na voljo za čiščenje s sesanjem, prenos in sušenje vseh tipov suhih rasutih materialov kjerkoli v Evropi."
            : "Vakuum silos stoji na vašem raspolaganju za usisno čišćenje, presipanje i sušenje svih tipova suvih rasutih materijala bilo gde u Evropi."
        }
        left
      >
        <div className="flex flex-col gap-4">
          <p>
            {slo
              ? "V poslu, ki je tako kompleksen kot je transport suhih, rasutih materialov, je velika verjetnost za incidente in nezgode."
              : "U poslu koji je složen kao što je transport suvih, rasutih materijala velika je verovatnoća da će doći do incidenata i nezgoda."}
          </p>
          <p>
            {slo
              ? "Razsip materialov, mešanje in kontaminacija, kot tudi prometne nesreče, so neželji dogodki, pri katerih vam lahko ponudimo pomoč, da zmanjšamo njihov vpliv na vaše poslovanje."
              : "Prosipanje materijala, mešanje i kontaminacija, kao i saobraćajne nesreće su neželjeni događaji u kojima sada možemo da vam ponudimo pomoć kako bi umanjili njihov uticaj na vaše poslovanje."}
          </p>
        </div>
      </ServiceCard>
    </div>
  );
}

export default Services;
