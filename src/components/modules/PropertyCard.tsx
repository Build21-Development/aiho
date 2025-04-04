"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import pdf from "../../../public/PDF.png";
import {
  getPropertyCardDocument,
  getPropertyCardDocuments,
  newPropertyCardDocument,
} from "src/api";
import { useParams } from "next/navigation";

const PropertyCard = () => {
  const { propertyId } = useParams() as {
    propertyId: string;
  };

  const [showModal, setShowModal] = useState(false);
  const [documents, setDocuments] = useState<
    {
      document: {
        timestamp: number;
        cid: string;
        fileName: string;
      };
    }[]
  >([]);
  const [base64File, setBase64File] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file?.name || null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        // Remove the "data:application/pdf;base64," prefix if needed
        const base64 = result.split(",")[1];
        setBase64File(base64);
      };
      reader.readAsDataURL(file); // This will produce base64
    }
  };

  const refreshDocuments = () =>
    getPropertyCardDocuments(Number(propertyId)).then((res) => {
      setDocuments(
        res.documents.sort(
          (a, b) => b.document.timestamp - a.document.timestamp,
        ),
      );
    });

  useEffect(() => {
    refreshDocuments();
  }, [propertyId]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Property Card Documents</h3>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Upload Document
        </button>
      </div>

      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.document.timestamp}
            className="flex justify-between items-center gap-2"
          >
            <Image
              src={pdf}
              alt="pdf"
              width={75}
              height={75}
              className="rounded-xl border border-gray-200"
            />
            <div className="flex flex-row justify-between items-center gap-3 p-4 border rounded-lg shadow-sm bg-white w-full h-[75px]">
              <div className="flex flex-col justify-center items-start">
                <span className="font-semibold">{doc.document.fileName}</span>
                <span className="font-medium text-gray-400">
                  Uploaded:{" "}
                  {new Date(doc.document.timestamp * 1000).toLocaleDateString()}{" "}
                  {new Date(doc.document.timestamp * 1000).toLocaleTimeString()}{" "}
                  / Size: 1mb
                </span>
              </div>

              <button
                className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition"
                onClick={() => {
                  getPropertyCardDocument(Number(propertyId), doc.document.cid)
                    .then((res) => {
                      if (res.status === "ok") {
                        alert(res.base64File);
                      } else {
                        if (res.status === "not_found") {
                          alert(
                            "The document is not available for download. Please try again later.",
                          );
                        }
                        if (res.status === "no_document") {
                          alert("No document found.");
                        }
                      }
                    })
                    .catch((err) => console.error(err));
                }}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
            <button className="absolute top-2 right-3 text-gray-500 text-lg font-bold">
              &times;
            </button>
            <h4 className="text-lg font-semibold mb-4">Upload PDF Document</h4>
            <input
              type="file"
              accept="application/pdf"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              onClick={() => {
                if (!base64File || !fileName) return;
                newPropertyCardDocument(
                  Number(propertyId),
                  fileName,
                  base64File,
                )
                  .then(() => {
                    refreshDocuments();
                    setShowModal(false);
                  })
                  .catch((err) => console.error(err));
              }}
              disabled={!base64File}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;
