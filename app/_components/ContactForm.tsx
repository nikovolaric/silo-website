"use client";

import { useFormStatus } from "react-dom";
import { SendMail } from "../_lib/actions";
import { useState } from "react";

const input =
  "border-primary rounded bg-neutraltwo h-8 py-2 px-4 focus:bg-white transition-all duration-200";

function ContactForm({ srb }: { srb?: boolean }) {
  const [message, setMessage] = useState("");

  async function formAction(formData: FormData) {
    const result = await SendMail(formData);
    if (result.includes("Ok")) {
      setMessage(srb ? "Mail poslan uspešno!" : "Mail snet successfully");
    } else {
      setMessage(
        srb
          ? "Nešto nije uredu! Pokušaj ponovno!"
          : "Something went wrong! Try again later!"
      );
    }
  }

  return (
    <div className="mt-32">
      <div className="mb-10 flex flex-col gap-5 md:text-center md:gap-6">
        <h3 className="font-raj font-bold text-2xl text-primary">
          {srb ? "Kontaktirajte nas" : "Contact us today"}
        </h3>
        <p className="text-secondary">
          {srb
            ? "Naš iskusni tim će vam rado pomoći."
            : "Our experienced team is happy to assist you."}
        </p>
      </div>
      <form action={formAction}>
        <div className="grid grid-cols-1 gap-4 md:w-7/12 md:mx-auto lg:grid-cols-3 lg:w-3/4">
          <input
            placeholder={srb ? "Ime i prezime*:" : "First name and last name*:"}
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
            placeholder={srb ? "Broj telefona:" : "Phone number:"}
            className={input}
            name="phone"
            autoComplete="off"
          />
          <textarea
            placeholder={srb ? "Poruka*:" : "Message*:"}
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
          <Button srb={srb} />
        </div>
      </form>
    </div>
  );
}

function Button({ srb }: { srb?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="text-white bg-accent py-0.5 px-6 rounded-full font-semibold shadow-xl md:px-10 lg:hover:bg-white lg:hover:text-primary transition-colors duration-300 disabled:text-primary disabled:bg-white disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (srb ? "Šaljem..." : "Sending...") : srb ? "Šalji" : "Send"}
    </button>
  );
}

export default ContactForm;
