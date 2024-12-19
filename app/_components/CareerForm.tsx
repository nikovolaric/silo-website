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
    <div className="mt-32" id="form">
      <div className="mb-10 flex flex-col gap-5 md:gap-6 md:text-center">
        <h3 className="font-raj text-2xl font-bold text-primary">
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
            className={`h-56 rounded border-primary bg-neutraltwo px-4 py-2 transition-all duration-200 focus:bg-white lg:col-span-3`}
            name="message"
            autoComplete="off"
          />
          <div className="flex items-center justify-between rounded bg-neutraltwo px-2 py-1.5 lg:col-span-3">
            <p>
              {srb
                ? "Otpremite svoj CV"
                : slo
                  ? "Naložite svoj CV"
                  : "Upload your CV"}
            </p>
            <label
              htmlFor="file_input"
              className="transition-color rounded-full bg-accent/10 px-3 py-1 duration-300 hover:cursor-pointer hover:bg-accent/80 hover:text-neutraltwo"
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
                  ],
                )
              }
            />
          </div>
          <div className="flex items-start gap-4 lg:col-span-3">
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

export default CareerForm;
