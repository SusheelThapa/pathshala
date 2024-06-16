// Dashboard.tsx
import React from "react";
import { useAuth } from "../components/AuthContext"; 
import { Navigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { token, loading } = useAuth(); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }
const username = localStorage.getItem("username")
  return <h1>Dashboard: Protected Content Here, Loggedin user: {username}</h1>;
};

export default Dashboard;
