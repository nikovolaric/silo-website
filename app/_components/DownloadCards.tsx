import { getAllDownloads } from "../_lib/downloadApi";
import DashboardDownloadCard from "./DashboardDownloadCard";

async function DownloadCards() {
  const data = await getAllDownloads();

  const { downloads } = data;

  if (!data.results)
    return (
      <h2 className="py-10 text-left text-xl uppercase">
        V bazi ni downloadov...
      </h2>
    );

  return (
    <div className="flex flex-col">
      {downloads.map((download: { _id: string; name: string }) => (
        <DashboardDownloadCard key={download._id} download={download} />
      ))}
    </div>
  );
}

export default DownloadCards;
