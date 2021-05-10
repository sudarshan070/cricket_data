import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  return (
    <nav className="navbar rounded mt-2">
      <NavLink activeClassName="active" isActive={checkActive} to="/">
        OVERVIEW
      </NavLink>
      <NavLink to="/stats">STATS</NavLink>
      <NavLink to="/records">RECORDS</NavLink>
      <NavLink to="/matches">MATCHES</NavLink>
      <NavLink to="/profile">PROFILE</NavLink>
    </nav>
  );
}
