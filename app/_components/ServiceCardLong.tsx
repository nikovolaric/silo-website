"use client";

import Image from "next/image";
import { useState } from "react";

function ServiceCardLong({ srb }: { srb: boolean }) {
  const [page, setPage] = useState(1);

  return (
    <div className="overflow-x-hidden p-1.5 md:h-full md:p-2">
      <div
        className={`flex gap-4 w-full ${
          page === 2
            ? "-translate-x-[103%]"
            : page === 3
            ? "-translate-x-[207%]"
            : "translate-x-0"
        } transition-transform duration-200`}
      >
        <div className="text-secondary flex flex-col justify-start gap-8 w-full flex-none bg-neutraltwo py-6 px-5 rounded-lg shadow-lg lg:px-8">
          <div className="relative w-full h-40">
            <Image
              src="/vakuum-silo.png"
              alt="service image"
              className="object-cover rounded-lg"
              fill
              sizes="(max-width:768px)85vw,50vw"
            />
          </div>
          <h2 className="font-raj font-bold text-2xl text-primary text-center">
            {srb ? "Konsalting" : "Consulting"}
          </h2>
          <p>
            {srb
              ? "Ako želite da unapredite svoju proizvodnu tehnologiju, proširite ili optimizujete kapacitete prelaskom sa podnog skladišta na skladište u silosima, možete se osloniti na našu stručnost za rešenja po meri."
              : "If you are looking to enhance your production technology, expand or optimize capacities by transitioning from floor storage to silo storage, you can rely on our expertise for tailored solutions."}
          </p>
          <div className="grow flex flex-col justify-end">
            <button
              className="bg-accent w-10 h-10 rounded-full font-raj text-2xl text-primary self-end lg:hover:bg-white transition-colors duration-300"
              onClick={() => setPage(2)}
            >
              &rarr;
            </button>
          </div>
        </div>
        {srb && (
          <>
            <div className="bg-neutraltwo py-4 px-2 rounded-lg shadow-lg flex flex-col justify-between w-full flex-none">
              <div className="text-secondary">
                <p>Moderni silosi nude značajne prednosti:</p>
                <ul className="mt-4 font-bold list-disc list-inside">
                  <li>
                    Zahtevaju manje prostora za izgradnju i štede na troškovima
                    zemljišta.
                  </li>
                  <li>Pružaju duži vek trajanja uskladištene robe</li>
                  <li>
                    Ugrađeni sistemi za zaštitu od bakterija i insekata
                    sprečavajući gubitke žitarica
                    <span className="font-normal">
                      {" "}
                      (u klasičnim skladištima se na ove gubitke odnosi 2-6%
                      ukupno uskladištenih količina)
                    </span>
                  </li>
                  <li>
                    Sistemi za kontrolu temperature{" "}
                    <span className="font-normal">
                      sprečavaju neželjene promene na uskladištenim materijalima
                      nastale zbog varijacija u temperaturi/vlazi.
                    </span>
                  </li>
                  <li>Ne zahtevaju dodatne sisteme za upravljanje zalihama</li>
                  <li>
                    Zahtevaju manje radne snage
                    <span className="font-normal">
                      {" "}
                      (u odnosu do 1:10 prema konvencionalnim skladištima)
                    </span>
                  </li>
                  <li>
                    Umanjuju rastur robe
                    <span className="font-normal">
                      {" "}
                      vezan za ljudski faktor ali i za ostale skladišne sisteme
                      u klasičnim skladištima, po principu ALL IN-ALL OUT
                    </span>
                  </li>
                </ul>
              </div>
              <button
                className="bg-accent w-10 h-10 rounded-full font-raj text-2xl text-primary self-end lg:hover:bg-white transition-colors duration-300"
                onClick={() => setPage(3)}
              >
                &rarr;
              </button>
            </div>
            <div className="bg-neutraltwo py-4 px-2 rounded-lg shadow-lg flex flex-col justify-between w-full flex-none">
              <div className="text-secondary">
                <p>
                  U odnosu na konvencionalan &quot;big-bag&quot; transport, silo
                  transport nudi :
                </p>
                <ul className="mt-4 font-bold list-inside list-disc">
                  <li>
                    Štedi najmanje 10€/t time što ne koristi ambalažu i palete
                  </li>
                  <li>Viša produktivnost zahvaljujući većoj automatizaciji</li>
                  <li>Manji rastur pri istovaru i manji gubici robe</li>
                  <li>
                    Veća količina materijala prevezena po jednom transportu
                  </li>
                </ul>
                <p className="mt-4">
                  Baveći se ovim izazovima, silosi nude ne samo operativnu
                  efikasnost već i
                  <span className="font-bold">
                    {" "}
                    brži povraćaj ulaganja i niže režijske troškove.
                  </span>
                </p>
              </div>
              <button
                className="border border-primary w-10 h-10 rounded-full font-raj text-2xl text-primary self-end lg:hover:bg-white lg:hover:border-white transition-colors duration-300"
                onClick={() => setPage(1)}
              >
                &larr;
              </button>
            </div>
          </>
        )}
        {!srb && (
          <>
            <div className="bg-neutraltwo py-4 px-2 rounded-lg shadow-lg flex flex-col justify-between w-full flex-none">
              <div className="text-secondary">
                <p>Modern silos offer significant advantages:</p>
                <ul className="mt-4 font-bold list-disc list-inside">
                  <li>Require less space, reducing land costs</li>
                  <li>Extend product shelf life</li>
                  <li>
                    Protect against bacteria, fungi, and insects, minimizing
                    losses
                    <span className="font-normal">
                      {" "}
                      (which in classic storage can account for 2-6% of the
                      total stored quantity)
                    </span>
                  </li>
                  <li>
                    Include temperature control systems
                    <span className="font-normal">
                      to prevent spoilage from fluctuations in temperature and
                      humidity
                    </span>
                  </li>
                  <li>Require no additional stock </li>
                  <li>
                    Reduce labour costs
                    <span className="font-normal">
                      {" "}
                      (up to 1:10 compared to classic storage)
                    </span>
                  </li>
                  <li>
                    Minimize material loss
                    <span className="font-normal">
                      {" "}
                      due to human error and inefficiencies found in traditional
                      storage systems, thanks to the ALL-IN-ALL-OUT system
                    </span>
                  </li>
                </ul>
              </div>
              <button
                className="bg-accent w-10 h-10 rounded-full font-raj text-2xl text-primary self-end lg:hover:bg-white transition-colors duration-300"
                onClick={() => setPage(3)}
              >
                &rarr;
              </button>
            </div>
            <div className="bg-neutraltwo py-4 px-2 rounded-lg shadow-lg flex flex-col justify-between w-full flex-none">
              <div className="text-secondary">
                <p>Compared to big-bag transport, silo transport offers:</p>
                <ul className="mt-4 font-bold list-inside list-disc">
                  <li>
                    Savings of at least 10€/t in packaging and pallet costs
                  </li>
                  <li>Higher productivity through automation</li>
                  <li>Less (or no) loss during unloading</li>
                  <li>Larger quantities transported per trip</li>
                </ul>
                <p className="mt-4">
                  By addressing these challenges, silos offer not only
                  operational efficiency but also
                  <span className="font-bold">
                    {" "}
                    faster return on investment and lower overhead costs.
                  </span>
                </p>
              </div>
              <button
                className="border border-primary w-10 h-10 rounded-full font-raj text-2xl text-primary self-end lg:hover:bg-white lg:hover:border-white transition-colors duration-300"
                onClick={() => setPage(1)}
              >
                &larr;
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ServiceCardLong;
