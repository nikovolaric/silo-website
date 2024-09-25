import HomeServiceCard from "./HomeServiceCard";
import LinkBtn from "../_components/LinkBtn";

function HomeServices() {
  return (
    <>
      <div className="flex flex-col gap-24 mt-14 lg:mt-24">
        <HomeServiceCard
          title="Silo transport"
          img="/silo-transport.jpg"
          left={true}
        >
          Completely specialized fleet, qualified staff, modern information
          technology and technically impeccable fleet ensure top quality service
          delivery.
        </HomeServiceCard>
        <HomeServiceCard
          title="Vakuum silo"
          img="/vakuum-silo.png"
          left={false}
        >
          Our new Vacuum silos is at your disposal for suction cleaning,
          transferring and blow-drying of all types of dry bulk materials
          anywhere in Europe.
        </HomeServiceCard>
      </div>
      <div className="text-center mt-20 md:mt-24">
        <LinkBtn type="primary" href="/en/services">
          More about our services
        </LinkBtn>
      </div>
    </>
  );
}

export default HomeServices;
