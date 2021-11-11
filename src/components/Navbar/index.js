import React from "react";
import { Link } from "gatsby";
import useDropdown from "../../hooks/useDropdown";

const Navbar = () => {
  const { toggleMenuRef, toggle, handleToggle, collapsing } = useDropdown();

  return (
    <nav className="navbar container" ref={toggleMenuRef}>
      <div className="navbar__brand">
        <Link className="brand-logo" to="/" />
        <button
          className="navbar__hamburger"
          type="button"
          onClick={() => handleToggle(toggle)}
        >
          <div />
        </button>
      </div>
      <ul
        className={`navbar__nav ${toggle ? "show" : ""} ${
          collapsing ? "collapsing" : ""
        }`}
        onClick={() => {
          if (window.innerWidth < 767) handleToggle(toggle);
        }}
      >
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/#projects">
            Projects
          </Link>
        </li>

        <li className="nav-item nav-item--has-dropdown">
          <span className="nav-link dropdown-toggle" to="/">
            Projects
          </span>
          <ul className="dropdown">
            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://github.com/CentaurusInfra/arktos/"
                target="_blank"
                rel="noreferrer"
              >
                Arktos
              </a>
            </li>

            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://github.com/CentaurusInfra/mizar"
                target="_blank"
                rel="noreferrer"
              >
                Mizar
              </a>
            </li>

            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://github.com/CentaurusInfra/fornax/"
                target="_blank"
                rel="noreferrer"
              >
                Fornax
              </a>
            </li>

            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://github.com/CentaurusInfra/alnair/"
                target="_blank"
                rel="noreferrer"
              >
                Alnair

            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://github.com/CentaurusInfra/global-resource-scheduler"
                target="_blank"
                rel="noreferrer"
              >
                Global Scheduler

              </a>
            </li>


        <li className="nav-item nav-item--has-dropdown">
          <span className="nav-link dropdown-toggle" to="/">
            Documentation
          </span>
          <ul className="dropdown">
            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://github.com/CentaurusInfra/arktos/wiki"
                target="_blank"
                rel="noreferrer"
              >
                Arktos
              </a>
            </li>

            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://mizar.readthedocs.io/en/latest/"
                target="_blank"
                rel="noreferrer"
              >
                Mizar
              </a>
            </li>

            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://github.com/CentaurusInfra/fornax/blob/main/docs/fornax-design/530_design.md"
                target="_blank"
                rel="noreferrer"
              >
                Fornax
              </a>
            </li>

            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://github.com/CentaurusInfra/alnair/wiki"
                target="_blank"
                rel="noreferrer"
              >
                Alnair

            <li className="dropdown-item">
              <a
                className="nav-link"
                href="https://github.com/CentaurusInfra/global-resource-scheduler#global-scheduler"
                target="_blank"
                rel="noreferrer"
              >
                Global Scheduler

              </a>
            </li>

          </ul>
        </li>


        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/blog">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/resources">
            Resources
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
