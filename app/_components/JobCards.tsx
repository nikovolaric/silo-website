import DashboardJobCard from "./DashboardJobCard";
import { getAllJobs } from "../_lib/jobsApi";

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

async function JobCards() {
  const data = await getAllJobs();

  const { jobs } = data;

  if (!data.results)
    return (
      <h2 className="py-10 text-left text-xl uppercase">
        V bazi ni delovnih mest...
      </h2>
    );

  return (
    <div className="flex flex-col">
      {jobs.map((job: iJob) => (
        <DashboardJobCard key={job._id} job={job} />
      ))}
    </div>
  );
}

export default JobCards;
