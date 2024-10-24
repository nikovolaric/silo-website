import { getAllDownloads } from "../_lib/downloadApi";
import DownloadItem from "./DownloadItem";

async function ESM({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const data = await getAllDownloads("sustainability");

  return (
    <div>
      <h3 className="font-raj font-bold text-primary text-2xl">
        {slo
          ? "Če vas zanimajo podrobnejše informacije, lahko prenesete naše ESG politike in poročila. Oglejte si naslednje prenose."
          : srb
          ? "Ukoliko ste zainteresovani za detaljnije informacije, možete preuzeti naše ESG politike i izveštaje putem sledećih downloada."
          : "If you are interested in more detailed information, you can download our ESG policies and reports, please see following downloads."}
      </h3>
      <div className="mt-12 flex flex-col gap-6 md:mt-20">
        {data.downloads.map(
          (el: {
            _id: string;
            ime: string;
            name: string;
            downloadLink: string;
          }) => (
            <DownloadItem key={el._id} download={el} srb={srb} />
          )
        )}
      </div>
    </div>
  );
}

export default ESM;
