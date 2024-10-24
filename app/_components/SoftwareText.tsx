import Image from "next/image";
import img from "@/public/software1.jpeg";
import img2 from "@/public/software2.jpg";

function SoftwareText({ slo, srb }: { slo?: boolean; srb?: boolean }) {
  return (
    <div className="mt-10 md:mt-20 flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-x-5">
      <div className="font-light text-secondary flex flex-col gap-6 md:col-span-2">
        <h3 className="font-raj font-bold text-2xl text-primary">
          {slo
            ? "Stalni nadzor za najvišjo raven varnosti"
            : srb
            ? "Stalni nadzor za najviši nivo bezbednosti"
            : "Constant surveillance for highest level of safety"}
        </h3>
        <p>
          {slo
            ? "Vsa naša vozila so opremljena z GPS navigacijo in so pod stalnim nadzorom."
            : srb
            ? "Sva vozila su opremljena GPS navigacijom i nalaze se pod neprekidnim nadzorom."
            : "All of our vehicles are equipped with GPS navigation, and are under constant surveillance."}
        </p>
        <p>
          {slo
            ? "Sistem omogoča tudi pisno komunikacijo, kar zagotavlja sledljivost sporočil in dodatno varnost, saj vozniki med vožnjo ne uporabljajo mobilnih telefonov."
            : srb
            ? "Sistem takođe poseduje sposobnost pisane komunikacije koji obezbeđuje pored sledljivosti poruka i dodatnu bezbednost jer vozači ne koriste mobilne telefone u toku vožnje."
            : "System provides the possibility of written communication, which provides traceability as well as an additional level of safety as it does not require the use of mobile phones during driving."}
        </p>
      </div>
      <div className="relative w-full h-56 lg:h-72">
        <Image
          src={img}
          alt="sowtware slika"
          fill
          placeholder="blur"
          className="object-cover rounded-lg object-top"
          sizes="(max-width:768px)95vw,66vw"
        />
      </div>
      <div className="relative w-full h-56 order-4 md:col-start-2 md:row-start-2 lg:h-72">
        <Image
          src={img2}
          alt="sowtware slika"
          fill
          placeholder="blur"
          className="object-cover rounded-lg object-top"
          sizes="(max-width:768px)95vw,66vw"
        />
      </div>
      <div className="font-light text-secondary flex flex-col gap-6 md:col-span-2">
        <p>
          {slo
            ? "Integracija telematičnega sistema s sistemom za upravljanje prevoza (TMS) nam omogoča optimalno uporabo razpoložljivih transportnih zmogljivosti s popolno preglednostjo:"
            : srb
            ? "Integracija sa Transport Management Sistemom (TMS) nam omogućava najefikasniju upotrebu transportnih kapaciteta uz punu transparentnost:"
            : "Integration of the telematics system with the Transport Management System (TMS) enables us to optimally use available transport capacities with full transparency:"}
        </p>
        <ul className="font-bold text-primary list-image-check list-inside flex flex-col gap-6 md:gap-10">
          <li>
            {slo
              ? "Vozila in tovor je mogoče spremljati v realnem času"
              : srb
              ? "Vozila i tovari se mogu pratiti u realnom vremenu"
              : "Vehicles and cargoes can be tracked in real time"}
          </li>
          <li>
            {slo
              ? "Informacije o uporabljenem in preostalem času vožnje ter prevoženi kilometrini"
              : srb
              ? "Informacije o iskorišćenom i preostalom vremenu vožnje i pređenoj kilometraži"
              : "Information on used and remaining driving time and performed mileage"}
          </li>
          <li>
            {slo
              ? "Analize in poročila o izvedenih nalogah lahko izdelamo in dostavimo na zahtevo stranke"
              : srb
              ? "Analize i izveštaji o izvršenim nalozima mogu biti formirani i dostavljeni po zahtevu kupca"
              : "Analysis and reports on performance can be created and delivered on the customer’s request"}
          </li>
          <li>
            {slo
              ? "Možnost integracije s strankinim programsko opremo"
              : srb
              ? "Mogućnost integracije sa softverom kupaca"
              : "Possibility of integration with customer’s software"}
          </li>
          <li>
            {slo
              ? "Možnost integracije z logističnimi platformami"
              : srb
              ? "Mogućnost integracije sa logističkim platformama"
              : "Possibility of integration with logistics platforms"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SoftwareText;
