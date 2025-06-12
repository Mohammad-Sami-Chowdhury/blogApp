import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    // Redirect to frontend login page
    window.location.href = "http://localhost:5173/login";
    return null;
  }
  return children;
};

export default ProtectedRoute;