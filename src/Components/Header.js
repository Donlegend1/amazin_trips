import React, { useState } from "react";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p>
                  <i className="fa fa-envelope mr-2" />
                  shedrackogwuche5@gmail.com
                </p>
                <p className="text-body px-3">|</p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />
                  +2348147122184
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a
                  className="text-primary px-3"
                  href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="text-primary px-3"
                  href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="text-primary px-3"
                  href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="text-primary px-3"
                  href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="text-primary pl-3"
                  href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div
          className="container-lg position-relative p-0 px-lg-3"
          style={{ zIndex: "9" }}>
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
            <a
              href="/"
              className="navbar-brand">
              <h1 className="m-0 text-primary">
                <span className="text-dark">Desti</span>nation
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              onClick={toggleNavbar}>
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse justify-content-between px-3 ${
                isCollapsed ? "" : "show"
              }`}
              id="navbarCollapse">
              <div className="navbar-nav ml-auto py-0">
                <a
                  href="/"
                  className="nav-item nav-link active">
                  Home
                </a>
                <a
                  href="/destinations"
                  className="nav-item nav-link">
                  Destinations
                </a>
                <a
                  href="/about"
                  className="nav-item nav-link">
                  About
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
}
