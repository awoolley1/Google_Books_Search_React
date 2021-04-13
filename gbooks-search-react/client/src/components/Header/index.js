import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";


function Header(props) {
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Google Books</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Search</Nav.Link>
      <Nav.Link href="#link">Saved</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </>
  );
}

export default Header;