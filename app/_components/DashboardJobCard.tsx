"use client";

import {
  ArrowPathIcon,
  CheckIcon,
  WrenchIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import { addToCareer, hideFromCareer } from "../_lib/actions";
import { ReactNode, useState } from "react";
import OpenPositionCard from "./OpenPositionCard";
import { useFormStatus } from "react-dom";

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

function DashboardJobCard({ job }: { job: iJob }) {
  const { titleSrb, _id, hidden } = job;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-6 border-b border-gray-400 py-6">
      <p className="grow text-2xl font-bold">{titleSrb}</p>
      <p className="cursor-pointer underline" onClick={() => setIsOpen(true)}>
        preview
      </p>
      {hidden ? (
        <form action={() => addToCareer(_id)}>
          <Button>
            <XMarkIcon className="h-6 bg-red-400 p-1" />
          </Button>
        </form>
      ) : (
        <form action={() => hideFromCareer(_id)}>
          <Button>
            <CheckIcon className="h-6 bg-green-300 p-1" />
          </Button>
        </form>
      )}
      <Link
        href={`/dashboard/kariera/${_id}`}
        className="flex items-center rounded-xl bg-primary px-4 py-1 text-white transition-colors duration-300 hover:bg-accent"
      >
        Uredi
        <span>
          <WrenchIcon className="h-6" />
        </span>
      </Link>
      <DeleteBtn id={_id} job />
      {isOpen && (
        <div className="absolute left-1/3 mt-[500px] w-1/3">
          <OpenPositionCard srb job={job} prev />
          <XMarkIcon
            className="absolute right-3 top-10 h-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

function Button({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button className="cursor-pointer">
      {pending ? <ArrowPathIcon className="h-4 animate-spin" /> : children}
    </button>
  );
}

export default DashboardJobCard;
