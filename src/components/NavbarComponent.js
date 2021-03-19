import React from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../logo.png'

function NavbarComponent()
    {
    return (
        <Navbar expand="lg" className="navbar-color" variant="dark">
            <LinkContainer to="/">
                <Navbar.Brand >
                    <img
                        src= { Logo }
                        width="50"
                        height="50"
                        className="d-inline-block align-top logo"
                        alt="Agriculure Logo"
                    />
                </Navbar.Brand>
            </LinkContainer>
                
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto navbar-content">
                    <LinkContainer to="/login">
                        <Nav.Link className="ml-4 mr-4">Login/Sign Up</Nav.Link>
                    </LinkContainer>    
                            
                    <NavDropdown className="ml-4 mr-4" title="Categories" id="basic-nav-dropdown">
                                
                        <NavDropdown.Item>Cereals & Pulses</NavDropdown.Item>
                            
                        <NavDropdown.Divider />
                            
                        <NavDropdown.Item>Vegetables</NavDropdown.Item>
                            
                        <NavDropdown.Divider />
                            
                        <NavDropdown.Item>Fruits</NavDropdown.Item>
                            
                    </NavDropdown>

                    <LinkContainer to="/orders">
                        <Nav.Link  className="ml-4 mr-4">Orders</Nav.Link>
                    </LinkContainer>  

                    <LinkContainer to="/payment">
                        <Nav.Link className="ml-4 mr-4">My Wallet</Nav.Link>
                    </LinkContainer>  

                    <LinkContainer to="/sell">
                        <Nav.Link className="ml-4 mr-4">Sell</Nav.Link>
                    </LinkContainer>  

                    <LinkContainer to="/statistics">
                        <Nav.Link className="ml-4 mr-4">Statistics</Nav.Link>
                    </LinkContainer>             
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default NavbarComponent;