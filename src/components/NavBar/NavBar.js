import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";

export default class NavBar extends Component {
   
    render() {
        
        return (
           
                <Navbar brand='Jack Morrissey' right>
                    <NavItem href = "#" className ="nav-link">Portfolio</NavItem>
                    <NavItem href = "#" className = "nav-link">Contact</NavItem> 
                </Navbar>  
       
        )
    }
}

