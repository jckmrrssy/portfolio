import React, { Component } from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "../../particlesjs-config.json";
import NavBar from "../NavBar/NavBar";
import "./Jumbotron.css";

export default class Jumbo extends Component {
    
    render() {
        return (
            <div className = "particlesGuy"> 
                <Particles params={ParticlesConfig} />
                <NavBar />
            </div>
            )
        }
}
