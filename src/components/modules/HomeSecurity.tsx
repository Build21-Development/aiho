import { useEffect, useState } from "react";
import Image from "next/image";
import { getHomeSecurityEvents } from "src/api";
import { useParams } from "next/navigation";

const HomeSecurity = () => {
  const { propertyId } = useParams() as {
    propertyId: string;
  };

  const [selectedDoc, setSelectedDoc] = useState<null | {
    timestamp: number;
    base64img: string;
  }>(null);

  const [events, setEvents] = useState<
    {
      timestamp: number;
      base64img: string;
    }[]
  >([]);
  const [lastHomeSecurityPing, setLastHomeSecurityPing] = useState<number>(0);

  const refreshEvents = () =>
    getHomeSecurityEvents(Number(propertyId), 10).then((res) => {
      if (res.status === "no_event") {
        setEvents([]);
        return;
      }
      setLastHomeSecurityPing(res.last_home_security_ping);
      setEvents(res.events.sort((a, b) => b.timestamp - a.timestamp));
    });

  useEffect(() => {
    refreshEvents();
    setInterval(() => {
      refreshEvents();
    }, 20_000);
  }, [propertyId]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Intrusion Detection Events</h3>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          Last Seen:{" "}
          {new Date(lastHomeSecurityPing * 1000).toLocaleDateString()}{" "}
          {new Date(lastHomeSecurityPing * 1000).toLocaleTimeString()}
        </h3>
      </div>

      <div className="space-y-4">
        {events.map((doc, i) => {
          const isLatest = i === 0;

          return (
            <div
              key={doc.timestamp}
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
                    Event {i + 1}{" "}
                    {isLatest && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-red-400 text-white rounded-full">
                        Latest
                      </span>
                    )}
                  </span>
                  <span className="font-medium text-gray-400">
                    Triggered at{" "}
                    {new Date(doc.timestamp * 1000).toLocaleDateString()}{" "}
                    {new Date(doc.timestamp * 1000).toLocaleTimeString()}
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
            <h4 className="text-lg font-semibold mb-4">Event Proof</h4>
            <div className="w-full h-64 relative rounded overflow-hidden">
              <Image
                src={`data:image/png;base64,${selectedDoc.base64img}`}
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
