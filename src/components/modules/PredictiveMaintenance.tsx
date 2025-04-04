import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getPredictiveMaintenanceEvents,
  getPredictiveMaintenanceMeasurements,
} from "src/api";

const PredictiveMaintenance = () => {
  const { propertyId } = useParams() as {
    propertyId: string;
  };

  const [events, setEvents] = useState<
    ({
      timestamp: number;
    } & ({ temperature: number } | { humidity: number }))[]
  >([]);
  const [measurements, setMeasurements] = useState<
    {
      read_time: string;
      temperature: number;
      humidity: number;
    }[]
  >([]);

  const refreshEvents = () => {
    getPredictiveMaintenanceEvents(Number(propertyId), 10).then((res) => {
      if (res.status === "no_event") {
        setEvents([]);
        return;
      }
      setEvents(res.events.sort((a, b) => b.timestamp - a.timestamp));
    });
    getPredictiveMaintenanceMeasurements(Number(propertyId)).then((res) => {
      if (res.status === "no_event") {
        setMeasurements([]);
        return;
      }
      setMeasurements(
        res.measurements.sort((a, b) => b.timestamp - a.timestamp),
      );
    });
  };

  useEffect(() => {
    refreshEvents();
    setInterval(() => {
      refreshEvents();
    }, 60_000);
  }, [propertyId]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Anomalies detected</h3>
      </div>

      <div className="space-y-4">
        {events.map((doc) => (
          <div
            key={doc.timestamp}
            className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-white"
          >
            <span className="font-medium">
              {"temperature" in doc
                ? `Temperature: ${doc.temperature}°C`
                : `Humidity: ${doc.humidity}%`}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Previous Measurements</h3>
      </div>

      <div className="space-y-4">
        {measurements.map((doc) => (
          <div
            key={doc.read_time}
            className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-white"
          >
            <span className="font-medium">
              Temperature: {doc.temperature}°C - Humidity: {doc.humidity}% -{" "}
              {new Date(doc.read_time).toLocaleDateString()}{" "}
              {new Date(doc.read_time).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictiveMaintenance;
