import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./NavBar.css"

export default class NavBar extends Component {
    // <a href="#" className="hamburgerGuy"><FontAwesomeIcon icon={faBars} /></a>
    render() {
        return (  
                <Navbar brand='[ jem ]' className="navbar transparent" href="#aboutMeSection" right>
                    <NavItem href = "#portfolioSection" className ="nav-link">Portfolio</NavItem>
                    <NavItem href = "#contactSection" className = "nav-link">Contact</NavItem> 
                </Navbar>         
            )
        };
    };

