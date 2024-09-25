import ServiceCard from "./ServiceCard";
import ServiceCardLong from "./ServiceCardLong";

function Services() {
  return (
    <div className="mt-12 flex flex-col gap-10 overflow-x-hidden md:grid md:grid-cols-2 lg:gap-14 max-w-4xl mx-auto">
      <ServiceCard
        title="Silo transport"
        img="/silo-transport.jpg"
        description="Potpuno specijalizovana flota, kvalifikovano osoblje, savremena informaciona tehnologija i tehnički besprekoran vozni park obezbeđuju vrhunski kvalitet usluga."
      >
        <p>
          Naše kiper prikolice silosa sa minimalnom zapreminom od{" "}
          <span className="font-bold">60 kubnih metara</span> pogodni su za
          transport granulata i praha kao što su:
        </p>
        <ul className="list-inside list-disc mt-4">
          <li>
            <span className="font-bold">Polietlien </span>(LDPE, MDPE, HDPE,
            PE…)
          </li>
          <li>
            <span className="font-bold">Polipropilen </span>(homopolimeri and
            kopolimeri)
          </li>
          <li>
            <span className="font-bold">
              Sulfat za industriju deterdženata{" "}
            </span>
            (natrijum sulfat, sulfat monohidrat…)
          </li>
          <li>
            <span className="font-bold">
              Karbonat za industriju deterdženata, stakla{" "}
            </span>
            (kalcijum karbonat, natrijum karbonat, natrijum bikarbonat…)
          </li>
          <li>
            <span className="font-bold">Komponente hrane za životinje </span>
            (žitarice, krupica, sačma, proteinski koncentrati, monokalcijum
            fosfat…)
          </li>
          <li>
            <span className="font-bold">Hrana za ljude </span>(brašno, šećer,
            soli, skrob, žitarice, durum krupica…)
          </li>
          <li>
            <span className="font-bold">Mineral </span>(kaolin, feldspat,
            bentonit, perlit…)
          </li>
        </ul>
      </ServiceCard>
      <ServiceCard
        img="/silo-transport.jpg"
        title="Optimizacija lanca snadbevanja"
        description="Optimizacija Vašeg lanca vrednosti povećanjem vaše fleksibilnosti, smanjenjem vaših troškova, činjenjem procesa transparentnijim i bržim čime Vam obezbeđujemo dodatno vreme za vašu osnovnu delatnost."
      >
        <div className="mt-16 flex flex-col gap-4">
          <p>
            Analiziramo postojeće procese kako bismo{" "}
            <span className="font-bold">
              kupcima ponudili napredna i inovativna rešenja
            </span>{" "}
            za unapređenje lanca snabdevanja.
          </p>
          <p>
            Naša tehnološka infrastruktura i{" "}
            <span className="font-bold">ostvareni nivo</span> transportnih
            usluga se uvek stavlja na raspolaganje kupcima kao podrška razvoju i
            kvalitetu njihovog lanca snabdevanja.
          </p>
        </div>
      </ServiceCard>
      <ServiceCardLong srb />
      <ServiceCard
        img="/vakuum-silo.png"
        description="Vakuum silos stoji na Vašem raspolaganju za usisno čišćenje, presipanje i sušenje svih tipova suvih rasutih materijala bilo gde u Evropi."
        title="Vacuum Silo"
      >
        <div className="mt-16 flex flex-col gap-4">
          <p>
            U poslu koji je složen kao što je transport suvih, rasutih
            materijala velika je verovatnoća da će doći do incidenata i nezgoda.
          </p>
          <p>
            Prosipanje materijala, mešanje i kontaminacija, kao i saobraćajne
            nesreće su neželjeni događaji u kojima sada možemo da vam{" "}
            <span className="font-bold">ponudimo pomoć </span>
            kako bi umanjili njihov uticaj na vaše poslovanje.
          </p>
        </div>
      </ServiceCard>
    </div>
  );
}

export default Services;
