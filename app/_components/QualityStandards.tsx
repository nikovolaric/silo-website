import { getAllDownloads } from "../_lib/downloadApi";
import QualityStandardsItem from "./QualityStandardsItem";

export const revalidate = 3600;

async function QualityStandards({
  srb,
  slo,
}: {
  srb?: boolean;
  slo?: boolean;
}) {
  const data = await getAllDownloads("quality");

  if (!data.results) return <div></div>;

  return (
    <div>
      <h3 className="font-raj text-2xl font-bold text-primary">
        {slo
          ? "Certificirani smo glede na naslednje mednarodne standarde:"
          : srb
            ? "Sertifikovani smo prema sledećim međunarodnim standardima:"
            : "We are certified to the following international standards:"}
      </h3>
      <ul className="mx-auto mt-11 flex list-inside list-image-check flex-col gap-16 md:mt-16 md:w-5/6">
        {data.downloads.map(
          (standard: {
            name: string;
            descriptionSrb: string;
            descriptionSlo: string;
            descriptionEng: string;
            downloadLink: string;
            _id: string;
          }) => (
            <QualityStandardsItem
              key={standard._id}
              standard={standard}
              srb={srb}
              slo={slo}
            />
          ),
        )}
      </ul>
    </div>
  );
}

export default QualityStandards;
