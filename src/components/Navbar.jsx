import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import logo from '../assets/logo.png'

const PortfolioNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" className='py-1'>
                <Container>
                    <Navbar.Brand><Image src={logo} width={80} fluid alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mb-2 mb-lg-0 fs-5">
                            <Nav.Item className="me-4">
                                <Nav.Link aria-current="page" href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-4">
                                <Nav.Link aria-current="page" href="/projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-4">
                                <Nav.Link aria-current="page" href="/resume">Resume</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="me-4">
                                <Nav.Link aria-current="page" href="/contact">Contact Me</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default PortfolioNavbar