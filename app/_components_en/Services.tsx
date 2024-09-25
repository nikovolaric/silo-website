import ServiceCard from "@/app/_components/ServiceCard";
import ServiceCardLong from "@/app/_components/ServiceCardLong";

function Services() {
  return (
    <div className="mt-12 flex flex-col gap-10 overflow-x-hidden md:grid md:grid-cols-2 max-w-5xl mx-auto">
      <ServiceCard
        title="Silo transport"
        img="/silo-transport.jpg"
        description="Completely specialized fleet, qualified staff, modern information technology and technically impeccable fleet ensure top quality service delivery."
      >
        <p>
          Our tipping silo trailers with minimal volume of{" "}
          <span className="font-bold">60 cubic meters</span> are suitable for
          road transport of granulates and powders such as:
        </p>
        <ul className="list-inside list-disc mt-4">
          <li>
            <span className="font-bold">Polyethylene </span>(LDPE, MDPE, HDPE,
            PE…)
          </li>
          <li>
            <span className="font-bold">Polypropylene </span>(homopolymers and
            copolymers)
          </li>
          <li>
            <span className="font-bold">Sulfate for detergent industry </span>
            (sodium sulfate, sulfate monohydrate)
          </li>
          <li>
            <span className="font-bold">
              Carbonate for glass, detergent, feed industry{" "}
            </span>
            (calcium carbonate, sodium carbonate, sodium bicarbonate…)
          </li>
          <li>
            <span className="font-bold">Feed components </span>(grain, meal,
            vegetable protein concentrates, monocalcium phosphate…)
          </li>
          <li>
            <span className="font-bold">Food </span>(cereals, flour, starch,
            sugar, salt, durum wheat, grain…)
          </li>
          <li>
            <span className="font-bold">Minerals </span>(kaolin, feldspar,
            bentonite, perlite…)
          </li>
        </ul>
      </ServiceCard>
      <ServiceCard
        img="/silo-transport.jpg"
        title="Supply chain optimization"
        description="We optimize your supply chain by increasing our flexibility, lowering your costs, making the processes more transparent and faster, giving you more time to focus on your core activities."
      >
        <div className="mt-16 flex flex-col gap-4">
          <p>
            We analyze existing processes in order{" "}
            <span className="font-bold">
              to provide advanced and innovative solutions
            </span>{" "}
            for supply chain optimization.
          </p>
          <p>
            Our technological infrastructure and{" "}
            <span className="font-bold">achieved level of quality</span> of
            transport services is always provided to our customers as a support
            of development and quality of their supply chain.
          </p>
        </div>
      </ServiceCard>
      <ServiceCardLong srb={false} />
      <ServiceCard
        img="/vakuum-silo.png"
        description="Our Vacuum silos is at your disposal for suction cleaning, transferring and blow-drying of all types of dry bulk materials anywhere in Europe."
        title="Vacuum Silo"
      >
        <div className="flex flex-col gap-4">
          <p>
            As complex as dry bulk logistic is, incidents and accidents will
            happen.
          </p>
          <p>
            Spillages, material mixing and contamination, and road accidents are
            unwanted events and we want to offer you our{" "}
            <span>help in minimizing</span>
            effects on your business.
          </p>
          <p>
            From now on our <span className="font-bold">new Vacuum silos</span>{" "}
            is at your disposal for suction cleaning, transferring and
            blow-drying of all types of dry bulk materials anywhere in Europe.
          </p>
        </div>
      </ServiceCard>
    </div>
  );
}

export default Services;
