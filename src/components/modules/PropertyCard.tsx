import { useState } from "react";
import Image from "next/image";
import pdf from "../../../public/PDF.png";

const PropertyCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [documents] = useState([
    { id: 1, name: "Maintenance_Report_1.pdf" },
    { id: 2, name: "Inspection_Log_2024.pdf" },
  ]);

  // Sort documents from newest to oldest by ID
  const sortedDocs = [...documents].sort((a, b) => b.id - a.id);

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
        {sortedDocs.map((doc) => (
          <div key={doc.id} className="flex justify-between items-center gap-2">
            <Image
              src={pdf}
              alt="pdf"
              width={75}
              height={75}
              className="rounded-xl border border-gray-200"
            />
            <div className="flex flex-row justify-between items-center gap-3 p-4 border rounded-lg shadow-sm bg-white w-full h-[75px]">
              <div className="flex flex-col justify-center items-start">
                <span className="font-semibold">{doc.name}</span>
                <span className="font-medium text-gray-400">
                  Uploaded: 22/03/2024 / Size: 1mb
                </span>
              </div>

              <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 text-lg font-bold"
            >
              &times;
            </button>
            <h4 className="text-lg font-semibold mb-4">Upload PDF Document</h4>
            <input
              type="file"
              accept="application/pdf"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2"
            />
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;
