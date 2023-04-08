import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="py-4 navBar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
        <img
              alt="logo"
              src="https://tevily-nextjs.vercel.app/_next/static/media/logo-1.279e19a3.png"
              width="135px"
              height=""
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navBar_items">
          <Nav className="me-auto ms-auto fs-5">
          <Nav className="px-lg-2">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            </Nav>
            <NavDropdown title="Destination" className="collasible-nav-dropdown px-lg-2">
              <NavDropdown.Item as={NavLink} to="/destination/destinationDetails">Destination Details</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tours" className="collasible-nav-dropdown px-lg-2">
              <NavDropdown.Item as={NavLink} to="/tours/tourList">Tours Lists</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tours/tourDetails"> Another Tours Details</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" className="collasible-nav-dropdown px-lg-2">
              <NavDropdown.Item as={NavLink} to="/pages/about">About</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="News" className="collasible-nav-dropdown px-lg-2">
              <NavDropdown.Item as={NavLink} to="/news/newsDetails">News Details</NavDropdown.Item>
            </NavDropdown>
            <Nav className="px-lg-2">
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/"><i className="bi bi-search searchBar"></i></Nav.Link>
            <Nav.Link as={NavLink} to="/"><i className="bi bi-person user"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavBar