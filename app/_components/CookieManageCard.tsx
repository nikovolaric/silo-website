"use client";

import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Dispatch } from "react";
import {
  acceptAnalytics,
  acceptThirdParty,
  declineThirdParty,
  declineAnalytics,
} from "../_lib/actions";

function CookieManageCard({
  setIsOpen,
  slo,
  srb,
  ga,
  tp,
}: {
  setIsOpen: Dispatch<boolean>;
  slo?: boolean;
  srb?: boolean;
  ga?: string;
  tp?: string;
}) {
  console.log(ga);
  return (
    <div className="absolute w-5/6 left-[8%] -mt-56 text-left py-6 px-3 bg-white border shadow-2xl border-primary rounded-lg flex flex-col gap-6 md:w-1/2 md:left-1/4 lg:w-1/3 lg:left-1/3">
      <XMarkIcon
        className="h-7 absolute right-4 top-4 hover:cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
      <h5 className="font-raj font-semibold text-xl text-primary">
        {srb
          ? "Prilagođene postavke"
          : slo
          ? "Prilagojene nastavitve"
          : "Custom Settings"}
      </h5>
      <div className="flex flex-col gap-3">
        <div className="flex gap-6">
          <p>
            {srb
              ? "Analitički i kolačići performansi"
              : slo
              ? "Analitični in performančni piškotki"
              : "Analytics and Performance Cookies"}
          </p>
          {ga === "true" ? (
            <CheckCircleIcon className="h-6" />
          ) : (
            <XCircleIcon className="h-6" />
          )}
        </div>
        <div className="flex justify-center gap-5">
          <form action={acceptAnalytics}>
            <button
              className={`border py-1 px-4 rounded-full ${
                ga === "true" ? "border-accent bg-neutral" : "border-primary"
              }`}
            >
              {srb ? "Prihvati" : slo ? "Sprejmi" : "Accept"}
            </button>
          </form>
          <form action={declineAnalytics}>
            <button
              className={`border py-1 px-4 rounded-full ${
                ga === "false" ? "border-accent bg-neutral" : "border-primary"
              }`}
            >
              {srb ? "Odbij" : slo ? "Zavrni" : "Decline"}
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-6">
          <p>
            {srb
              ? "Kolačići trećih strana"
              : slo
              ? "Piškotki tretjih oseb"
              : "Third-Party Cookies"}
          </p>
          {tp === "true" ? (
            <CheckCircleIcon className="h-6" />
          ) : (
            <XCircleIcon className="h-6" />
          )}
        </div>
        <div className="flex justify-center gap-5">
          <form action={acceptThirdParty}>
            <button
              className={`border py-1 px-4 rounded-full ${
                tp === "true" ? "border-accent bg-neutral" : "border-primary"
              }`}
            >
              {srb ? "Prihvati" : slo ? "Sprejmi" : "Accept"}
            </button>
          </form>
          <form action={declineThirdParty}>
            <button
              className={`border py-1 px-4 rounded-full ${
                tp === "false" ? "border-accent bg-neutral" : "border-primary"
              }`}
            >
              {srb ? "Odbij" : slo ? "Zavrni" : "Decline"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CookieManageCard;
