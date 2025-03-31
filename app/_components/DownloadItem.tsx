function DownloadItem({
  download,
  srb,
  slo,
}: {
  download: { ime: string; name: string; imeSlo: string; downloadLink: string };
  srb?: boolean;
  slo?: boolean;
}) {
  const { ime, imeSlo, name, downloadLink } = download;

  return (
    <a
      href={`https://res.cloudinary.com/dho3nkc4l/image/upload/fl_attachment/${downloadLink}`}
      download
      className="mx-auto flex w-full items-center justify-between rounded-lg bg-neutraltwo px-3 py-2.5 font-medium shadow-lg transition-shadow duration-300 md:w-3/4 lg:w-3/5 lg:hover:shadow-xl"
    >
      {srb ? ime : slo ? imeSlo : name}
      <span className="rounded-full bg-accent px-2 py-0.5 text-white">
        &darr;
      </span>
    </a>
  );
}

export default DownloadItem;
