import { getOneDownload } from "../_lib/downloadApi";
import DashboardEditDownloadForm from "./DashboardEditDownloadForm";

async function DashboardGetOneEdit({ id }: { id: string }) {
  const { download } = await getOneDownload(id);

  return <DashboardEditDownloadForm download={download} />;
}

export default DashboardGetOneEdit;
