function QualityStandardsItem({
  standard,
  srb,
  slo,
}: {
  standard: {
    name: string;
    descriptionSrb: string;
    descriptionSlo: string;
    descriptionEng: string;
    downloadLink: string;
  };
  srb?: boolean;
  slo?: boolean;
}) {
  const { name, descriptionSrb, descriptionSlo, descriptionEng, downloadLink } =
    standard;
  return (
    <li className="font-bold text-primary">
      {name}
      <p className="mb-8 ml-5 mt-2 font-light text-secondary">
        {srb ? descriptionSrb : slo ? descriptionSlo : descriptionEng}
      </p>
      <a
        href={`https://res.cloudinary.com/dho3nkc4l/image/upload/fl_attachment/${downloadLink}`}
        download
        className="flex items-center justify-between rounded-lg bg-neutraltwo px-3 py-2.5 shadow-lg transition-shadow duration-300 md:w-3/4 lg:w-3/5 lg:hover:shadow-xl"
      >
        {name}
        <span className="rounded-full bg-accent px-1.5 py-0.5 text-white">
          &darr;
        </span>
      </a>
    </li>
  );
}

export default QualityStandardsItem;
