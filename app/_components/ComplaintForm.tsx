"use client";

import { useFormStatus } from "react-dom";
import { newComplaint } from "../_lib/actions";
import { useState } from "react";

const input =
  "border-primary rounded bg-neutraltwo h-8 py-2 px-4 focus:bg-white transition-all duration-200";

function ComplaintForm({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const [message, setMessage] = useState("");

  async function formAction(formData: FormData) {
    const result = await newComplaint(formData);
    if (result.includes("Ok")) {
      setMessage(
        srb || slo ? "Mail poslan uspešno!" : "Mail snet successfully"
      );
    } else {
      setMessage(
        slo
          ? "Nekaj ni v redu: Ponovno poiskusi čez nekaj minut!"
          : srb
          ? "Nešto nije uredu! Pokušaj ponovno!"
          : "Something went wrong! Try again later!"
      );
    }
  }

  return (
    <div className="mt-32">
      <div className="mb-10 flex flex-col gap-5 md:gap-6">
        <h3 className="font-raj font-bold text-2xl text-primary">
          {slo
            ? "Dodatno, če želite anonimno prijaviti kakršnokoli pritožbo, nepravilnost ali dogodek, povezan z ESG, zagotavljamo zaščito vseh informacij in identitete osebe, ki oddaja prijavo."
            : srb
            ? "Takođe, ukoliko želite da prijavite anonimno bilo koju žalbu, nepravilnost ili incident u vezi ESG, garantujemo zaštitu svih informacija u lica koje je podnosi."
            : "Additionally, if you wish to anonymously report any complaint, irregularity, or incident related to ESG, we guarantee the protection of all information and the identity of the person making the report. "}
        </h3>
        <p className="text-secondary">
          {slo
            ? "Svojo prijavo lahko oddate preko naslednjega obrazca."
            : srb
            ? "Prijavu možete podneti putem našega formulara"
            : "You can submit your report through the following form."}
        </p>
      </div>
      <form action={formAction}>
        <div className="flex flex-col gap-4 md:w-7/12 md:mx-auto lg:w-3/4">
          <input
            placeholder={srb || slo ? "Zadeva:*" : "Matter:*"}
            className={input}
            name="subject"
            autoComplete="off"
          />
          <textarea
            placeholder={slo ? "Sporočilo*:" : srb ? "Poruka*:" : "Message*:"}
            required
            className={`border-primary rounded bg-neutraltwo h-56 py-2 px-4 focus:bg-white transition-all duration-200 lg:col-span-3`}
            name="message"
            autoComplete="off"
          />
        </div>
        {message && (
          <p className="mt-2 md:w-7/12 md:mx-auto lg:w-3/4 text-primary">
            {message}
          </p>
        )}
        <div className="text-right mt-6 md:w-7/12 md:mx-auto lg:w-3/4 lg:mt-10">
          <Button srb={srb} slo={slo} />
        </div>
      </form>
    </div>
  );
}

function Button({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="text-white bg-accent py-0.5 px-6 rounded-full font-semibold shadow-xl md:px-10 lg:hover:bg-white lg:hover:text-primary transition-colors duration-300 disabled:text-primary disabled:bg-white disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending
        ? slo
          ? "Pošiljam..."
          : srb
          ? "Šaljem..."
          : "Sending..."
        : slo
        ? "Pošlji"
        : srb
        ? "Šalji"
        : "Send"}
    </button>
  );
}

export default ComplaintForm;
