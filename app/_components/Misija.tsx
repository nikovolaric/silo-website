import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function Misija({
  img2,
  slo,
  srb,
}: {
  img2: StaticImport;
  slo?: boolean;
  srb?: boolean;
}) {
  return (
    <div className="font-light text-secondary flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5">
      <div className="relative w-full h-48 md:w-2/3 mx-auto lg:w-full lg:h-full">
        <Image
          src={img2}
          alt="about us image"
          fill
          placeholder="blur"
          className="object-cover rounded-lg"
          sizes="(max-width:768px)95vw,50vw"
        />
      </div>
      <h3 className="font-raj font-bold text-2xl text-primary lg:col-start-1 lg:row-start-1 lg:col-span-2">
        {slo
          ? "Naša misija je zagotoviti vrhunske transportne storitve, ki presegajo pričakovanja vseh deležnikov, z osredotočanjem na:"
          : srb
          ? "Naša misija je da pružimo vrhunske transportne usluge koje nadmašuju očekivanja svih zainteresovanih strana, kroz:"
          : "Our Mission is to provide exceptional transport services that exceed the expectations of all stakeholders by focusing on:"}
      </h3>
      <ul className="list-inside flex flex-col gap-8 lg:col-start-1 lg:row-start-2">
        <li className="list-image-one">
          <span className="font-bold text-primary">
            {slo
              ? "Varnost in zanesljivost"
              : srb
              ? "Bezbednost i pouzdanost "
              : "Safety and Reliability"}
            <br />
            <br />
          </span>
          {slo
            ? "Nenehno zagotavljamo varen in zanesljiv transport razsutih materialov, pri čemer skrbimo za integriteto naših operacij in zadovoljstvo strank."
            : srb
            ? "Kontinuirano obezbeđujemo siguran i pouzdan transport rasutih materijala, vodeći računa o integritetu naših operacija i zadovoljstvu klijenata."
            : "Continuously ensuring safe and reliable transport of bulk materials, maintaining the integrity of our operations and client satisfaction."}
        </li>
        <li className="list-image-two">
          <span className="font-bold text-primary">
            {slo
              ? "Izbira podjetja in partnerja"
              : srb
              ? "Kompanija izbora"
              : "Employer and Partner of Choice"}
            <br />
            <br />
          </span>
          {slo
            ? "Prizadevamo si biti prednostni delodajalec in partner, s čimer ustvarjamo delovno okolje, ki privablja, zadržuje in razvija najboljše talente ter hkrati gradimo dolgoročna in zaupanja vredna partnerstva s strankami."
            : srb
            ? "Trudimo se da budemo poslodavac i partner izbora, stvarajući radno okruženje koje privlači, zadržava i razvija najbolje talente, a istovremeno ostvarujemo dugoročna i poverljiva partnerstva sa našim klijentima."
            : "Striving to be the preferred employer and partner by creating a work environment that attracts, retains, and develops top talent, while building long-term, trust-based relationships with our clients."}
        </li>
        <li className="list-image-three">
          <span className="font-bold text-primary">
            {slo
              ? "Odgovornost do skupnosti"
              : srb
              ? "Odgovornost prema zajednici "
              : "Community Responsibility"}
            <br />
            <br />
          </span>
          {slo
            ? "Aktivno prispevamo k družbenemu razvoju s pomočjo odgovornih in trajnostnih praks, skrbimo za varstvo okolja ter izboljšujemo kakovost življenja v skupnostih, v katerih delujemo."
            : srb
            ? "Aktivno doprinosimo razvoju društva kroz odgovorne i održive prakse, brinući o zaštiti životne sredine i unapređenju kvaliteta života u zajednicama u kojima poslujemo."
            : "Actively contributing to societal development through responsible and sustainable practices, caring for environmental protection, and enhancing the quality of life in the communities where we operate."}
        </li>
      </ul>
    </div>
  );
}

export default Misija;
