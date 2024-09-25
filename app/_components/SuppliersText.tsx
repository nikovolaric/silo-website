import { getAllDownloads } from "../_lib/downloadApi";
import DownloadItem from "./DownloadItem";

async function SuppliersText({ srb }: { srb?: boolean }) {
  const { downloads } = await getAllDownloads("suppliers");

  return (
    <div className="mt-12 flex flex-col gap-10 md:mt-20 md:gap-20 lg:gap-40">
      <div className="font-light text-secondary flex flex-col gap-8">
        <h3 className="font-raj font-bold text-2xl text-primary">
          {srb
            ? "Najviši standardi kvaliteta, bezbednosti i društvene odgovornosti"
            : "Highest standards of quality, safety, and social responsibility"}
        </h3>
        <p>
          {srb
            ? "Naši dobavljači nisu samo partneri, već i ključni akteri u našem zajedničkom cilju postizanja najviših standarda kvaliteta, bezbednosti i društvene odgovornosti"
            : "Our suppliers are not just partners, but key players in our shared goal of achieving the highest standards of quality, safety, and social responsibility."}
        </p>
        <p>
          {srb
            ? "Kroz saradnju sa nama, naši dobavljači su pozvani da usvoje i dosledno primenjuju sledeće standarde:"
            : "Through collaboration with us, our suppliers are invited to adopt and consistently implement the following standards:"}
        </p>
        <ul className="font-bold text-primary list-image-check list-inside flex flex-col gap-4">
          <li>
            ISO 9001
            <br />
            <br />
            <span className="font-light text-secondary">
              {srb
                ? "Osiguranje kvaliteta u svim aspektima snabdevanja, garantujući pouzdane i visoko kvalitetne materijale i usluge."
                : "Ensuring quality in all aspects of supply, guaranteeing reliable and high-quality materials and services."}
            </span>
          </li>
          <li>
            ISO 14001
            <br />
            <br />
            <span className="font-light text-secondary">
              {srb
                ? "Posvećenost zaštiti životne sredine kroz odgovorne nabavke i implementaciju ekološki prihvatljivih praksi."
                : "Commitment to environmental protection through responsible procurement and the implementation of environmentally friendly practices."}
            </span>
          </li>
          <li>
            GMP+B4 Road Transport
            <br />
            <br />
            <span className="font-light text-secondary">
              {srb
                ? "Obezbeđivanje bezbednosti i usklađenosti sa najvišim standardima u transportu hrane i hrane za životinje."
                : "Ensuring safety and compliance with the highest standards in the transport of food and animal feed."}
            </span>
          </li>
          <li>
            SQAS
            <br />
            <br />
            <span className="font-light text-secondary">
              {srb
                ? "Osiguranje bezbednosti, kvaliteta i ekološke odgovornosti u hemijskom lancu snabdevanja."
                : "Ensuring safety, quality, and environmental responsibility in the chemical supply chain."}
            </span>
          </li>
          <li>
            EcoVadis
            <br />
            <br />
            <span className="font-light text-secondary">
              {srb
                ? "Primena principa održivog poslovanja i društvene odgovornosti, kako bi se osiguralo odgovorno upravljanje resursima i pozitivni uticaj na zajednicu."
                : "Applying the principles of sustainable business and social responsibility to ensure responsible resource management and a positive impact on the community."}
            </span>
          </li>
          <li>
            Operation Clean Sweep
            <br />
            <br />
            <span className="font-light text-secondary">
              {srb
                ? "Sprečavanje gubitka plastičnih čestica u prirodnom okruženju kroz primenu rigoroznih kontrola i održivih praksi."
                : "Preventing the loss of plastic particles in the natural environment through rigorous controls and sustainable practices."}
            </span>
          </li>
        </ul>
      </div>
      <div className="h-56 w-full md:w-2/3 lg:h-80 bg-gray-400 mx-auto"></div>
      <div className="flex flex-col gap-6 md:gap-10">
        <h3 className="font-raj font-bold text-2xl text-primary">
          {srb
            ? "Naša politika podrazumeva razvoj dugoročnih i pouzdanih partnerstava sa dobavljačima koji dele našu viziju i posvećenost visokim etičkim standardima. "
            : "Our policy involves developing long-term and reliable partnerships with suppliers who share our vision and commitment to high ethical standards. "}
        </h3>
        <p className="font-light text-secondary">
          {srb
            ? "Redovno ocenjivanje i unapređivanje saradnje s našim dobavljačima ključni su za ostvarivanje naših strateških ciljeva i održavanje kontinuiteta kvaliteta u lancu snabdevanja."
            : "Regular evaluation and improvement of cooperation with our suppliers are crucial for achieving our strategic goals and maintaining quality continuity in the supply chain."}
        </p>
        <div className="flex flex-col gap-6">
          {downloads.map(
            (el: {
              ime: string;
              name: string;
              downloadLink: string;
              _id: string;
            }) => (
              <DownloadItem key={el._id} download={el} srb={srb} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SuppliersText;
