import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../components/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/DashBoard";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact-us" element={<ContactUs />} />

          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
