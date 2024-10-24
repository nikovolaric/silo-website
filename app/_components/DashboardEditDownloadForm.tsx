"use client";

import { useState } from "react";
import Upload from "./Upload";
import { deleteAsset, editDownload } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import Link from "next/link";

function DashboardEditDownloadForm({
  download,
}: {
  download: {
    ime: string;
    name: string;
    descriptionSrb: string;
    descriptionSlo: string;
    descriptionEng: string;
    site: string;
    downloadLink: string;
    _id: string;
  };
}) {
  const {
    ime,
    name,
    descriptionSrb,
    descriptionEng,
    descriptionSlo,
    site,
    downloadLink,
    _id,
  } = download;
  const [curSite, setCurSite] = useState(site);
  const [pdf, setPdf] = useState(downloadLink);

  return (
    <form action={(formData: FormData) => editDownload(formData, _id)}>
      <h2 className="pb-4 font-raj font-bold text-2xl text-primary">
        Uredi download
      </h2>
      <div className="mt-20 flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          {site === "quality" ? (
            <label>Ime:</label>
          ) : (
            <label>Ime (Srpski | Angleški)</label>
          )}
          <div className="flex gap-2">
            {site !== "quality" && (
              <input
                type="text"
                name="ime"
                required
                autoComplete="off"
                defaultValue={ime}
                className="px-2 h-7 rounded-lg border border-primary w-1/2"
              />
            )}
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              defaultValue={name}
              className="px-2 h-7 rounded-lg border border-primary w-1/2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 w-1/2">
          <label>Zavihek:</label>
          <select
            name="site"
            required
            className="px-2 h-7 rounded-lg border border-primary"
            defaultValue={site}
            onChange={(e) => {
              e.preventDefault();
              setCurSite(e.target.value);
            }}
          >
            <option value="quality">Kvalitet</option>
            <option value="suppliers">Dobavljaći</option>
            <option value="sustainability">Održivost</option>
            <option value="about">About us</option>
          </select>
        </div>
        {curSite === "quality" && (
          <div className="flex flex-col gap-1.5">
            <label>Opis(SRB | SLO | ANG):</label>
            <div className="flex gap-5">
              <textarea
                name="descriptionSrb"
                autoComplete="off"
                className="px-2 h-20 rounded-lg border border-primary w-1/2"
                defaultValue={descriptionSrb}
              />
              <textarea
                name="descriptionSlo"
                autoComplete="off"
                className="px-2 h-20 rounded-lg border border-primary w-1/2"
                defaultValue={descriptionSlo}
              />
              <textarea
                name="descriptionEng"
                autoComplete="off"
                className="px-2 h-20 rounded-lg border border-primary w-1/2"
                defaultValue={descriptionEng}
              />
            </div>
          </div>
        )}
        {!pdf && <Upload setPdf={setPdf} />}
        {pdf && (
          <div className="flex flex-col gap-0.5 items-start">
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
              className="mt-6 mb-2 bg-primary text-white px-4 py-1.5 rounded-full hover:bg-secondary transition-colors duration-300"
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
        {pdf === downloadLink && (
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
      className="mt-6 mb-2 bg-primary text-white px-4 py-1.5 rounded-full hover:bg-secondary disabled:bg-neutraltwo disabled:cursor-not-allowed transition-colors duration-300"
      disabled={pending}
    >
      {pending ? "Urejam..." : "Uredi download"}
    </button>
  );
}

export default DashboardEditDownloadForm;
