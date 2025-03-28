import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Dashboard Loaded. User data:", user);
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <h2>Loading...</h2>;  // ✅ Ensures proper user loading
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? <p>Welcome, {user.user.email}!</p> : <p>User not found.</p>}
    </div>
  );
};

export default Dashboard;
