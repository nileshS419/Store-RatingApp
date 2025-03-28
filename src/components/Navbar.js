import { Link } from "react-router-dom";

function Navbar() {
  return (
    
<nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">
      StoreRatings <span style={{ color: "gold" }}>★</span>
    </Link>
  



        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
