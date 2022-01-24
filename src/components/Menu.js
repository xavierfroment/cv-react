import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu() {
  return (
    <Fragment>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top" >
        <Navbar.Brand>Xavier FROMENT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-center">
            <Nav.Link eventKey="1" as={Link} className="nav-link" to="/">Accueil</Nav.Link>
            <Nav.Link eventKey="2" as={Link} className="nav-link" to="/about">A Propos</Nav.Link>            
            <Nav.Link eventKey="3" as={Link} className="nav-link" to="/skills">Compétences</Nav.Link>
            <Nav.Link eventKey="4" as={Link} className="nav-link" to="/career">Parcours</Nav.Link>
            <Nav.Link eventKey="5" as={Link} className="nav-link" to="/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  )
}
export default Menu;