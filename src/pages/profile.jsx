import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Edit2, Save, X } from "lucide-react";

const Profile = ({ darkMode }) => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || "User",
    email: user?.email || "User@gmail.com",
    department: user?.department || "Engineering",
    role: user?.role || "Software Engineer",
    phone: "123456789",
    address: "123 Main St, City, State 12345",
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setProfile({
      name: user?.name || "User",
      email: user?.email || "User@gmail.com",
      department: user?.department || "Engineering",
      role: user?.role || "Software Engineer",
      phone: "123456789",
      address: "123 Main St, City, State 12345",
    });
  };

  return (
    <div className="space-y-6">
      <div
        className="shadow-xl rounded-lg"
        style={{
          backgroundColor: darkMode ? "#1f2937" : "#ffffff",
        }}
      >
        <div
          className="px-6 py-4 border-b"
          style={{
            borderColor: darkMode ? "#374151" : "#e5e7eb",
          }}
        >
          <div className="flex justify-between items-center">
            <h3
              className="text-lg font-medium"
              style={{
                color: darkMode ? "#ffffff" : "#111827",
              }}
            >
              Profile Information
            </h3>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center px-3 py-2 text-sm transition-colors"
                style={{
                  color: darkMode ? "#60a5fa" : "#2563eb",
                }}
              >
                <Edit2 className="mr-1 h-4 w-4" />
                Edit
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center px-3 py-2 text-sm transition-colors"
                  style={{
                    color: darkMode ? "#34d399" : "#059669",
                  }}
                >
                  <Save className="mr-1 h-4 w-4" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center px-3 py-2 text-sm transition-colors"
                  style={{
                    color: darkMode ? "#9ca3af" : "#6b7280",
                  }}
                >
                  <X className="mr-1 h-4 w-4" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{
                  color: darkMode ? "#d1d5db" : "#374151",
                }}
              >
                Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#ffffff",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "#ffffff" : "#111827",
                  }}
                />
              ) : (
                <p style={{ color: darkMode ? "#ffffff" : "#111827" }}>
                  {profile.name}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{
                  color: darkMode ? "#d1d5db" : "#374151",
                }}
              >
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#ffffff",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "#ffffff" : "#111827",
                  }}
                />
              ) : (
                <p style={{ color: darkMode ? "#ffffff" : "#111827" }}>
                  {profile.email}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{
                  color: darkMode ? "#d1d5db" : "#374151",
                }}
              >
                Department
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.department}
                  onChange={(e) =>
                    setProfile({ ...profile, department: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#ffffff",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "#ffffff" : "#111827",
                  }}
                />
              ) : (
                <p style={{ color: darkMode ? "#ffffff" : "#111827" }}>
                  {profile.department}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{
                  color: darkMode ? "#d1d5db" : "#374151",
                }}
              >
                Role
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.role}
                  onChange={(e) =>
                    setProfile({ ...profile, role: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#ffffff",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "#ffffff" : "#111827",
                  }}
                />
              ) : (
                <p style={{ color: darkMode ? "#ffffff" : "#111827" }}>
                  {profile.role}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{
                  color: darkMode ? "#d1d5db" : "#374151",
                }}
              >
                Phone
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#ffffff",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "#ffffff" : "#111827",
                  }}
                />
              ) : (
                <p style={{ color: darkMode ? "#ffffff" : "#111827" }}>
                  {profile.phone}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{
                  color: darkMode ? "#d1d5db" : "#374151",
                }}
              >
                Address
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.address}
                  onChange={(e) =>
                    setProfile({ ...profile, address: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#ffffff",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "#ffffff" : "#111827",
                  }}
                />
              ) : (
                <p style={{ color: darkMode ? "#ffffff" : "#111827" }}>
                  {profile.address}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
