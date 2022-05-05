import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="navbar  ">
        <div className="container nav-item">
          <span className="logo">Lambabooking</span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
