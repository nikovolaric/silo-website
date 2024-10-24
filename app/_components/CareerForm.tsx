"use client";

import { useFormStatus } from "react-dom";
import { newApplication } from "../_lib/actions";
import { useState } from "react";

const input =
  "border-primary rounded bg-neutraltwo h-8 py-2 px-4 focus:bg-white transition-all duration-200";

function CareerForm({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");

  async function formAction(formData: FormData) {
    const result = await newApplication(formData);
    if (result.includes("Ok")) {
      setMessage(
        slo
          ? "Mail poslan uspešno!"
          : srb
          ? "Mail poslan uspešno!"
          : "Mail sent successfully"
      );
    } else {
      setMessage(
        slo
          ? "Nekaj je šlo narobe! Poskusite znova!"
          : srb
          ? "Nešto nije uredu! Pokušaj ponovno!"
          : "Something went wrong! Try again later!"
      );
    }
  }

  return (
    <div className="mt-32" id="form">
      <div className="mb-10 flex flex-col gap-5 md:text-center md:gap-6">
        <h3 className="font-raj font-bold text-2xl text-primary">
          {slo
            ? "Se želite pridružiti naši ekipi?"
            : srb
            ? "Zainteresovani ste da se pridružite našem timu?"
            : "Interested in joining our team?"}
        </h3>
        <p className="text-secondary">
          {slo
            ? "Prijavite se tako, da izpolnite spodnji kontaktni obrazec. Veselimo se vašega sporočila."
            : srb
            ? "Prijavite se popunjavanjem kontakt forme ispod. Radujemo se Vašoj poruci."
            : "Apply by filling out the contact form below. We look forward to hearing from you."}
        </p>
      </div>
      <form action={formAction}>
        <div className="grid grid-cols-1 gap-4 md:w-7/12 md:mx-auto lg:grid-cols-3 lg:w-3/4">
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
          <input
            placeholder={
              srb ? "Radno mesto*:" : slo ? "Delovno mesto*:" : "Position*:"
            }
            required
            className={`${input} lg:col-span-3`}
            name="position"
            autoComplete="off"
          />
          <textarea
            placeholder={slo ? "Sporočilo*:" : srb ? "Poruka*:" : "Message*:"}
            required
            className={`border-primary rounded bg-neutraltwo h-56 py-2 px-4 focus:bg-white transition-all duration-200 lg:col-span-3`}
            name="message"
            autoComplete="off"
          />
          <div className="flex items-center justify-between bg-neutraltwo px-2 py-1.5 rounded lg:col-span-3">
            <p>
              {srb
                ? "Otpremite svoj CV"
                : slo
                ? "Naložite svoj CV"
                : "Upload your CV"}
            </p>
            <label
              htmlFor="file_input"
              className="px-3 py-1 bg-accent/10 rounded-full hover:cursor-pointer hover:bg-accent/80 hover:text-neutraltwo transition-color duration-300"
            >
              {file ? file : "Choose a document"}
            </label>
            <input
              type="file"
              id="file_input"
              name="CV"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setFile(
                  e.target.value.split("\\")[
                    e.target.value.split("\\").length - 1
                  ]
                )
              }
            />
          </div>
          <div className="flex gap-4 items-start lg:col-span-3">
            <input type="checkbox" required className="mt-2" />
            <label>
              {srb
                ? "Podnošenjem ove prijave garantujem tačnost datih informacija. Popunjavanjem ove prijave dajem saglasnost da preduzeće Silo Jeličić, d.o.o. korišćenje ovih podataka u svrhu zapošljavanja na odgovarajuće radno mesto u skladu sa Zakonom o zaštiti podataka o ličnosti."
                : slo
                ? "Z oddajo te vloge jamčim za točnost navedenih podatkov. Z izpolnitvijo te prijave soglašam, da podjetje Silo Jeličić, d.o.o., te podatke uporabi za namene zaposlitve na ustreznem delovnem mestu v skladu z Zakonom o varstvu osebnih podatkov."
                : "By submitting this application, I guarantee the accuracy of the provided information. By completing this application, I consent to the company Silo Jelicic, d.o.o. using this data for employment purposes for the appropriate position in accordance with the Personal Data Protection Act."}
            </label>
          </div>
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

export default CareerForm;
