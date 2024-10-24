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
      <p className="font-light text-secondary ml-5 mt-2 mb-8">
        {srb ? descriptionSrb : slo ? descriptionSlo : descriptionEng}
      </p>
      <a
        href={`https://res.cloudinary.com/dho3nkc4l/image/upload/${downloadLink}`}
        download
        target="_blank"
        className="py-2.5 px-3 flex justify-between items-center bg-neutraltwo rounded-lg shadow-lg md:w-3/4 lg:w-3/5 lg:hover:shadow-xl transition-shadow duration-300"
      >
        {name}
        <span className="bg-accent text-white px-1.5 py-0.5 rounded-full">
          &darr;
        </span>
      </a>
    </li>
  );
}

export default QualityStandardsItem;
