import React from "react";
import "./Navbar.css"

const Navbar = ({ props }) => {
  return (
    <div className="container">
      <h2 className="left-element">Dashboard</h2>
      <div className="right-component">
        <input type="text" className="searchbar" placeholder="Search" />
        <p>hello</p>
      </div>
    </div>
  );
};

export default Navbar;
