import { useDataFetching } from "../services/useData-feching-hook";
import { LeaveRequestsUrl } from "../services/url";
import Loader from "../components/loader";

const LeaveRequests = ({ darkMode }) => {
  const {
    data: leaves,
    error,
    loading,
  } = useDataFetching(`${LeaveRequestsUrl}`);

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return darkMode
          ? "bg-green-800 text-green-100"
          : "bg-green-100 text-green-800";
      case "Rejected":
        return darkMode ? "bg-red-800 text-red-100" : "bg-red-100 text-red-800";
      case "Pending":
        return darkMode
          ? "bg-yellow-800 text-yellow-100"
          : "bg-yellow-100 text-yellow-800";
      default:
        return darkMode
          ? "bg-gray-800 text-gray-100"
          : "bg-gray-100 text-gray-800";
    }
  };

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-6">
      <div
        className="shadow-xl overflow-hidden sm:rounded-md"
        style={{
          backgroundColor: darkMode ? "#1f2937" : "#ffffff",
        }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead
              className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}
              style={{
                backgroundColor: darkMode ? "#374151" : "#f9fafb",
              }}
            >
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  Employee
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  Leave Type
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  Start Date
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  End Date
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody
              className={`divide-y ${
                darkMode
                  ? "bg-gray-800 divide-gray-700"
                  : "bg-white divide-gray-200"
              }`}
              style={{
                backgroundColor: darkMode ? "#1f2937" : "#ffffff",
              }}
            >
              {leaves?.map((leave) => (
                <tr key={leave.id}>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                    style={{
                      color: darkMode ? "#ffffff" : "#111827",
                    }}
                  >
                    {leave.employee}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm"
                    style={{
                      color: darkMode ? "#d1d5db" : "#6b7280",
                    }}
                  >
                    {leave.leaveType}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm"
                    style={{
                      color: darkMode ? "#d1d5db" : "#6b7280",
                    }}
                  >
                    {leave.startDate}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm"
                    style={{
                      color: darkMode ? "#d1d5db" : "#6b7280",
                    }}
                  >
                    {leave.endDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        leave.status
                      )}`}
                    >
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequests;
