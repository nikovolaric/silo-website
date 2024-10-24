import DashboardEditJobForm from "@/app/_components/DashboardEditJobForm";
import { getOneJob } from "@/app/_lib/jobsApi";
import User from "@/app/_models/userModel";
import { jwtDecode } from "jwt-decode";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Uredi delovno mesto",
};

async function Page({ params }: { params: { _id: string } }) {
  const session = cookies().get("jwt")?.value as string;
  if (!session) {
    redirect("/login");
  }
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    cookies().delete("jwt");
    redirect("/login");
  }

  const { _id } = params;

  const { job } = await getOneJob(_id);

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardEditJobForm job={job} />
    </div>
  );
}

export default Page;
