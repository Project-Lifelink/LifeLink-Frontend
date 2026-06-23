import React, { useEffect, useState } from "react";

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
      <div className="p-6 text-center text-gray-600">
        Loading Request History...
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Blood Request History
      </h1>

      {requests.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          No request history found.
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="p-3 text-left">Request ID</th>
                <th className="p-3 text-left">Blood Group</th>
                <th className="p-3 text-left">Units</th>
                <th className="p-3 text-left">Patient Name</th>
                <th className="p-3 text-left">Required Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr
                  key={request._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">{request._id}</td>

                  <td className="p-3 font-semibold text-red-600">
                    {request.bloodGroup}
                  </td>

                  <td className="p-3">{request.units}</td>

                  <td className="p-3">{request.patientName}</td>

                  <td className="p-3">
                    {new Date(
                      request.requiredDate
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        request.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : request.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BloodRequestHistory;