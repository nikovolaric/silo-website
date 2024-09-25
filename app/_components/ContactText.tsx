import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "./ContactForm";
import Map from "./Map";

function ContactText({ srb }: { srb?: boolean }) {
  return (
    <div className="mt-6 md:mt-16 lg:mt-24">
      <h1 className="font-raj font-bold text-primary text-2xl lg:w-5/6 lg:mx-auto">
        Silo Jeličić, prevozi in storitve, d.o.o.
      </h1>
      <div className="mt-12 md:w-5/6 md:mx-auto lg:w-2/3">
        <div className="mx-10 flex flex-col gap-12">
          <div className="flex gap-5 items-center">
            <PhoneIcon className="h-6 text-accent" />
            <p>+386 00 000 000</p>
          </div>
          <div className="flex gap-5 items-center">
            <EnvelopeIcon className="h-6 text-accent" />
            <p>info@silo-jelicic.rs</p>
          </div>
          <div className="flex gap-5 items-center">
            <BuildingOffice2Icon className="h-6 text-accent" />
            <div>
              <p>Monday-Friday</p>
              <p>08:00 - 17:00</p>
            </div>
          </div>
          <div className="flex gap-5">
            <MapPinIcon className="h-6 text-accent" />
            <div className="flex flex-col gap-4 md:flex-row md:w-full md:justify-between">
              <div>
                <p>P.E. Silo Jelicic d.o.o.</p>
                <p>Mestinje 6,</p>
                <p>3241 Podplat</p>
                <p>Slovenija, EU</p>
              </div>
              <div>
                <p>Silo Jelicic d.o.o.</p>
                <p>Celjska cesta 7,</p>
                <p>3250 Rogaška Slatina</p>
                <p>Slovenija, EU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 md:mt-16 md:w-2/3 md:mx-auto lg:mt-20">
        <Map />
      </div>
      <ContactForm srb={srb} />
    </div>
  );
}

export default ContactText;
