import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function Vizija({
  img3,
  slo,
  srb,
}: {
  img3: StaticImport;
  slo?: boolean;
  srb?: boolean;
}) {
  return (
    <div className="font-light text-secondary flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5">
      <h3 className="font-raj font-bold text-2xl text-primary lg:col-span-2">
        {slo
          ? "Naša vizija je postati eno vodilnih podjetij in najvrednejša družba na področju cestnega transporta razsutih materialov, skozi:"
          : srb
          ? "Naša vizija je da postanemo jedan od lidera i najvrednija kompanija u drumskom transportu rasutih materijala, kroz:"
          : "Our vision is to become a leader and the most valuable company in road transport of bulk materials by focusing on:"}
      </h3>
      <ul className="list-inside flex flex-col gap-8">
        <li className="list-image-one">
          <span className="font-bold text-primary">
            {slo
              ? "Odličnost in inovativnost"
              : srb
              ? "Izvrsnost i inovativnost"
              : "Excellence and Innovation"}
            <br />
            <br />
          </span>
          {slo
            ? "Prizadevamo si za stalno izboljševanje operativne učinkovitosti in uporabo inovativnih rešitev, ki prinašajo dodatno vrednost našim strankam."
            : srb
            ? "Težimo ka stalnom unapređenju operativne efikasnosti i primeni inovativnih rešenja koja donose dodatnu vrednost našim klijentima."
            : "Striving for continuous improvement in operational efficiency and applying innovative solutions that add value for our clients."}
        </li>
        <li className="list-image-two">
          <span className="font-bold text-primary">
            {slo ? "Vodstvo" : srb ? "Liderstvo" : "Leadership"}
            <br />
            <br />
          </span>
          {slo
            ? "Cilj nam je postati vodilni v industriji, poznani po visoki kakovosti storitev, zanesljivosti in doslednemu upoštevanju najvišjih standardov."
            : srb
            ? "Nastojimo da postanemo jedan od vodećih lidera u industriji, poznati po visokom kvalitetu usluga, pouzdanosti i doslednoj primeni najviših standarda."
            : "Aiming to be a top industry leader known for high service quality, reliability, and consistent adherence to the highest standards."}
        </li>
        <li className="list-image-three">
          <span className="font-bold text-primary">
            {slo
              ? "Trajnostni razvoj"
              : srb
              ? "Održivi razvoj"
              : "Sustainable Development"}
            <br />
            <br />
          </span>
          {slo
            ? "Zavezani smo trajnostnemu poslovanju, pri čemer uravnotežujemo ekonomske, ekološke in družbene vidike našega poslovanja, da zagotovimo dolgoročno uspešnost in pozitiven vpliv na skupnost in okolje."
            : srb
            ? "Posvećeni smo održivom poslovanju, balansirajući ekonomske, ekološke i društvene aspekte našeg poslovanja kako bismo osigurali dugoročnu uspešnost i pozitivan uticaj na zajednicu i životnu sredinu."
            : "Committed to sustainable business practices, balancing economic, environmental, and social aspects to ensure long-term success and a positive impact on the community and environment."}
        </li>
      </ul>
      <div className="relative w-full h-48 md:w-2/3 mx-auto lg:w-full lg:h-full lg:col-start-1 lg:row-start-2">
        <Image
          src={img3}
          alt="about us image"
          fill
          placeholder="blur"
          className="object-cover rounded-lg"
          sizes="(max-width:768px)95vw,50vw"
        />
      </div>
    </div>
  );
}

export default Vizija;
