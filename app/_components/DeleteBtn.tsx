"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteDownload, deleteJob } from "../_lib/actions";

function DeleteBtn({ id, job }: { id: string; job?: boolean }) {
  async function handleDeleteJob(formData: FormData) {
    await deleteJob(formData, id);
  }

  async function handleDeleteDownload(formData: FormData) {
    await deleteDownload(formData, id);
  }

  return (
    <form action={job ? handleDeleteJob : handleDeleteDownload}>
      <button className="flex items-center rounded-xl border border-gray-600 px-4 py-1 transition-colors duration-300 hover:bg-white">
        Izbriši
        <span>
          <TrashIcon className="h-6" />
        </span>
      </button>
    </form>
  );
}

export default DeleteBtn;
