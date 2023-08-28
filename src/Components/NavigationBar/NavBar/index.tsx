import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/counter" className="nav-link">
            Counter
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/time" className="nav-link">
            Time
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/listview" className="nav-link">
            List View
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link">
            User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
