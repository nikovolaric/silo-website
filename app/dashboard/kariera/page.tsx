import JobCards from "@/app/_components/JobCards";
import Spinner from "@/app/_components/Spinner";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Delovna mesta",
};

function Page() {
  return (
    <div className="mx-auto flex h-dvh max-w-7xl flex-col">
      <h2 className="py-10 text-center text-2xl">Delovna mesta</h2>
      <Suspense fallback={<Spinner />}>
        <JobCards />
      </Suspense>
      <Link
        href="/dashboard/kariera/newjob"
        className="mx-auto mt-4 rounded-md bg-primary px-2 py-1 text-neutral transition-colors duration-300 hover:bg-secondary hover:text-white"
      >
        + Dodaj delovno mesto
      </Link>
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="mb-10 mt-4 rounded-md border-2 px-2 py-1 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
        >
          &larr; Dashboard
        </Link>
        {/* <LogOutBtn /> */}
      </div>
    </div>
  );
}

export default Page;
