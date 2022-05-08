import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  SagarBika
                </NavLink>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => ({
                            fontWeight : isActive ?  "bold": "normal",
                            borderBottom: isActive ? "2px solid  #565387" : "none",
                        })}
                        className="nav-link active "
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => ({
                            fontWeight : isActive ?  "bold": "normal",
                            borderBottom: isActive ? "2px solid  #565387" : "none",
                        })}
                        className="nav-link"
                        to="/Service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => ({
                            fontWeight : isActive ?  "bold": "normal",
                            borderBottom: isActive ? "2px solid  #565387" : "none",
                        })}
                       
                        className="nav-link"
                        to="/About"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => ({
                            fontWeight : isActive ?  "bold": "normal",
                            borderBottom: isActive ? "2px solid  #565387" : "none",
                        })}
                       
                        className="nav-link"
                        to="/Contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
