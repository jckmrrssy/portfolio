import React, { Component } from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "../../particlesjs-config.json";
import NavBar from "../NavBar/NavBar";
import Typed from "typed.js";
import "./Jumbotron.css";

export default class Jumbo extends Component {
    
    componentDidMount() {
        const options = {
            strings: ["Jack Morrissey", "Full-Stack Web Developer"],
            typeSpeed: 135,
            loop: true,
            startDelay: 1000,
            backSpeed: 45,
            backDelay: 5000
        };
        this.typed = new Typed(this.el, options)
    };

    componentWillUnmount() {
        this.typed.destroy();
    };

    render() {
        return (
            <div className = "particlesGuy"> 
                <Particles params={ParticlesConfig} />
                <NavBar />
                <h1 className="typedBanner center-align white-text"><span ref={(el) => {this.el = el }}/></h1>
            </div>
            )
        };
}
