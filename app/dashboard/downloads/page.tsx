import Spinner from "@/app/_components/Spinner";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";
import DownloadCards from "@/app/_components/DownloadCards";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import User from "@/app/_models/userModel";
// import { jwtDecode } from "jwt-decode";

export const dynamic = "force-dynamic";

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
