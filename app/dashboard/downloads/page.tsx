import { getAllDownloads } from "@/app/_lib/downloadApi";
import DashboardDownloadCard from "@/app/_components/DashboardDownloadCard";
import Spinner from "@/app/_components/Spinner";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import User from "@/app/_models/userModel";
// import { jwtDecode } from "jwt-decode";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Downloadi",
};

async function Page() {
  // const session = cookies().get("jwt")?.value;
  // if (!session) {
  //   redirect("/login");
  // }
  // const { id: userId }: { id: string } = await jwtDecode(session);
  // const user = await User.findById(userId);
  // if (!user || user.role !== "admin") {
  //   cookies().delete("jwt");
  //   redirect("/login");
  // }

  const data = await getAllDownloads();

  const { downloads } = data;

  if (!data.results)
    return (
      <div className="mx-auto flex h-dvh max-w-7xl flex-col">
        <h2 className="py-10 text-center text-2xl">Downloadi</h2>
        <h2 className="py-10 text-left text-xl uppercase">
          V bazi ni downloadov...
        </h2>
        <Link
          href="/dashboard/downloads/newdownload"
          className="mx-auto mt-4 rounded-md bg-primary px-2 py-1 text-neutral transition-colors duration-300 hover:bg-secondary hover:text-white"
        >
          + Dodaj download
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
      <h2 className="py-10 text-center text-2xl">Downloadi</h2>
      <div className="flex flex-col">
        <Suspense fallback={<Spinner />}>
          {downloads.map((download: { _id: string; name: string }) => (
            <DashboardDownloadCard key={download._id} download={download} />
          ))}
        </Suspense>
      </div>
      <Link
        href="/dashboard/downloads/newdownload"
        className="mx-auto mt-4 rounded-md bg-primary px-2 py-1 text-neutral transition-colors duration-300 hover:bg-secondary hover:text-white"
      >
        + Dodaj download
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
