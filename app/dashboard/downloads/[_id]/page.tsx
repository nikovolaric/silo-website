import DashboardEditDownloadForm from "@/app/_components/DashboardEditDownloadForm";
import { getOneDownload } from "@/app/_lib/downloadApi";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Uredi download",
};

async function Page({ params }: { params: { _id: string } }) {
  const session = cookies().get("jwt")?.value;

  if (!session) {
    redirect("/login");
  }

  const { _id } = params;

  const { download } = await getOneDownload(_id);

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardEditDownloadForm download={download} />
    </div>
  );
}

export default Page;
