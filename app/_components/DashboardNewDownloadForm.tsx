"use client";

import { useState } from "react";
import Upload from "./Upload";
import { createDownload, deleteAsset } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import Link from "next/link";

function DashboardNewDownloadForm() {
  const [site, setSite] = useState("quality");

  const [pdf, setPdf] = useState("");

  return (
    <form action={createDownload}>
      <h2 className="pb-4 font-raj text-2xl font-bold text-primary">
        Dodaj download
      </h2>
      <div className="mt-20 flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          {site === "quality" ? (
            <label>Ime:</label>
          ) : (
            <label>Ime (Srpski | Slovenski | Angleški)</label>
          )}
          <div className="flex flex-col gap-2">
            {site !== "quality" && (
              <>
                <input
                  type="text"
                  name="ime"
                  required
                  autoComplete="off"
                  className="h-7 w-1/2 rounded-lg border border-primary px-2"
                />
                <input
                  type="text"
                  name="imeSlo"
                  required
                  autoComplete="off"
                  className="h-7 w-1/2 rounded-lg border border-primary px-2"
                />
              </>
            )}
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              className="h-7 w-1/2 rounded-lg border border-primary px-2"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-1.5">
          <label>Zavihek:</label>
          <select
            name="site"
            required
            className="h-7 rounded-lg border border-primary px-2"
            onChange={(e) => {
              e.preventDefault();
              setSite(e.target.value);
            }}
          >
            <option value="quality">Kvalitet</option>
            <option value="suppliers">Dobavljači</option>
            <option value="sustainability">Održivost</option>
            <option value="about">About us</option>
          </select>
        </div>
        {site === "quality" && (
          <div className="flex flex-col gap-1.5">
            <label>Opis (SRB | SLO | ANG):</label>
            <div className="flex flex-col gap-5">
              <textarea
                name="descriptionSrb"
                autoComplete="off"
                className="h-20 w-full rounded-lg border border-primary px-2"
                placeholder="SRB"
              />
              <textarea
                name="descriptionSlo"
                autoComplete="off"
                className="h-20 w-full rounded-lg border border-primary px-2"
                placeholder="SLO"
              />
              <textarea
                name="descriptionEng"
                autoComplete="off"
                className="h-20 w-full rounded-lg border border-primary px-2"
                placeholder="ENG"
              />
            </div>
          </div>
        )}
        {!pdf && <Upload setPdf={setPdf} />}
        {pdf && (
          <div className="flex flex-col items-start gap-0.5">
            <input
              type="text"
              name="downloadLink"
              required
              autoComplete="off"
              defaultValue={pdf}
              className="hidden"
            />
            <p>{pdf}</p>
            <button
              className="mb-2 mt-6 rounded-full bg-primary px-4 py-1.5 text-white transition-colors duration-300 hover:bg-secondary"
              onClick={async (e) => {
                e.preventDefault();
                await deleteAsset(pdf);
                setPdf("");
              }}
            >
              Odstrani dokument
            </button>
          </div>
        )}
        <div className="flex justify-end">
          <Button />
        </div>
        {!pdf && (
          <div>
            <Link
              href="/dashboard/downloads"
              className="mt-4 rounded-md border-2 px-2 py-1 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              &larr; Downloadi
            </Link>
          </div>
        )}
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
      {pending ? "Dodajam..." : "Dodaj download"}
    </button>
  );
}

export default DashboardNewDownloadForm;
