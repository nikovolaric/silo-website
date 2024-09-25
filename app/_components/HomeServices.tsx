import HomeServiceCard from "./HomeServiceCard";
import LinkBtn from "./LinkBtn";

function HomeServices({ srb }: { srb?: boolean }) {
  return (
    <>
      <div className="flex flex-col gap-24 mt-14 lg:mt-24">
        <HomeServiceCard
          title="Silo transport"
          img="/vakuum-silo.png"
          left={true}
        >
          {srb
            ? "Potpuno specijalizovan vozni park, kvalifikovano osoblje, savremena informaciona tehnologija i tehnički besprekoran vozni park obezbeđuju vrhunski kvalitet usluge."
            : "Completely specialized fleet, qualified staff, modern information technology and technically impeccable fleet ensure top quality service delivery."}
        </HomeServiceCard>
        <HomeServiceCard
          title={
            srb ? "Optimizacija lanca snadbevanja" : "Supply chain optimization"
          }
          img="/vakuum-silo.png"
          left={false}
        >
          {srb
            ? "Optimizujemo vaš lanac snabdevanja povećavajući našu fleksibilnost, smanjujući vaše troškove, čineći procese transparentnijim i bržim, dajući vam više vremena da se fokusirate na svoje osnovne aktivnosti."
            : "We optimize your supply chain by increasing our flexibility, lowering your costs, making the processes more transparent and faster, giving you more time to focus on your core activities."}
        </HomeServiceCard>
        <HomeServiceCard
          title={srb ? "Konsluting" : "Consulting"}
          img="/vakuum-silo.png"
          left={true}
        >
          {srb
            ? "Možemo vas savetovati o rešenjima koja će rešiti vaše trenutne i buduće zahteve."
            : "We can advise you on solutions that will resolve your current and future requirements."}
        </HomeServiceCard>
        <HomeServiceCard
          title="Vakuum silo"
          img="/vakuum-silo.png"
          left={false}
        >
          {srb
            ? "Naši novi vakum silosi su vam na raspolaganju za usisno čišćenje, prenošenje i feniranje svih vrsta suvih rasutih materijala bilo gde u Evropi."
            : "Our new Vacuum silos is at your disposal for suction cleaning, transferring and blow-drying of all types of dry bulk materials anywhere in Europe."}
        </HomeServiceCard>
      </div>
      <div className="text-center mt-20 md:mt-24">
        <LinkBtn type="primary" href="/usluge">
          {srb ? "Više o uslugama" : "More about services"}
        </LinkBtn>
      </div>
    </>
  );
}

export default HomeServices;
