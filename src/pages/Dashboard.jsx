import { Moon, Sun } from "lucide-react";
import Tab from "../components/tab";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import LeaveRequests from "./Leave-Requests";
import EmployeeDirectory from "./Employee-Directory";
import Profile from "./profile";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("employees");
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  const { user, logout } = useAuth();

  useEffect(() => {
    // Force update document styling
    const updateTheme = () => {
      const html = document.documentElement;
      const body = document.body;

      if (darkMode) {
        html.classList.add("dark");
        html.style.backgroundColor = "#111827";
        body.style.backgroundColor = "#111827";
        body.style.color = "#f9fafb";
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        html.style.backgroundColor = "#f9fafb";
        body.style.backgroundColor = "#f9fafb";
        body.style.color = "#111827";
        localStorage.setItem("theme", "light");
      }
    };

    updateTheme();

    setTimeout(updateTheme, 0);
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (shouldBeDark !== darkMode) {
      setDarkMode(shouldBeDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handlelogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
        color: darkMode ? "#f9fafb" : "#111827",
        minHeight: "100vh",
      }}
    >
      <header
        className={`shadow-sm ${darkMode ? "bg-gray-800" : "bg-white"}`}
        style={{
          backgroundColor: darkMode ? "#1f2937" : "#ffffff",
        }}
      >
        <div className="  px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              HRMS Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-colors ${
                  darkMode
                    ? "text-gray-400 hover:text-gray-300 hover:bg-gray-700"
                    : "text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                }`}
                style={{
                  backgroundColor: "transparent",
                }}
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Welcome,{" "}
                {user?.displayName || user?.email?.split("@")[0] || "User"}
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
        <nav className="flex space-x-4 mb-8 flex-wrap">
          <Tab
            activeTab={activeTab}
            setActiveTab={() => setActiveTab("employees")}
            title="Employee Directory"
            tabKey="employees"
            darkMode={darkMode}
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={() => setActiveTab("leaves")}
            title="Leave Requests"
            tabKey="leaves"
            darkMode={darkMode}
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={() => setActiveTab("profile")}
            title="Profile"
            tabKey="profile"
            darkMode={darkMode}
          />
        </nav>

        {activeTab === "employees" && <EmployeeDirectory darkMode={darkMode} />}
        {activeTab === "leaves" && <LeaveRequests darkMode={darkMode} />}
        {activeTab === "profile" && <Profile darkMode={darkMode} />}
      </div>
    </div>
  );
};

export default Dashboard;
