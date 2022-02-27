import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "./demo.png";
import "./Header1.css";
function Header1() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="sticky-top">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="100"
                height="25"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link to="/about" className="nav-link text-dark">
                About us
              </Link>
              <Link to="/about" className="nav-link text-dark">
                Concerns
              </Link>
              <Link to="/about" className="nav-link text-dark">
                News & Events
              </Link>
              <Link to="/about" className="nav-link text-dark">
                Contact
              </Link>
              <Link to="/about" className="nav-link text-dark join-team">
                Join Our Team
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header1;
