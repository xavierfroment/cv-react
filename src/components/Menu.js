import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Menu.css'

function Menu() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
        <Navbar.Brand href="/">Xavier FROMENT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/" exact>Accueil</NavLink>
            <NavLink className="nav-link" to="/skills">Compétences</NavLink>
            <NavLink className="nav-link" to="/career">Parcours</NavLink>
            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            <NavLink className="nav-link" to="/about">A Propos</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  )
}
export default Menu;
