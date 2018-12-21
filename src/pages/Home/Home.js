import React, { Component } from "react";
import { Row, Col, Parallax } from "react-materialize";
import "./Home.css"

export default class Home extends Component {
    
    render() {

        return (
            <div>
                <Parallax imageSrc= "../../images/yay.jpeg" />
                    <div className ="section white">
                        <div className ="row-container aboutMeRow">
                            <Row>
                                {/* left side spacing column */}
                                <Col s={1} ></Col>
                                {/* about me pic */}
                                <Col m={10} l={4} className="picGuy">
                                    <img className="imgGuy responsive-img" src="../../images/mePic.jpg"/>
                                </Col>
                                {/* about me text */}
                                <Col m={12} l={6} className= "aboutText">
                                    <h3 className="center-align">About me</h3>
                                    <p className ="center-align">This is where more stuff about me is going to go. I'm not sure how far out these sides will go. I guess I can just keep typing stuff up until we see. Typing typing typing typing typing typing typing</p>
                                </Col>
                                {/* right side spacing column */}
                                <Col s={1} ></Col>
                            </Row>
                        </div>
                    </div>
                <Parallax imageSrc="../../images/lighterTexture.jpg" />
                    <div className = "section blue-grey darken-4">
                        <div className = "row-container">
                            <Row>
                                <p className = "white-text">This will probably have a child card component that renders by portfolilo stuff </p>
                            </Row>
                        </div>
                    </div>
                <Parallax imageSrc="../../images/anotherOne.jpeg" />
                    <div className = "section white">
                        <div className = "row-container">
                            contact stuff need it to work no db for now mailto
                        </div>
                    </div>
            </div>
           
        )
    }
}
