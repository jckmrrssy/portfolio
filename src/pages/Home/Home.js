import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import AboutMe from "../../components/AboutMe/AboutMe";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./Home.css";

export default class Home extends Component {

   
    render() {

        return (
            <div>
                <Jumbotron />
                <AboutMe />
                <Portfolio />
                <Contact /> 
                <Footer />  
            </div>
            )
        }
    }
