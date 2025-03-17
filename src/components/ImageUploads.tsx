"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

interface ImageUploadsProps {
  onChange: (url: string) => void;
  value: string;
  endPoint: "postImage";
}

const ImageUploads = ({ onChange, value, endPoint }: ImageUploadsProps) => {
  const [imageSrc, setImageSrc] = useState(value);

  useEffect(() => {
    setImageSrc(value);
  }, [value]);

  if (imageSrc) {
    return (
      <div className="relative w-40 h-40">
        {" "}
        {/* Ensure size is defined */}
        <Image
          src={imageSrc}
          alt="Upload"
          width={160}
          height={160}
          className="rounded-md object-cover"
        />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        if (res?.[0]?.ufsUrl) {
          console.log("Uploaded Image URL:", res[0].ufsUrl);
          setImageSrc(res[0].ufsUrl);
          onChange(res[0].ufsUrl);
        }
      }}
      onUploadError={(error: Error) => {
        toast.error(error.message);
      }}
    />
  );
};

export default ImageUploads;
