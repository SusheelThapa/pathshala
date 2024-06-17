// components/Dashboard.tsx
import React from 'react';
import useAuth from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div>Redirecting...</div>; // Optional: Implement a better redirect logic or a loading spinner
  }

  return <h1>Dashboard: Protected Content Here</h1>;
};

export default Dashboard;
