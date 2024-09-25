"use client";

import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function Upload({ setPdf }: { setPdf: Dispatch<SetStateAction<string>> }) {
  const [result, setResult] = useState<CloudinaryUploadWidgetInfo | undefined>(
    undefined
  );

  useEffect(
    function () {
      if (result) {
        setPdf(result.public_id);
      }
    },
    [result, setPdf]
  );

  return (
    <div>
      <CldUploadWidget
        signatureEndpoint="/api/sign"
        uploadPreset="silo_downloads"
        onSuccess={(result) => {
          setResult(result?.info as CloudinaryUploadWidgetInfo);
        }}
        options={{ sources: ["local"] }}
        onQueuesEnd={(result, { widget }) => {
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <button
              className="mt-6 mb-2 bg-primary text-white px-4 py-1.5 rounded-full hover:bg-secondary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                open();
              }}
            >
              Naloži datoteko
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}

export default Upload;
