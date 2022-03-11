import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation().pathname;
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark px-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NewsZ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location === "/" && "active"} ${location === "/general" && "active"}`} to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "/entertainment" && "active"}`} to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "/business" && "active"}`} to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "/health" && "active"}`} to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "/science" && "active"}`} to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "/sports" && "active"}`} to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location === "/technology" && "active"}`} to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
