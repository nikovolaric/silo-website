import { getAllDownloads } from "../_lib/downloadApi";
import QualityStandardsItem from "./QualityStandardsItem";

async function QualityStandards({ srb }: { srb?: boolean }) {
  const data = await getAllDownloads("quality");

  if (!data.results) return <div></div>;

  return (
    <div>
      <h3 className="font-raj font-bold text-2xl text-primary">
        {srb
          ? "Sertifikovani smo prema sledećim međunarodnim standardima:"
          : "We are certified to the following international standards"}
      </h3>
      <ul className="mt-11 list-inside list-image-check flex flex-col gap-16 md:mt-16 md:w-5/6 mx-auto">
        {data.downloads.map(
          (standard: {
            name: string;
            descriptionSrb: string;
            descriptionEng: string;
            downloadLink: string;
            _id: string;
          }) => (
            <QualityStandardsItem
              key={standard._id}
              standard={standard}
              srb={srb}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default QualityStandards;
