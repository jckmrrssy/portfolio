import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import "./NavBar.css"

export default class NavBar extends Component {
   
    render() {
        
        return (
                
                <Navbar brand='[ jckmrrssy ]' className="navbar blue-grey darken-4" right>
                    <NavItem href = "#" className ="nav-link">Portfolio</NavItem>
                    <NavItem href = "#" className = "nav-link">Contact</NavItem> 
                </Navbar>  
       
        )
    }
}

