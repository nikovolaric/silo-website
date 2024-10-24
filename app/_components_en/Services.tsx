import ServiceCard from "@/app/_components/ServiceCard";

function Services() {
  return (
    <div className="mt-12 flex flex-col gap-10">
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
        img="/optimization.jpg"
        title="Supply chain optimization"
        description="We optimize your supply chain by increasing our flexibility, lowering your costs, making the processes more transparent and faster, giving you more time to focus on your core activities."
        left
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
      <ServiceCard
        img="/consulting.jpg"
        title="Consulting"
        description="If you are looking to enhance your production technology, expand or optimize capacities by transitioning from floor storage to silo storage, you can rely on our expertise for tailored solutions."
      >
        <div className="text-secondary">
          <p>Modern silos offer significant advantages:</p>
          <ul className="mt-4 font-bold list-disc list-inside">
            <li>
              They require less space for construction and save on land costs.
            </li>
            <li>They provide a longer shelf life for stored goods.</li>
            <li>
              Built-in systems for protection against bacteria and insects,
              preventing grain losses
              <span className="font-normal">
                {" "}
                (in traditional storage, these losses account for 2-6% of the
                total stored quantity)
              </span>
            </li>
            <li>
              Temperature control systems
              <span className="font-normal">
                prevent unwanted changes in stored materials caused by
                temperature/humidity variations.
              </span>
            </li>
            <li>
              They do not require additional inventory management systems.
            </li>
            <li>
              They require less labor
              <span className="font-normal">
                {" "}
                (compared to up to 1:10 in conventional warehouses).
              </span>
            </li>
            <li>
              They reduce product losses
              <span className="font-normal">
                {" "}
                related to human error as well as other storage systems in
                traditional warehouses, following the ALL IN-ALL OUT principle.
              </span>
            </li>
          </ul>
        </div>
      </ServiceCard>
      <ServiceCard
        img="/vakuum-silo.png"
        description="Our Vacuum silos is at your disposal for suction cleaning, transferring and blow-drying of all types of dry bulk materials anywhere in Europe."
        title="Vacuum Silo"
        left
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
