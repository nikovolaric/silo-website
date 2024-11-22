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
    <div className="flex items-center justify-between gap-6 py-6 border-b border-gray-400">
      <p className="grow text-2xl font-bold">{titleSrb}</p>
      <p className="underline cursor-pointer" onClick={() => setIsOpen(true)}>
        preview
      </p>
      {hidden ? (
        <form action={() => addToCareer(_id)}>
          <Button>
            <XMarkIcon className="p-1 h-6 bg-red-400" />
          </Button>
        </form>
      ) : (
        <form action={() => hideFromCareer(_id)}>
          <Button>
            <CheckIcon className="p-1 h-6 bg-green-300" />
          </Button>
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
      {isOpen && (
        <div className="absolute mt-[500px] left-1/3 w-1/3">
          <OpenPositionCard srb job={job} prev />
          <XMarkIcon
            className="h-6 absolute top-10 right-3 cursor-pointer"
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
