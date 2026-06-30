import React, { useEffect, useState } from "react";
import AmbientBackground from "../../../components/motion/AmbientBackground.jsx";
import BloodDropLoader from "../../../components/motion/BloodDropLoader.jsx";
import Reveal from "../../../components/motion/Reveal.jsx";

const BloodRequestHistory = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(
        //   "http://localhost:5000/api/hospital/request-history"
        );

        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error("Failed to fetch request history", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-canvas">
        <AmbientBackground />
        <div className="relative flex flex-col items-center gap-3 text-muted">
          <BloodDropLoader size={12} />
          <p className="text-sm font-medium">Loading Request History...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-canvas p-6 md:p-8">
      <AmbientBackground />

      <div className="relative">
        <Reveal as="div" className="mb-8">
          <h1 className="font-display text-4xl font-normal text-ink">
            Blood Request History
          </h1>
          <p className="mt-1 text-muted">
            A record of all your past blood requests.
          </p>
        </Reveal>

        {requests.length === 0 ? (
          <Reveal as="div" delay={0.06} className="rounded-4xl border border-line bg-surface p-12 text-center shadow-soft">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary">
              <BloodDropLoader size={12} />
            </div>
            <p className="text-ink-soft">No request history found.</p>
          </Reveal>
        ) : (
          <Reveal as="div" delay={0.06} className="overflow-x-auto rounded-4xl border border-line bg-surface shadow-card">
            <table className="w-full">
              <thead className="border-b border-line bg-subtle">
                <tr className="text-left text-sm text-muted">
                  <th className="p-4 font-medium">Request ID</th>
                  <th className="p-4 font-medium">Blood Group</th>
                  <th className="p-4 font-medium">Units</th>
                  <th className="p-4 font-medium">Patient Name</th>
                  <th className="p-4 font-medium">Required Date</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr
                    key={request._id}
                    className="border-b border-line text-sm transition-colors last:border-0 hover:bg-subtle"
                  >
                    <td className="p-4 text-ink-soft">{request._id}</td>

                    <td className="p-4 font-semibold text-primary">
                      {request.bloodGroup}
                    </td>

                    <td className="p-4 text-ink">{request.units}</td>

                    <td className="p-4 text-ink">{request.patientName}</td>

                    <td className="p-4 text-ink-soft">
                      {new Date(
                        request.requiredDate
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          request.status === "Completed"
                            ? "bg-success-soft text-success"
                            : request.status === "Pending"
                            ? "bg-warning-soft text-warning"
                            : "bg-danger-soft text-danger"
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        )}
      </div>
    </div>
  );
};

export default BloodRequestHistory;
