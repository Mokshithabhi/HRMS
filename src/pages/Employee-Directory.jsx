import React, { useEffect, useMemo, useState } from "react";
import { useDataFetching } from "../services/useData-feching-hook";
import { Search, Filter } from "lucide-react";
import EmpTable from "../components/table";
import { EmployeeDirectoryUrl } from "../services/url";
import Loader from "../components/loader";

const EmployeeDirectory = () => {
  const {
    data: employees,
    loading,
    error,
  } = useDataFetching(`${EmployeeDirectoryUrl}`);

  const [searchTerm, setSearchTerm] = useState("");
  const [debounce, setDebounce] = useState("");
  const [filteredDepartment, setFilteredDepartment] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredEmployee = useMemo(() => {
    return (employees || []).filter((employee) => {
      const matchesSearch =
        employee.name.includes(debounce.toLowerCase()) ||
        employee.email.includes(debounce.toLowerCase());

      const matchedFilter =
        !filteredDepartment || employee.department === filteredDepartment;
      return matchesSearch && matchedFilter;
    });
  }, [employees, debounce, filteredDepartment]);

  const departments = [...new Set(employees?.map((emp) => emp.department))];

  if (loading)
    return (
      <div>
        <Loader />{" "}
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <select
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            value={filteredDepartment}
            onChange={(e) => setFilteredDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>
      <EmpTable data={filteredEmployee} />
    </div>
  );
};

export default EmployeeDirectory;
