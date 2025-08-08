import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (!user) {
    console.log("User not found, redirecting to login");
  }
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
}
