import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'; // FaUserCircle is correctly imported here

function HeadNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "80px" }}>
      <Container>
        {/* Person icon at the left end using react-icons/fa */}
        <FaUserCircle
          style={{ color: 'white', fontSize: '30px', marginRight: '15px' }} // Adjust size and color as needed
        />

        <Navbar.Brand href="#home" style={{ marginLeft: "10px" }}>BOOK INFORMATION MANAGEMENT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          {/* Right-aligned navigation items */}
          <Nav className="ms-auto">
            <NavLink
              to="/EditAccount" 
              className={({ isActive }) => "link " + (isActive ? "active" : "")}
              style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}
            >
              Account Settings
            </NavLink>  

            {/* Logout Icon/Link using react-icons/fa */}
            <NavLink
              to="/logout" // Placeholder for logout route/action
              className={({ isActive }) => "link " + (isActive ? "active" : "")}
              style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', marginLeft: '10px' }}
            >
                Logout
              <FaSignOutAlt /> {/* React icon component */}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeadNavBar;
