"use client";

import { useState } from "react";
import CookieManageCard from "./CookieManageCard";

function MapButton({ srb, slo }: { srb?: boolean; slo?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="underline" onClick={() => setIsOpen(true)}>
        {slo ? "tukaj." : srb ? "ovde." : "here."}
      </button>
      {isOpen && <CookieManageCard setIsOpen={setIsOpen} slo={slo} srb={srb} />}
    </>
  );
}

export default MapButton;
