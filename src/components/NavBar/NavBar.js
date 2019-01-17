import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css"

export default class NavBar extends Component {
    
    render() {

        return (  
                <Navbar brand='[ jem ]' className="navbar transparent" href="#aboutMeSection" right>
                    <NavItem href = "#portfolioSection" className ="nav-link">Portfolio</NavItem>
                    <NavItem href = "#contactSection" className = "nav-link">Contact</NavItem> 
                </Navbar>   
                
                // <nav className= "navbar transparent">
                //     <div className="nav-wrapper">
                    
                //     <a href="#aboutMeSection" className="brand-logo left">[ jem ]</a>
                    
                       
                //     <a className = "button-collapse sidenav-trigger show-on-large right" href="#" data-activates="nav-mobile">
                //         <i className="material-icons">view_headline</i></a>
                    
                //         <ul className="right hide-on-med-and-down">
                //             <li><a href="https://www.linkedin.com/in/jackmorrissey/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                //             <li><a href="https://github.com/jckmrrssy"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
                //         </ul>
                //         <ul id="nav-mobile" className="side-nav">
                //             <li><a href="#portfolioSection">Portfolio</a></li>
                //             <li><a href="#contactSection">Contact</a></li>
                //         </ul>

                        

                //     </div>
                // </nav>


            )
        };
    };

