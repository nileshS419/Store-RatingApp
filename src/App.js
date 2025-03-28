import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import StoreOwnerDashboard from "./pages/StoreOwnerDashboard";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user-dashboard"
            element={<PrivateRoute element={<UserDashboard />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
