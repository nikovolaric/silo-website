import { WrenchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";

function DashboardDownloadCard({
  download,
}: {
  download: {
    _id: string;
    name: string;
    site: string;
    downloadLink: string;
  };
}) {
  const { name, _id, site, downloadLink } = download;

  return (
    <div className="flex items-center justify-between gap-6 border-b border-gray-400 py-6">
      <a
        href={`https://res.cloudinary.com/dho3nkc4l/image/upload/${downloadLink}`}
        target="_blank"
        download
        className="grow text-2xl font-bold hover:underline"
      >
        {name} <span className="text-base font-normal">{`(${site})`}</span>
      </a>
      <Link
        href={`/dashboard/downloads/${_id}`}
        className="flex items-center rounded-xl bg-primary px-4 py-1 text-white transition-colors duration-300 hover:bg-accent"
      >
        Uredi
        <span>
          <WrenchIcon className="h-6" />
        </span>
      </Link>
      <DeleteBtn id={_id} />
    </div>
  );
}

export default DashboardDownloadCard;
