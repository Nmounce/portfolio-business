import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
    FaHome,
    FaHandshake,
    FaMountain,
    FaLocationArrow,
    FaTree
} from 'react-icons/fa';

function navBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavBar] = useState(false);

    function smoothScroll() {
        if (window.scrollY >= 20) {
            updateNavBar(true);
        } else {
            updateNavBar(false);
        }
    }

    window.addEventListener("scroll", smoothScroll);

    return (
        <Navbar
            expanded={expand}
            fixed="left"
            expand="md"
            className={navColor ? 'sticky' : 'navbar'}
        >
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="img-fluid logo" alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls='responsive-navbar-nav'
                    onClick={() => {
                        updateExpanded(expand ? false : 'expanded');
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse className="responsive-navbar-nav">
                    <Nav className='ml-auto' defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <FaHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                                <FaMountain style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                                <FaTree style={{ marginBottom: "2px" }} /> Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                                <FaLocationArrow style={{ marginBottom: "2px" }} /> Contact
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                                <FaHandshake style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navBar;
