import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
        <header>
        <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">Malicious Checker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
            {/* <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
 
        </>
    )
}

export default NavBar
