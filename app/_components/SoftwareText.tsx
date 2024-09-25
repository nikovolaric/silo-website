function SoftwareText({ srb }: { srb?: boolean }) {
  return (
    <div className="mt-10 md:mt-20 flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-x-5">
      <div className="font-light text-secondary flex flex-col gap-6 md:col-span-2">
        <h3 className="font-raj font-bold text-2xl text-primary">
          {srb
            ? "Stalni nadzor za najviši nivo bezbednosti"
            : "Constant surveillance for highest level of safety"}
        </h3>
        <p>
          {srb
            ? "Sva vozila su opremljena GPS navigacijom i nalaze se pod neprekidnim nadzorom."
            : "All of our vehicles are equipped with GPS navigation, and are under constant surveillance."}
        </p>
        <p>
          {srb
            ? "Sistem takođe poseduje sposobnost pisane komunikacije koji obezbeđuje pored sledljivosti poruka i dodatnu bezbednost jer vozači ne koriste mobilne telefone u toku vožnje."
            : "System provides the possibility of written communication, which provides traceability as well as additional level of safety as it does not require use of mobile phones during the driving."}
        </p>
      </div>
      <div className="w-full h-56 bg-gray-300"></div>
      <div className="w-full h-56 bg-gray-300 order-4 md:col-start-2 md:row-start-2"></div>
      <div className="font-light text-secondary flex flex-col gap-6 md:col-span-2">
        <p>
          {srb
            ? "Integracija sa Transport Management Sistemom (TMS) nam omogućava najefikasniju upotrebu transportnih kapaciteta uz punu transparentnost:"
            : "Integration of telematics system with Transport Management System (TMS) enables us to optimally use available transport capacities with full transparency:"}
        </p>
        <ul className="font-bold text-primary list-image-check list-inside flex flex-col gap-6 md:gap-10">
          <li>
            {srb
              ? "Vozila i tovari se mogu pratiti u realnom vremenu"
              : "Vehicles and cargoes can be tracked in real time"}
          </li>
          <li>
            {srb
              ? "Informacije o iskorišćenom i preostalom vremenu vožnje i pređenoj kilometraži"
              : "Information on used and remaining driving time and performed mileage"}
          </li>
          <li>
            {srb
              ? "Analize i izveštaji o izvršenim nalozima mogu biti formirani i dostavljeni po zahtevu kupca"
              : "Analysis and reports on performance can be created and delivered on customer’s request"}
          </li>
          <li>
            {srb
              ? "Mogućnost integracije sa softverom kupaca"
              : "Possibility of integration with customer’s software"}
          </li>
          <li>
            {srb
              ? "Mogućnost integracije sa logističkim platformama"
              : "Possibility of integration with logistics platforms"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SoftwareText;
