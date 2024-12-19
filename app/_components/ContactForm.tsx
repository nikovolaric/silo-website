"use client";

import { useFormStatus } from "react-dom";
import { SendMail } from "../_lib/actions";
import { useState } from "react";

const input =
  "border-primary rounded bg-neutraltwo h-8 py-2 px-4 focus:bg-white transition-all duration-200";

function ContactForm({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const [message, setMessage] = useState("");

  async function formAction(formData: FormData) {
    const result = await SendMail(formData);
    if (result.includes("250")) {
      setMessage(
        slo
          ? "Mail poslan uspešno!"
          : srb
            ? "Mail poslan uspešno!"
            : "Mail sent successfully",
      );
    } else {
      setMessage(
        slo
          ? "Nekaj je šlo narobe! Poskusite znova!"
          : srb
            ? "Nešto nije uredu! Pokušaj ponovno!"
            : "Something went wrong! Try again later!",
      );
    }
  }

  return (
    <div className="mt-32">
      <div className="mb-10 flex flex-col gap-5 md:gap-6 md:text-center">
        <h3 className="font-raj text-2xl font-bold text-primary">
          {slo
            ? "Kontaktirajte nas"
            : srb
              ? "Kontaktirajte nas"
              : "Contact us today"}
        </h3>
        <p className="text-secondary">
          {slo
            ? "Naša izkušena ekipa vam z veseljem pomaga."
            : srb
              ? "Naš iskusni tim će vam rado pomoći."
              : "Our experienced team is happy to assist you."}
        </p>
      </div>
      <form action={formAction}>
        <div className="grid grid-cols-1 gap-4 md:mx-auto md:w-7/12 lg:w-3/4 lg:grid-cols-3">
          <input
            placeholder={
              slo
                ? "Ime in priimek*:"
                : srb
                  ? "Ime i prezime*:"
                  : "First name and last name*:"
            }
            required
            className={input}
            name="name"
            autoComplete="off"
          />
          <input
            placeholder="E-mail*:"
            required
            className={input}
            name="mail"
            autoComplete="off"
          />
          <input
            placeholder={
              slo
                ? "Telefonska številka:"
                : srb
                  ? "Broj telefona:"
                  : "Phone number:"
            }
            className={input}
            name="phone"
            autoComplete="off"
          />
          <textarea
            placeholder={slo ? "Sporočilo*:" : srb ? "Poruka*:" : "Message*:"}
            required
            className={`h-56 rounded border-primary bg-neutraltwo px-4 py-2 transition-all duration-200 focus:bg-white lg:col-span-3`}
            name="message"
            autoComplete="off"
          />
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

export default ContactForm;
