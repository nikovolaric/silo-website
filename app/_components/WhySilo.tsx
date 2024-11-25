import {
  BriefcaseIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

function WhySilo({
  srb,
  slo,
  one,
  two,
  three,
  four,
}: {
  srb?: boolean;
  slo?: boolean;
  one: string;
  two: string;
  three: string;
  four: string;
}) {
  return (
    <div className="mt-28 md:mt-36 lg:mt-40">
      <h3 className="text-center font-raj text-2xl font-bold text-primary">
        {slo ? "Zakaj" : srb ? "Zašto" : "Why"} Silo Jeličić?
      </h3>
      <ul className="mt-8 flex flex-col gap-6 font-semibold text-primary md:flex-row md:gap-5">
        <li className="flex items-center gap-9 rounded-lg border px-7 py-5 shadow-xl md:w-1/4 md:flex-col md:justify-between md:gap-6 md:px-2 md:py-4 md:text-center">
          <ChartBarIcon className="h-8 basis-8 text-accent" />
          <div className="md:flex md:basis-[72px] md:items-center lg:basis-12">
            <p>{one}</p>
          </div>
        </li>
        <li className="flex items-center gap-9 rounded-lg border px-7 py-5 shadow-xl md:w-1/4 md:flex-col md:justify-between md:gap-6 md:px-2 md:py-4 md:text-center">
          <ComputerDesktopIcon className="basis-8 text-accent" />
          <div className="md:flex md:basis-[72px] md:items-center lg:basis-12">
            <p>{two}</p>
          </div>
        </li>
        <li className="flex items-center gap-9 rounded-lg border px-7 py-5 shadow-xl md:w-1/4 md:flex-col md:justify-between md:gap-6 md:px-2 md:py-4 md:text-center">
          <WrenchScrewdriverIcon className="h-8 basis-8 text-accent" />
          <div className="md:flex md:basis-[72px] md:items-center lg:basis-12">
            <p>{three}</p>
          </div>
        </li>
        <li className="flex items-center gap-9 rounded-lg border px-7 py-5 shadow-xl md:w-1/4 md:flex-col md:justify-between md:gap-6 md:px-2 md:py-4 md:text-center">
          <BriefcaseIcon className="h-8 basis-8 text-accent" />
          <div className="md:flex md:basis-[72px] md:items-center lg:basis-12">
            <p>{four}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WhySilo;
