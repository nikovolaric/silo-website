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
    if (result.includes("250")) {
      setMessage(
        srb || slo ? "Mail poslan uspešno!" : "Mail sent successfully",
      );
    } else {
      setMessage(
        slo
          ? "Nekaj ni v redu: Ponovno poiskusi čez nekaj minut!"
          : srb
            ? "Nešto nije uredu! Pokušaj ponovno!"
            : "Something went wrong! Try again later!",
      );
    }
  }

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 md:gap-6">
        <h3 className="font-raj text-2xl font-bold text-primary">
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
        <div className="flex flex-col gap-4 md:mx-auto md:w-7/12 lg:w-3/4">
          <input
            placeholder={srb || slo ? "Zadeva:*" : "Matter:*"}
            className={input}
            name="subject"
            autoComplete="off"
          />
          <textarea
            placeholder={slo ? "Sporočilo*:" : srb ? "Poruka*:" : "Message*:"}
            required
            className={`h-56 rounded border-primary bg-neutraltwo px-4 py-2 transition-all duration-200 focus:bg-white lg:col-span-3`}
            name="message"
            autoComplete="off"
          />
          <input type="checkbox" name="honeypot" className="hidden" />
        </div>
        {message && (
          <p className="mt-2 text-primary md:mx-auto md:w-7/12 lg:w-3/4">
            {message}
          </p>
        )}
        <div className="mt-6 text-right md:mx-auto md:w-7/12 lg:mt-10 lg:w-3/4">
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
      className="rounded-full bg-accent px-6 py-0.5 font-semibold text-white shadow-xl transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-white disabled:text-primary md:px-10 lg:hover:bg-white lg:hover:text-primary"
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
