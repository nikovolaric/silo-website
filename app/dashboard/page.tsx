import {
  DocumentArrowDownIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Logout from "../_components/Logout";
import { jwtDecode } from "jwt-decode";
import User from "../_models/userModel";
import connectDB from "../_config/database";

export const metadata: Metadata = {
  title: "Dashboard",
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
    cookies().delete("jwt");
    redirect("/login");
  }

  return (
    <div className="max-w-7xl h-dvh mx-auto text-primary ">
      <h2 className="text-3xl font-raj font-bold py-6">Dashboard</h2>
      <div className="my-20 grid grid-cols-2 items-center text-center gap-3">
        <div>
          <Link
            href="/dashboard/downloads"
            className="flex flex-col py-12 border-2 transition-colors duration-300 hover:bg-gray-300"
          >
            Downloadi
            <span className="mt-4 flex justify-center">
              <DocumentArrowDownIcon className="h-6" />
            </span>
          </Link>
        </div>
        <div>
          <Link
            href="/dashboard/kariera"
            className="flex flex-col py-12 border-2 transition-colors duration-300 hover:bg-gray-300"
          >
            Kariera
            <span className="mt-4 flex justify-center">
              <UserPlusIcon className="h-6" />
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="mt-4 rounded-md border-2 px-2 py-1 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
        >
          &larr; Website
        </Link>
        <Logout />
      </div>
    </div>
  );
}

export default Page;
