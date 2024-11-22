import DashboardJobCard from "@/app/_components/DashboardJobCard";
import Spinner from "@/app/_components/Spinner";
import { getAllJobs } from "@/app/_lib/jobsApi";
// import User from "@/app/_models/userModel";
// import { jwtDecode } from "jwt-decode";
import { Metadata } from "next";
// import { cookies } from "next/headers";
import Link from "next/link";
// import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Delovna mesta",
};

interface iJob {
  title: string;
  titleSlo: string;
  titleSrb: string;
  responsibilities: string[];
  responsibilitiesSlo: string[];
  responsibilitiesSrb: string[];
  qualifications: string[];
  qualificationsSlo: string[];
  qualificationsSrb: string[];
  hidden: boolean;
  _id: string;
}

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

  const data = await getAllJobs();

  const { jobs } = data;

  if (!data.results)
    return (
      <div className="mx-auto flex h-dvh max-w-7xl flex-col">
        <h2 className="py-10 text-center text-2xl">Delovna mesta</h2>
        <h2 className="py-10 text-left text-xl uppercase">
          V bazi ni delovnih mest...
        </h2>
        <Link
          href="/dashboard/kariera/newjob"
          className="mx-auto mt-4 rounded-md bg-primary px-2 py-1 text-neutral transition-colors duration-300 hover:bg-secondary hover:text-white"
        >
          + Dodaj delovno mesto
        </Link>
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="mt-4 rounded-md border-2 px-2 py-1 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            &larr; Dashboard
          </Link>
        </div>
      </div>
    );
  return (
    <div className="mx-auto flex h-dvh max-w-7xl flex-col">
      <h2 className="py-10 text-center text-2xl">Delovna mesta</h2>
      <div className="flex flex-col">
        <Suspense fallback={<Spinner />}>
          {jobs.map((job: iJob) => (
            <DashboardJobCard key={job._id} job={job} />
          ))}
        </Suspense>
      </div>
      <Link
        href="/dashboard/kariera/newjob"
        className="mx-auto mt-4 rounded-md bg-primary px-2 py-1 text-neutral transition-colors duration-300 hover:bg-secondary hover:text-white"
      >
        + Dodaj delovno mesto
      </Link>
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="mt-4 rounded-md border-2 px-2 py-1 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
        >
          &larr; Dashboard
        </Link>
        {/* <LogOutBtn /> */}
      </div>
    </div>
  );
}

export default Page;
