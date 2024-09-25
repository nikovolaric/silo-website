import DashboardNewDownloadForm from "@/app/_components/DashboardNewDownloadForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dodaj download",
};

function Page() {
  return (
    <div className="mb-10 mx-auto max-w-7xl">
      <DashboardNewDownloadForm />
    </div>
  );
}

export default Page;
