import {
  BriefcaseIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

function WhySilo({
  srb,
  one,
  two,
  three,
  four,
}: {
  srb: boolean;
  one: string;
  two: string;
  three: string;
  four: string;
}) {
  return (
    <div className="mt-28 md:mt-36 lg:mt-40">
      <h3 className="font-raj font-bold text-primary text-2xl text-center">
        {srb ? "Zašto" : "Why"} Silo jeličić?
      </h3>
      <ul className="mt-8 font-semibold text-primary flex flex-col gap-6 md:flex-row md:gap-5">
        <li className="py-5 px-7 border rounded-lg shadow-xl flex items-center gap-9 md:flex-col md:justify-between md:gap-6 md:text-center md:w-1/4 md:py-4 md:px-2">
          <ChartBarIcon className="text-accent h-8 basis-8" />
          <div className="md:basis-[72px] md:flex md:items-center lg:basis-12">
            <p>{one}</p>
          </div>
        </li>
        <li className="py-5 px-7 border rounded-lg shadow-xl flex items-center gap-9 md:flex-col md:justify-between md:gap-6 md:text-center md:w-1/4 md:py-4 md:px-2">
          <ComputerDesktopIcon className="text-accent basis-8" />
          <div className="md:basis-[72px] md:flex md:items-center lg:basis-12">
            <p>{two}</p>
          </div>
        </li>
        <li className="py-5 px-7 border rounded-lg shadow-xl flex items-center gap-9 md:flex-col md:justify-between md:gap-6 md:text-center md:w-1/4 md:py-4 md:px-2">
          <WrenchScrewdriverIcon className="text-accent h-8 basis-8" />
          <div className="md:basis-[72px] md:flex md:items-center lg:basis-12">
            <p>{three}</p>
          </div>
        </li>
        <li className="py-5 px-7 border rounded-lg shadow-xl flex items-center gap-9 md:flex-col md:justify-between md:gap-6 md:text-center md:w-1/4 md:py-4 md:px-2">
          <BriefcaseIcon className="text-accent h-8 basis-8" />
          <div className="md:basis-[72px] md:flex md:items-center lg:basis-12">
            <p>{four}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WhySilo;
