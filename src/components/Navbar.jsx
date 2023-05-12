import React, { useState } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const PortfolioNavbar = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    const handleNavItemClick = () => {
        setExpanded(false);
    };
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" className='py-0' expanded={expanded}>
                <Container>
                    <Navbar.Brand><Image src={logo} width={80} fluid alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mb-2 mb-lg-0 fs-5">
                            <Nav.Item className="me-4">
                                <NavLink to="/" exact activeClassName="active" className="nav-link me-4" onClick={handleNavItemClick}>
                                    Home
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className="me-4">
                                <NavLink to="/portfolio" activeClassName="active" className="nav-link me-4" onClick={handleNavItemClick}>
                                    Portfolio
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className="me-4">
                                <NavLink to="/resume" activeClassName="active" className="nav-link me-4" onClick={handleNavItemClick}>
                                    Resume
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default PortfolioNavbar