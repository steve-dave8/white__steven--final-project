import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
import { useHistory } from "react-router-dom"

const Navigation = () => {
    let status = sessionStorage.getItem('token') 

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const [token, setToken] = useState(status)
    let history = useHistory()

    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        setToken(false)
        history.push("/")
    }

    return (
        <header>
            <Navbar dark color="dark" expand="md" fixed="top">
                <Container>
                    <NavbarBrand href="">Example Portfolio Site</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/contact">Contact</NavLink>
                            </NavItem>
                            {token
                                ? (<><NavItem className="private">
                                        <NavLink tag={RouteLink} to="/submissions" >Submissions</NavLink>
                                    </NavItem> 
                                    <NavItem className="private">
                                        <NavLink tag={RouteLink} to="/" onClick={logout}>Logout</NavLink>
                                    </NavItem></>)
                                : (<NavItem>
                                    <NavLink tag={RouteLink} to="/login">Login</NavLink>  
                                </NavItem>)          
                            }                    
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation