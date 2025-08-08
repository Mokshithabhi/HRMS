import React from "react";
import { User, Users, Calendar } from "lucide-react";

const Tab = ({ activeTab, setActiveTab, title, tabKey, darkMode }) => {
  const isActive = activeTab === tabKey;
  return (
    <button
      onClick={setActiveTab}
      className={`flex items-center p-2 text-sm font-medium rounded  border-b-2 transition-colors ${
        isActive ? "border-blue-500" : "border-gray-300 hover:border-gray-300"
      }`}
      style={{
        color: isActive ? "#3b82f6" : darkMode ? "#9ca3af" : "#6b7280",
        backgroundColor: darkMode ? "#1f2937" : "transparent",
      }}
    >
      <TabIcons activeTab={tabKey} />
      <span>{title}</span>
    </button>
  );
};

export default Tab;
export const TabIcons = ({ activeTab }) => {
  switch (activeTab) {
    case "employees":
      return <Users className="h-4 w-4 mr-2" />;
    case "leaves":
      return <Calendar className="h-4 w-4 mr-2" />;
    case "profile":
      return <User className="h-4 w-4 mr-2" />;
    default:
      return null;
  }
};
