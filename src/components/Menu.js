import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Menu.css'
import { FaInfoCircle } from 'react-icons/fa';

function Menu() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="light" expand="lg">
        <h1 className="text-light m-auto">Développeur Web Junior</h1>
        <Nav>
          <NavLink className="text-reset mr-2" to="/about"><FaInfoCircle style={{color:"#ccc"}}/></NavLink>
        </Nav>
      </Navbar>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
        <Navbar.Brand href="/">Xavier FROMENT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/" exact>Accueil</NavLink>
            <NavLink className="nav-link" to="/knowledge">Connaissances</NavLink>
            <NavLink className="nav-link" to="/career">Parcours</NavLink>
            <NavLink className="nav-link" to="/skills">Compétences</NavLink>
            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  )
}
export default Menu;
