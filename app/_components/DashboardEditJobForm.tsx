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
      <h2 className="pb-4 font-raj text-2xl font-bold text-primary">
        Uredi delovno mesto
      </h2>
      <div className="mt-20 flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          <label>Naziv (SRB | SLO | ANG):</label>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="titleSrb"
              required
              autoComplete="off"
              className="h-7 w-1/2 rounded-lg border border-primary px-2"
              defaultValue={titleSrb}
            />
            <input
              type="text"
              name="titleSlo"
              required
              autoComplete="off"
              className="h-7 w-1/2 rounded-lg border border-primary px-2"
              defaultValue={titleSlo}
            />
            <input
              type="text"
              name="title"
              required
              autoComplete="off"
              className="h-7 w-1/2 rounded-lg border border-primary px-2"
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
          <div className="flex flex-col gap-2">
            <div className="flex w-full flex-col gap-2">
              <p>SRB:</p>
              {responsibilitiesSrb.slice(0, res).map((el, i) => (
                <textarea
                  name="responsibilitiesSrb"
                  autoComplete="off"
                  className="h-7 w-full rounded-lg border border-primary px-2"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
            <div className="flex w-full flex-col gap-2">
              <p>SLO:</p>
              {responsibilitiesSlo.slice(0, res).map((el, i) => (
                <textarea
                  name="responsibilitiesSlo"
                  autoComplete="off"
                  className="h-7 w-full rounded-lg border border-primary px-2"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
            <div className="flex w-full flex-col gap-2">
              <p>ENG:</p>
              {responsibilities.slice(0, res).map((el, i) => (
                <textarea
                  name="responsibilities"
                  autoComplete="off"
                  className="h-7 w-full rounded-lg border border-primary px-2"
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
          <div className="flex flex-col gap-2">
            <div className="flex w-full flex-col gap-2">
              <p>SRB:</p>
              {qualificationsSrb.slice(0, qual).map((el, i) => (
                <textarea
                  name="qualificationsSrb"
                  autoComplete="off"
                  className="h-7 w-full rounded-lg border border-primary px-2"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
            <div className="flex w-full flex-col gap-2">
              <p>SLO:</p>
              {qualificationsSlo.slice(0, qual).map((el, i) => (
                <textarea
                  name="qualificationsSlo"
                  autoComplete="off"
                  className="h-7 w-full rounded-lg border border-primary px-2"
                  defaultValue={el}
                  key={i}
                />
              ))}
            </div>
            <div className="flex w-full flex-col gap-2">
              <p>ENG:</p>
              {qualifications.slice(0, qual).map((el, i) => (
                <textarea
                  name="qualifications"
                  autoComplete="off"
                  className="h-7 w-full rounded-lg border border-primary px-2"
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
      className="mb-2 mt-6 rounded-full bg-primary px-4 py-1.5 text-white transition-colors duration-300 hover:bg-secondary disabled:cursor-not-allowed disabled:bg-neutraltwo"
      disabled={pending}
    >
      {pending ? "Urejam..." : "Uredi delovno mesto"}
    </button>
  );
}

export default DashboardEditJobForm;
