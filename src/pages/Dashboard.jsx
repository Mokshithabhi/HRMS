import { Moon, Sun } from "lucide-react";
import Tab from "../components/tab";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import LeaveRequests from "./Leave-Requests";
import EmployeeDirectory from "./Employee-Directory";
import Profile from "./profile";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("employees");
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    // Check localStorage for theme preference
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handlelogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className=" bg-white dark:bg-gray-800 shadow-sm">
        <div className="  px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              HRMS Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              {/* <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button> */}
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Welcome, {user?.displayName ? user.displayName : "User"}
              </span>
              <button
                onClick={handlelogout}
                className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex space-x-8 mb-8 flex-wrap">
          <Tab
            activeTab={activeTab}
            setActiveTab={() => setActiveTab("employees")}
            title="Employee Directory"
            tabKey="employees"
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={() => setActiveTab("leaves")}
            title="Leave Requests"
            tabKey="leaves"
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={() => setActiveTab("profile")}
            title="Profile"
            tabKey="profile"
          />
        </nav>

        {activeTab === "employees" && <EmployeeDirectory />}
        {activeTab === "leaves" && <LeaveRequests />}
        {activeTab === "profile" && <Profile />}
      </div>
    </div>
  );
};

export default Dashboard;
