"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { addJob } from "../_lib/actions";

function DashboardNewJobForm() {
  const [qual, setQual] = useState(0);
  const [res, setRes] = useState(0);

  const qualArr = [...Array(qual)];
  const resArr = [...Array(res)];

  return (
    <form action={addJob}>
      <h2 className="pb-4 font-raj font-bold text-2xl text-primary">
        Dodaj delovno mesto
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
            />
            <input
              type="text"
              name="titleSlo"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
            />
            <input
              type="text"
              name="title"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
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
            {res > 0 && (
              <MinusCircleIcon
                className="h-5 cursor-pointer"
                onClick={() => setRes((qual) => qual - 1)}
              />
            )}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              name="responsibilitiesSrb"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
            />
            <input
              type="text"
              name="responsibilitiesSlo"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
            />
            <input
              type="text"
              name="responsibilities"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
            />
          </div>
          {resArr.map((_, i) => (
            <div className="flex gap-2" key={i}>
              <input
                type="text"
                name="responsibilitiesSrb"
                required
                autoComplete="off"
                className="px-2 h-7 rounded-lg border border-primary w-1/2"
              />
              <input
                type="text"
                name="responsibilitiesSlo"
                required
                autoComplete="off"
                className="px-2 h-7 rounded-lg border border-primary w-1/2"
              />
              <input
                type="text"
                name="responsibilities"
                required
                autoComplete="off"
                className="px-2 h-7 rounded-lg border border-primary w-1/2"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-6">
            <label>Kvalifikacije (SRB | SLO | ANG):</label>
            <PlusCircleIcon
              className="h-5 cursor-pointer"
              onClick={() => setQual((qual) => qual + 1)}
            />
            {qual > 0 && (
              <MinusCircleIcon
                className="h-5 cursor-pointer"
                onClick={() => setQual((qual) => qual - 1)}
              />
            )}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              name="qualificationsSrb"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
            />
            <input
              type="text"
              name="qualificationsSlo"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
            />
            <input
              type="text"
              name="qualifications"
              required
              autoComplete="off"
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
            />
          </div>
          {qualArr.map((_, i) => (
            <div className="flex gap-2" key={i}>
              <input
                type="text"
                name="qualificationsSrb"
                required
                autoComplete="off"
                className="px-2 h-7 rounded-lg border border-primary w-1/2"
              />
              <input
                type="text"
                name="qualificationsSlo"
                required
                autoComplete="off"
                className="px-2 h-7 rounded-lg border border-primary w-1/2"
              />
              <input
                type="text"
                name="qualifications"
                required
                autoComplete="off"
                className="px-2 h-7 rounded-lg border border-primary w-1/2"
              />
            </div>
          ))}
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
      {pending ? "Dodajam..." : "Dodaj delovno mesto"}
    </button>
  );
}

export default DashboardNewJobForm;
