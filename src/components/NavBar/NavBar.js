import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./NavBar.css"

export default class NavBar extends Component {
    // <a href="#" className="hamburgerGuy"><FontAwesomeIcon icon={faBars} /></a>
    render() {
        return (  
                // <Navbar brand='[ jem ]' className="navbar transparent" href="#aboutMeSection" right>
                //     <NavItem href = "#portfolioSection" className ="nav-link">Portfolio</NavItem>
                //     <NavItem href = "#contactSection" className = "nav-link">Contact</NavItem> 
                // </Navbar>  
                <nav>
                    <div class="nav-wrapper">
                    <a href="#" className="brand-logo">[ jem ]</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                    </div>
              </nav>
                    
            )
        };
    };

