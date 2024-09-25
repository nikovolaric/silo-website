function DownloadItem({
  download,
  srb,
}: {
  download: { ime: string; name: string; downloadLink: string };
  srb?: boolean;
}) {
  const { ime, name, downloadLink } = download;

  return (
    <a
      href={`https://res.cloudinary.com/dho3nkc4l/image/upload/${downloadLink}`}
      download
      target="_blank"
      className="font-medium py-2.5 px-3 mx-auto flex justify-between items-center bg-neutraltwo rounded-lg shadow-lg w-full md:w-3/4 lg:w-3/5 lg:hover:shadow-xl transition-shadow duration-300"
    >
      {srb ? ime : name}
      <span className="bg-accent text-white px-2 py-0.5 rounded-full">
        &darr;
      </span>
    </a>
  );
}

export default DownloadItem;
