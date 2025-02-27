import Spinner from "@/app/_components/Spinner";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";
import DownloadCards from "@/app/_components/DownloadCards";

export const metadata: Metadata = {
  title: "Downloadi",
};

function Page() {
  return (
    <div className="mx-auto flex h-dvh max-w-7xl flex-col">
      <h2 className="py-10 text-center text-2xl">Downloadi</h2>
      <Suspense fallback={<Spinner />}>
        <DownloadCards />
      </Suspense>
      <Link
        href="/dashboard/downloads/newdownload"
        className="mx-auto mt-4 rounded-md bg-primary px-2 py-1 text-neutral transition-colors duration-300 hover:bg-secondary hover:text-white"
      >
        + Dodaj download
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
