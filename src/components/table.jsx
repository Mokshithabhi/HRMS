const EmpTable = ({ data, darkMode }) => {
  return (
    <div
      className={`shadow-xl overflow-hidden sm:rounded-md ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
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
                Name
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{
                  color: darkMode ? "#d1d5db" : "#6b7280",
                }}
              >
                Email
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{
                  color: darkMode ? "#d1d5db" : "#6b7280",
                }}
              >
                Department
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{
                  color: darkMode ? "#d1d5db" : "#6b7280",
                }}
              >
                Role
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
            {data.map((employee) => (
              <tr key={employee.id}>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                  style={{
                    color: darkMode ? "#ffffff" : "#111827",
                  }}
                >
                  {employee.name}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {employee.email}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {employee.department}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {employee.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      employee.status === "Active"
                        ? darkMode
                          ? "bg-green-800 text-green-100"
                          : "bg-green-100 text-green-800"
                        : darkMode
                        ? "bg-red-800 text-red-100"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpTable;
