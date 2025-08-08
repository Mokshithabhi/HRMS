import React from "react";
import {
  User,
  Users,
  Calendar,
  Settings,
  Moon,
  Sun,
  Search,
  Filter,
  Eye,
  Edit2,
  Save,
  X,
} from "lucide-react";

const Tab = ({ activeTab, setActiveTab, title, tabKey }) => {
  return (
    <button
      onClick={setActiveTab}
      className={`flex items-center p-2 text-sm font-medium rounded border-b-2 ${
        activeTab === tabKey
          ? "border-blue-500 text-blue-600 dark:bg-gray-800"
          : "border-transparent text-gray-500 hover:text-gray-700 dark:bg-gray-800 dark:hover:text-gray-300"
      }`}
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
