"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { addJob } from "../_lib/actions";

function DashboardNewJobForm() {
  const [qual, setQual] = useState(1);
  const [res, setRes] = useState(1);

  const qualArr = [...Array(qual)];
  const resArr = [...Array(res)];

  return (
    <form action={addJob}>
      <h2 className="pb-4 font-raj text-2xl font-bold text-primary">
        Dodaj delovno mesto
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
            />
            <input
              type="text"
              name="titleSlo"
              required
              autoComplete="off"
              className="h-7 w-1/2 rounded-lg border border-primary px-2"
            />
            <input
              type="text"
              name="title"
              required
              autoComplete="off"
              className="h-7 w-1/2 rounded-lg border border-primary px-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-6">
            <label>Odgovornosti (SRB | SLO | ANG):</label>
            <PlusCircleIcon
              className="h-5 cursor-pointer"
              onClick={() => setRes((qual) => qual + 1)}
            />
            {res > 1 && (
              <MinusCircleIcon
                className="h-5 cursor-pointer"
                onClick={() => setRes((qual) => qual - 1)}
              />
            )}
          </div>

          <div className="flex flex-col gap-2">
            <p>SRB:</p>
            {resArr.map((_, i) => (
              <textarea
                name="responsibilitiesSrb"
                required
                autoComplete="off"
                className="h-7 w-full rounded-lg border border-primary px-2"
                key={i}
              />
            ))}
            <p>SLO:</p>
            {resArr.map((_, i) => (
              <textarea
                name="responsibilitiesSlo"
                required
                autoComplete="off"
                className="h-7 w-full rounded-lg border border-primary px-2"
                key={i + 100}
              />
            ))}
            <p>ENG:</p>
            {resArr.map((_, i) => (
              <textarea
                name="responsibilities"
                required
                autoComplete="off"
                className="h-7 w-full rounded-lg border border-primary px-2"
                key={i + 200}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-6">
            <label>Kvalifikacije (SRB | SLO | ANG):</label>
            <PlusCircleIcon
              className="h-5 cursor-pointer"
              onClick={() => setQual((qual) => qual + 1)}
            />
            {qual > 1 && (
              <MinusCircleIcon
                className="h-5 cursor-pointer"
                onClick={() => setQual((qual) => qual - 1)}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p>SRB:</p>
            {qualArr.map((_, i) => (
              <textarea
                name="qualificationsSrb"
                required
                autoComplete="off"
                className="h-7 w-full rounded-lg border border-primary px-2"
                key={i}
              />
            ))}
            <p>SLO:</p>
            {qualArr.map((_, i) => (
              <textarea
                name="qualificationsSlo"
                required
                autoComplete="off"
                className="h-7 w-full rounded-lg border border-primary px-2"
                key={i + 100}
              />
            ))}
            <p>ENG:</p>
            {qualArr.map((_, i) => (
              <textarea
                name="qualifications"
                required
                autoComplete="off"
                className="h-7 w-full rounded-lg border border-primary px-2"
                key={i + 200}
              />
            ))}
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
      {pending ? "Dodajam..." : "Dodaj delovno mesto"}
    </button>
  );
}

export default DashboardNewJobForm;
