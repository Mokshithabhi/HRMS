import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function App() {
  const { user } = useAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
