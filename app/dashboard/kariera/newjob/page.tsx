import DashboardNewJobForm from "@/app/_components/DashboardNewJobForm";
// import User from "@/app/_models/userModel";
// import { jwtDecode } from "jwt-decode";
import { Metadata } from "next";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dodaj delovno mesto",
};

async function Page() {
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

  return (
    <div className="mx-auto mb-10 max-w-7xl">
      <DashboardNewJobForm />
    </div>
  );
}

export default Page;
