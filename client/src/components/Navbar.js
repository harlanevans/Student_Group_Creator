import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { NavText } from "../styles/Styled";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHover = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar-cont">
      <div className="nav-left">
        <NavLink to="/" className="nav-link">
          <div className="nav-hover">
            <NavText>Home</NavText>
          </div>
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/cohorts" className="nav-link">
          <div className="nav-hover">
            <NavText>Cohorts</NavText>
          </div>
        </NavLink>
        <NavLink to="/students" className="nav-link">
          <div className="nav-hover">
            <NavText>Students</NavText>
          </div>
        </NavLink>
        <NavLink to="/groups" className="nav-link">
          <div className="nav-hover">
            <NavText>Groups</NavText>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

// How to do onHover with hooks and inline styling.
// style={toggle === false ? styles.item : styles.itemTwo} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}

export default Navbar;
