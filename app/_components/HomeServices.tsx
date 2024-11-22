import HomeServiceCard from "./HomeServiceCard";
import LinkBtn from "./LinkBtn";

function HomeServices({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  return (
    <>
      <div className="flex flex-col gap-24 mt-14 lg:mt-24">
        <HomeServiceCard
          title={
            slo ? "Prevoz silosa" : srb ? "Silo transport" : "Silo transport"
          }
          img="/silo-transport.jpg"
          left={true}
        >
          {slo
            ? "Popolnoma specializiran vozni park, kvalificirano osebje, sodobna informacijska tehnologija in tehnično brezhiben vozni park zagotavljajo vrhunsko kakovost storitev."
            : srb
            ? "Potpuno specijalizovan vozni park, kvalifikovano osoblje, savremena informaciona tehnologija i tehnički besprekoran vozni park obezbeđuju vrhunski kvalitet usluge."
            : "Completely specialized fleet, qualified staff, modern information technology and technically impeccable fleet ensure top quality service delivery."}
        </HomeServiceCard>
        <HomeServiceCard
          title={
            slo
              ? "Optimizacija dobavne verige"
              : srb
              ? "Optimizacija lanca snadbevanja"
              : "Supply chain optimization"
          }
          img="/optimization.jpg"
          left={false}
        >
          {slo
            ? "Optimiziramo vašo dobavno verigo z večjo fleksibilnostjo, zniževanjem stroškov, večjo transparentnostjo in hitrostjo procesov, kar vam omogoča več časa za osredotočanje na vaše ključne aktivnosti."
            : srb
            ? "Optimizujemo vaš lanac snabdevanja povećavajući našu fleksibilnost, smanjujući vaše troškove, čineći procese transparentnijim i bržim, dajući vam više vremena da se fokusirate na svoje osnovne aktivnosti."
            : "We optimize your supply chain by increasing our flexibility, lowering your costs, making the processes more transparent and faster, giving you more time to focus on your core activities."}
        </HomeServiceCard>
        <HomeServiceCard
          title={slo ? "Svetovanje" : srb ? "Konsluting" : "Consulting"}
          img="/consulting.jpg"
          left={true}
        >
          {slo
            ? "Svetujemo vam o rešitvah, ki bodo zadovoljile vaše trenutne in prihodnje zahteve."
            : srb
            ? "Možemo vas savetovati o rešenjima koja će rešiti vaše trenutne i buduće zahteve."
            : "We can advise you on solutions that will resolve your current and future requirements."}
        </HomeServiceCard>
        <HomeServiceCard
          title={slo ? "Vakuum silos" : srb ? "Vakuum silo" : "Vacuum silo"}
          img="/vakuum-silo.jpg"
          left={false}
        >
          {slo
            ? "Naši novi vakuumski silosi so vam na voljo za sesalno čiščenje, prenos in sušenje vseh vrst suhih razsutih materialov kjerkoli v Evropi."
            : srb
            ? "Naši novi vakum silosi su vam na raspolaganju za usisno čišćenje, prenošenje i feniranje svih vrsta suvih rasutih materijala bilo gde u Evropi."
            : "Our new Vacuum silos is at your disposal for suction cleaning, transferring and blow-drying of all types of dry bulk materials anywhere in Europe."}
        </HomeServiceCard>
      </div>
      <div className="text-center mt-20 md:mt-24">
        <LinkBtn
          type="primary"
          href={srb ? "/rs/usluge" : slo ? "/si/storitve" : "/services"}
        >
          {slo
            ? "Več o storitvah"
            : srb
            ? "Više o uslugama"
            : "More about services"}
        </LinkBtn>
      </div>
    </>
  );
}

export default HomeServices;
