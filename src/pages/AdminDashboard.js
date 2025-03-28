import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // ✅ Redirect to login if user is not authenticated
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {/* Rest of the dashboard */}
    </div>
  );
};

export default AdminDashboard;
