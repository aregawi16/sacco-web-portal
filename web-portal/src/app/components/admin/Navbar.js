import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import logoRight from '../assets/logo-right.jpg';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/admin" className="d-flex align-items-center">
  <img
    src={logoRight}
    width="50"
    height="50"
    className="d-inline-block align-top"
    alt="Logo"
  />
  <h6 className="ms-2 mb-0">SACCO</h6>
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => document.body.classList.toggle('sidebar-icon-only')}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Right side content */}
            <Nav.Link href="#notifications">
              <FontAwesomeIcon icon={faBell} />
            </Nav.Link>
            <Nav.Link href="#signout">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Nav.Link>
            <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;