import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
      <h1 className="display-4 fw-bold text-primary">Welcome to StoreRatings</h1>
      <p className="lead text-secondary">
        Discover, review, and rate stores effortlessly.
      </p>
      <img
        src="https://source.unsplash.com/600x300/?shopping,store"
        alt="Store Illustration"
        className="img-fluid rounded shadow-lg my-3"
      />
      <p className="text-dark">Get started by logging in or signing up!</p>

      {/* Buttons for navigation */}
      <div className="d-flex gap-3 mt-3">
        <button className="btn btn-primary px-4" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn btn-outline-primary px-4" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
