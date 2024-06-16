import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../components/AuthContext";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/DashBoard";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
