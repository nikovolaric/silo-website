"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteDownload } from "../_lib/actions";

function DeleteBtn({ id }: { id: string }) {
  return (
    <form action={() => deleteDownload(id)}>
      <button className="flex items-center px-4 py-1 hover:bg-white rounded-xl border border-gray-600 transition-colors duration-300">
        Izbriši
        <span>
          <TrashIcon className="h-6" />
        </span>
      </button>
    </form>
  );
}

export default DeleteBtn;
