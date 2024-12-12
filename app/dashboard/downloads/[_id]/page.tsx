import DashboardGetOneEdit from "@/app/_components/DashboardGetOneEdit";
import Spinner from "@/app/_components/Spinner";
import User from "@/app/_models/userModel";
import { jwtDecode } from "jwt-decode";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Uredi download",
};

async function Page({ params }: { params: { _id: string } }) {
  const session = cookies().get("jwt")?.value as string;
  if (!session) {
    redirect("/login");
  }
  const { id: userId }: { id: string } = await jwtDecode(session);
  const user = await User.findById(userId);
  if (!user || user.role !== "admin") {
    redirect("/login");
  }

  const { _id } = params;


  return (
    <div className="mx-auto max-w-7xl">
      <Suspense fallback={<Spinner />}>
        <DashboardGetOneEdit id={_id} />
      </Suspense>
    </div>
  );
}

export default Page;
