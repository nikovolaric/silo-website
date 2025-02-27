import DashboardNewDownloadForm from "@/app/_components/DashboardNewDownloadForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dodaj download",
};

function Page() {
  return (
    <div className="mx-auto my-10 max-w-7xl">
      <DashboardNewDownloadForm />
    </div>
  );
}

export default Page;
