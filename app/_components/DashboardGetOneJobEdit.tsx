import { getOneJob } from "../_lib/jobsApi";
import DashboardEditJobForm from "./DashboardEditJobForm";

async function DashboardGetOneJobEdit({ id }: { id: string }) {
  const { job } = await getOneJob(id);

  return <DashboardEditJobForm job={job} />;
}

export default DashboardGetOneJobEdit;
