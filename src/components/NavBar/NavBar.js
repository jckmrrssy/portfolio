import React, { Component } from "react";
// import { Navbar, NavItem } from "react-materialize";
import "./NavBar.css"

export default class NavBar extends Component {
    

    render() {

        return (  
                // <Navbar brand='[ jem ]' className="navbar transparent" href="#aboutMeSection" right>
                //     <NavItem href = "#portfolioSection" className ="nav-link">Portfolio</NavItem>
                //     <NavItem href = "#contactSection" className = "nav-link">Contact</NavItem> 
                // </Navbar>   
                
                <nav className= "navbar transparent">
                    <div className="nav-wrapper">
                    <a href="#aboutMeSection" className="brand-logo left">[ jem ]</a>
                    
                    <ul id="nav-mobile" className="side-nav">
                        <li className = "nav-link">
                            <a href="#portfolioSection">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contactSection">Contact</a>
                        </li>
                    </ul>
                    <a className = "button-collapse sidenav-trigger show-on-large right" href="#" data-activates="nav-mobile">
                        <i className="material-icons">view_headline</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">github icon</a></li>
                        <li><a href="badges.html">linkedin icon</a></li>
                    </ul>
                    </div>
                </nav>


            )
        };
    };

