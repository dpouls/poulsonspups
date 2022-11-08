import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
function Header() {
  let location = useLocation();
  console.log("location", location);

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="d-flex justify-content-between">
        <Link className="header-links text-secondary" to="/">
          <Navbar.Brand>
            <img
              height="190"
              src="logo.jpeg"
              alt=""
              className="header-logo"
            />
            
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <div className="nav-link">
              <Link
                className={` header-links${
                  location.pathname === "/" ? "-active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </div>
            <div className="nav-link">
              <Link
                className={` header-links${
                  location.pathname === "/parents"
                    ? "-active"
                    : ""
                }`}
                to="/parents"
              >
                Mommas and Papas
              </Link>
            </div>
            <div className="nav-link">
              <Link
                className={` header-links${
                  location.pathname === "/puppies" ? "-active" : ""
                }`}
                to="/puppies"
              >
               Puppies
              </Link>
            </div>
            <div className="nav-link">
              <Link
                className={` header-links${
                  location.pathname === "/about" ? "-active" : ""
                }`}
                to="/about"
              >
About
              </Link>
            </div>
            <div className="nav-link">
              <Link
                className={` header-links${
                  location.pathname === "/contact" ? "-active" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
