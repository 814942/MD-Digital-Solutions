import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.png";

const NavBar = () => {
  return (
    <div className="nav-center">
      <Link to="">
        <img src={logo} alt="LOGO" />
      </Link>
      <div className="nav-btn">
        <Link to="/R2">
          <button>R2</button>
        </Link>
        <Link to="/R3">
          <button>R3</button>
        </Link>
        <Link to="/R4">
          <button>R4</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
