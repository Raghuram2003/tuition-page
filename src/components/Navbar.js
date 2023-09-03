import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
      id="main-nav"
    >
      <div className="container-fluid main-div">
        <Link className="navbar-brand" to="/">
          <p id="title">Mathspoint</p>
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
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Science
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/biology">
                    <p className="dropdown-menu-p">Biology</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/physics">
                    <p className="dropdown-menu-p">physics</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/chemistry">
                    <p className="dropdown-menu-p">Chemistry</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Maths
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/general-maths">
                    <p className="dropdown-menu-p">General Maths</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/business-maths">
                    <p className="dropdown-menu-p">Business Maths</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
          <span class="navbar-text"><button className="btn btn-light login">Login</button></span>
        </div>
      </div>
    </nav>
  );
};
