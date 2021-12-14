import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-flex-start justify-between flex-wrap p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavLink to="/orders">Ordenes</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
