import {
  DocumentArrowDownIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Metadata } from "next";
import Logout from "../_components/Logout";

export const metadata: Metadata = {
  title: "Dashboard",
};

function Page() {
  return (
    <div className="mx-auto h-dvh max-w-7xl text-primary">
      <h2 className="py-6 font-raj text-3xl font-bold">Dashboard</h2>
      <div className="my-20 grid grid-cols-2 items-center gap-3 text-center">
        <div>
          <Link
            href="/dashboard/downloads"
            className="flex flex-col border-2 py-12 transition-colors duration-300 hover:bg-gray-300"
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
            className="flex flex-col border-2 py-12 transition-colors duration-300 hover:bg-gray-300"
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
