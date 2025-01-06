import { Suspense } from "react";
import { getAllJobs } from "../_lib/jobsApi";
import OpenPositionCard from "./OpenPositionCard";
import Spinner from "./Spinner";

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

async function OpenPositions({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const data = await getAllJobs("hidden=false");
  if (!data.results) {
    return (
      <div className="mt-20 flex flex-col gap-6 lg:mt-24">
        <h4 className="font-raj text-2xl font-semibold text-primary">
          {srb
            ? "Trenutno nema otvorenih radnih mesta "
            : slo
              ? "Trenutno ni razpoložljivih delovnih mest "
              : "No job openings at the moment "}
          :(
        </h4>
        <p>
          {srb
            ? "Trenutno nemamo otvorenih radnih mesta, ali vas pozivamo da nam ipak pošaljete svoj CV. Vaše podatke ćemo čuvati u našoj bazi i obavestićemo vas kada se pojavi prilika koja odgovara vašem profilu."
            : slo
              ? "Trenutno nimamo odprtih delovnih mest, vendar vas vabimo, da nam vseeno pošljete svoj življenjepis. Vaše podatke bomo hranili v naši bazi in vas obvestili, ko se bo pojavila priložnost, ki ustreza vašemu profilu."
              : "Currently, we do not have any job openings, but we invite you to submit your CV. We will keep your information in our database and notify you when an opportunity matching your profile arises."}
        </p>
      </div>
    );
  }
  if (data.results) {
    return (
      <div className="mt-20 lg:mt-24">
        <h5 className="font-raj text-xl font-bold xl:mx-auto xl:w-5/6">
          {srb
            ? "Slobodna radna mesta:"
            : slo
              ? "Prosta delovna mesta:"
              : "Open positions:"}
        </h5>
        <div className="flex flex-col gap-20">
          <Suspense fallback={<Spinner />}>
            {data.jobs.map((el: iJob) => (
              <OpenPositionCard key={el._id} job={el} srb={srb} slo={slo} />
            ))}
          </Suspense>
        </div>
      </div>
    );
  }
}

export default OpenPositions;
