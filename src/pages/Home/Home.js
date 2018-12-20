import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";

export default class Home extends Component {
    
    render() {

        return (
            <header>
                <NavBar {...this.props} />
            </header>
           
        )
    }
}
