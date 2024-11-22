import DashboardEditDownloadForm from "@/app/_components/DashboardEditDownloadForm";
import { getOneDownload } from "@/app/_lib/downloadApi";
// import User from "@/app/_models/userModel";
// import { jwtDecode } from "jwt-decode";
import { Metadata } from "next";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Uredi download",
};

async function Page({ params }: { params: { _id: string } }) {
  // const session = cookies().get("jwt")?.value as string;
  // if (!session) {
  //   redirect("/login");
  // }
  // const { id: userId }: { id: string } = await jwtDecode(session);
  // const user = await User.findById(userId);
  // if (!user || user.role !== "admin") {
  //   cookies().delete("jwt");
  //   redirect("/login");
  // }

  const { _id } = params;

  const { download } = await getOneDownload(_id);

  return (
    <div className="mx-auto max-w-7xl">
      <DashboardEditDownloadForm download={download} />
    </div>
  );
}

export default Page;
