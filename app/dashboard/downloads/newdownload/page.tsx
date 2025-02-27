import DashboardNewDownloadForm from "@/app/_components/DashboardNewDownloadForm";
import connectDB from "@/app/_config/database";
import User from "@/app/_models/userModel";
import { jwtDecode } from "jwt-decode";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dodaj download",
};

async function Page() {
  await connectDB();
  const session = cookies().get("jwt")?.value as string;
  if (!session) {
    redirect("/login");
  }
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    redirect("/login");
  }

  return (
    <div className="mx-auto my-10 max-w-7xl">
      <DashboardNewDownloadForm />
    </div>
  );
}

export default Page;
