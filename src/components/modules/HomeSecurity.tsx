import { useState } from "react";
import Image from "next/image";
import pdf from "../../../public/PDF.png";

const HomeSecurity = () => {
  const [selectedDoc, setSelectedDoc] = useState<null | {
    id: number;
    name: string;
  }>(null);

  const [documents] = useState([
    { id: 1, name: "Event #1", date: "2024-02-15" },
    { id: 2, name: "Event #2", date: "2024-03-22" }, // Most recent
  ]);

  const sortedDocs = [...documents].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const latestDocId = sortedDocs[0]?.id;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Intrusion Detection Events</h3>
      </div>

      <div className="space-y-4">
        {sortedDocs.map((doc) => {
          const isLatest = doc.id === latestDocId;

          return (
            <div
              key={doc.id}
              className="flex justify-between items-center gap-2"
            >
              <div
                className={`flex flex-row justify-between items-center gap-3 p-4 border rounded-lg shadow-sm w-full h-[75px] transition ${
                  isLatest
                    ? "bg-red-50 border-red-300"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex flex-col justify-center items-start">
                  <span className="font-semibold flex flex-row justify-center items-center">
                    {doc.name}{" "}
                    {isLatest && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-red-400 text-white rounded-full">
                        Latest
                      </span>
                    )}
                  </span>
                  <span className="font-medium text-gray-400">
                    Triggered at {new Date(doc.date).toLocaleDateString()}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition"
                >
                  See proof
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedDoc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold"
            >
              &times;
            </button>
            <h4 className="text-lg font-semibold mb-4">
              {selectedDoc.name} Proof
            </h4>
            <div className="w-full h-64 relative rounded overflow-hidden">
              <Image
                src={pdf}
                alt="Proof Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSecurity;
