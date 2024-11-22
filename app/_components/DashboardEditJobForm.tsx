"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";
import { updateJob } from "../_lib/actions";
import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

function DashboardEditJobForm({
  job,
}: {
  job: {
    title: string;
    titleSrb: string;
    titleSlo: string;
    responsibilities: string[];
    responsibilitiesSlo: string[];
    responsibilitiesSrb: string[];
    qualifications: string[];
    qualificationsSrb: string[];
    qualificationsSlo: string[];
    _id: string;
  };
}) {
  const {
    title,
    titleSrb,
    titleSlo,
    responsibilities,
    responsibilitiesSlo,
    responsibilitiesSrb,
    qualifications,
    qualificationsSrb,
    qualificationsSlo,
    _id,
  } = job;
  const [res, setRes] = useState(responsibilities.length);
  const [qual, setQual] = useState(qualifications.length);

  return (
    <form action={(formData) => updateJob(formData, _id)}>
      <h2 className="pb-4 font-raj font-bold text-2xl text-primary">
        Uredi delovno mesto
      </h2>
      <div className="mt-20 flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          <label>Naziv (SRB | SLO | ANG):</label>
          <div className="flex gap-2">
            <input
              type="text"
              name="titleSrb"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
              defaultValue={titleSrb}
            />
            <input
              type="text"
              name="titleSlo"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
              defaultValue={titleSlo}
            />
            <input
              type="text"
              name="title"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
              defaultValue={title}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-6">
            <label>Odgovornosti (SRB | SLO | ANG):</label>
            {res < responsibilities.length && (
              <PlusCircleIcon
                className="h-5 cursor-pointer"
                onClick={() => setRes((res) => res + 1)}
              />
            )}
            {res > 1 && (
              <MinusCircleIcon
                className="h-5 cursor-pointer"
                onClick={() => setRes((res) => res - 1)}
              />
            )}
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 w-full">
              {responsibilitiesSrb.slice(0, res).map((el, i) => (
                <input
                  type="text"
                  name="responsibilitiesSrb"
                  autoComplete="off"
                  className="px-2 h-7 rounded-lg border border-primary w-full"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 w-full">
              {responsibilitiesSlo.slice(0, res).map((el, i) => (
                <input
                  type="text"
                  name="responsibilitiesSlo"
                  autoComplete="off"
                  className="px-2 h-7 rounded-lg border border-primary w-full"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 w-full">
              {responsibilities.slice(0, res).map((el, i) => (
                <input
                  type="text"
                  name="responsibilities"
                  autoComplete="off"
                  className="px-2 h-7 rounded-lg border border-primary w-full"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-6">
            <label>Kvalifikacije (SRB | SLO | ANG):</label>
            {qual < qualifications.length && (
              <PlusCircleIcon
                className="h-5 cursor-pointer"
                onClick={() => setQual((qual) => qual + 1)}
              />
            )}
            {qual > 1 && (
              <MinusCircleIcon
                className="h-5 cursor-pointer"
                onClick={() => setQual((qual) => qual - 1)}
              />
            )}
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 w-full">
              {qualificationsSrb.slice(0, qual).map((el, i) => (
                <input
                  type="text"
                  name="qualificationsSrb"
                  autoComplete="off"
                  className="px-2 h-7 rounded-lg border border-primary w-full"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 w-full">
              {qualificationsSlo.slice(0, qual).map((el, i) => (
                <input
                  type="text"
                  name="qualificationsSlo"
                  autoComplete="off"
                  className="px-2 h-7 rounded-lg border border-primary w-full"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 w-full">
              {qualifications.slice(0, qual).map((el, i) => (
                <input
                  type="text"
                  name="qualifications"
                  autoComplete="off"
                  className="px-2 h-7 rounded-lg border border-primary w-full"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button />
        </div>

        <div>
          <Link
            href="/dashboard/kariera"
            className="mt-4 rounded-md border-2 px-2 py-1 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            &larr; Delovna mesta
          </Link>
        </div>
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-6 mb-2 bg-primary text-white px-4 py-1.5 rounded-full hover:bg-secondary disabled:bg-neutraltwo disabled:cursor-not-allowed transition-colors duration-300"
      disabled={pending}
    >
      {pending ? "Urejam..." : "Uredi delovno mesto"}
    </button>
  );
}

export default DashboardEditJobForm;
