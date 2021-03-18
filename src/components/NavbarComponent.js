import React from 'react'
import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
function NavbarComponent(){

    return (
        <Navbar expand="lg" bg="success">
            <LinkContainer to="/">
                <Navbar.Brand >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Agriculure Logo"
                    />
                </Navbar.Brand>
            </LinkContainer>
                
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
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

                    <LinkContainer to="/orders">
                        <Nav.Link className="ml-4 mr-4">Statistics</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/orders">
                        <Nav.Link className="ml-4 mr-4">Statistics</Nav.Link>
                    </LinkContainer>               
                           
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default NavbarComponent;