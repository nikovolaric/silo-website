import { BriefcaseIcon } from "@heroicons/react/24/outline";
import LinkBtn from "./LinkBtn";

interface iJob {
  title: string;
  titleSlo: string;
  titleSrb: string;
  responsibilities: string[];
  responsibilitiesSlo: string[];
  responsibilitiesSrb: string[];
  qualifications: string[];
  qualificationsSlo: string[];
  qualificationsSrb: string[];
  hidden: boolean;
  _id: string;
}

function OpenPositionCard({
  srb,
  slo,
  job,
  prev,
}: {
  srb?: boolean;
  slo?: boolean;
  job: iJob;
  prev?: boolean;
}) {
  const {
    title,
    titleSlo,
    titleSrb,
    responsibilities,
    responsibilitiesSlo,
    responsibilitiesSrb,
    qualifications,
    qualificationsSlo,
    qualificationsSrb,
  } = job;

  return (
    <div>
      <div
        className={`flex flex-col mt-7 gap-8 px-4 py-6 bg-neutraltwo rounded-lg shadow-xl md:gap-14 md:py-8 ${
          !prev ? "lg:w-5/6 lg:mx-auto xl:w-2/3" : "w-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <BriefcaseIcon className="text-accent h-8" />
          <h4 className="font-bold font-raj text-xl text-primary text-center flex-none w-5/6 md:text-left md:w-11/12">
            {srb ? titleSrb : slo ? titleSlo : title}
          </h4>
        </div>
        <div className="flex flex-col gap-4 md:w-5/6 md:mx-auto">
          <p className="font-bold text-secondary">
            {srb ? "Odgovornosti:" : slo ? "Odgovornosti:" : "Responsibilities"}
          </p>
          {srb && (
            <ul className="list-disc list-inside font-light">
              {responsibilitiesSrb.map((el: string, i: number) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
          {slo && (
            <ul className="list-disc list-inside font-light">
              {responsibilitiesSlo.map((el: string, i: number) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
          {!srb && !slo && (
            <ul className="list-disc list-inside font-light">
              {responsibilities.map((el: string, i: number) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col gap-4 md:w-5/6 md:mx-auto">
          <p className="font-bold text-secondary">
            {srb
              ? "Potrebne kvalifikacije:"
              : slo
              ? "Zahtevane kvalifikacije:"
              : "Required qualifications:"}
          </p>
          {srb && (
            <ul className="list-image-check list-inside font-light flex flex-col gap-4">
              {qualificationsSrb.map((el: string, i: number) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
          {slo && (
            <ul className="list-image-check list-inside font-light flex flex-col gap-4">
              {qualificationsSlo.map((el: string, i: number) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
          {!srb && !slo && (
            <ul className="list-image-check list-inside font-light flex flex-col gap-4">
              {qualifications.map((el: string, i: number) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {!prev && (
        <div className="mt-10 text-center">
          <LinkBtn href="#form" type="primary">
            {srb ? "Prijavite se sada" : slo ? "Prijavi se zdaj" : "Apply now"}
          </LinkBtn>
        </div>
      )}
    </div>
  );
}

export default OpenPositionCard;
