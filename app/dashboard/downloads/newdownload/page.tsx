import DashboardNewDownloadForm from "@/app/_components/DashboardNewDownloadForm";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dodaj download",
};

function Page() {
  const session = cookies().get("jwt")?.value;

  if (!session) {
    redirect("/login");
  }
  return (
    <div className="mb-10 mx-auto max-w-7xl">
      <DashboardNewDownloadForm />
    </div>
  );
}

export default Page;
