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
                    {/* <Link to="/"><Navbar className='navName' href="#home">Dream Team Trading</Navbar></Link> */}
                    {/* -----this code is for a logo----- */}

                    <Link to="/"><Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            className="d-inline-block align-top navLogo"
                        />
                    </Navbar.Brand></Link>

                    {/* -----this code is for a logo----- */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            {/* <Nav.Link href="#deets">Twitter</Nav.Link> */}
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
