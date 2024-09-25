import {  WrenchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";

function DashboardDownloadCard({
  download,
}: {
  download: {
    _id: string;
    name: string;
  };
}) {
  const { name, _id } = download;

  return (
    <div className="flex items-center justify-between gap-6 py-6 border-b border-gray-400">
      <p className="grow text-2xl font-bold">{name}</p>
      <Link
        href={`/dashboard/downloads/${_id}`}
        className="flex items-center px-4 py-1 text-white bg-primary hover:bg-accent rounded-xl transition-colors duration-300"
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
