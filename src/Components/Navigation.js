import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./movie_app_logo-removebg-preview.png";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img alt="logo" src={logo} style={{ width: "50px" }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
