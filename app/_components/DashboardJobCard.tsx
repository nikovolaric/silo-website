"use client";

import { CheckIcon, WrenchIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import { addToCareer, hideFromCareer } from "../_lib/actions";

function DashboardJobCard({
  job,
}: {
  job: {
    _id: string;
    titleSrb: string;
    hidden: boolean;
  };
}) {
  const { titleSrb, _id, hidden } = job;

  return (
    <div className="flex items-center justify-between gap-6 py-6 border-b border-gray-400">
      <p className="grow text-2xl font-bold">{titleSrb}</p>
      {hidden ? (
        <form action={() => addToCareer(_id)}>
          <button className="cursor-pointer">
            <XMarkIcon className="p-1 h-6 bg-red-400" />
          </button>
        </form>
      ) : (
        <form action={() => hideFromCareer(_id)}>
          <button className="cursor-pointer">
            <CheckIcon className="p-1 h-6 bg-green-300" />
          </button>
        </form>
      )}
      <Link
        href={`/dashboard/kariera/${_id}`}
        className="flex items-center px-4 py-1 text-white bg-primary hover:bg-accent rounded-xl transition-colors duration-300"
      >
        Uredi
        <span>
          <WrenchIcon className="h-6" />
        </span>
      </Link>
      <DeleteBtn id={_id} job />
    </div>
  );
}

export default DashboardJobCard;
