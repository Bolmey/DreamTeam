import React from 'react'
import './navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import logo from '../../images/dreamteamLogo.png'

export default function NavbarSection() {
    return (
        <div className='NavbarContainer'>
            <Navbar collapseOnSelect expand="lg" className="navbarColor">
                <Container>
                    <Link to="/"><Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#deets">Twitter</Nav.Link>
                            <Nav.Link eventKey={2} href="https://www.instagram.com/dream_team_trading/">
                                Instagram
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
