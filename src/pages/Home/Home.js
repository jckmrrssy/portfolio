import React, { Component } from "react";
import { Row, Col, Parallax, Card, CardTitle } from "react-materialize";
import portfolio from "../../portfolio.json"
import "./Home.css"

export default class Home extends Component {
    
    state = {
        portfolio
    };

    render() {

        return (
            <div>
                {/* About me */}
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
                {/* Portfolio */}
                <Parallax imageSrc="../../images/lighterTexture.jpg" />
                    <div className = "section blue-grey darken-4">
                        <div className = "row-container portfolioRow">
                            {/* Portfolio Header */}
                            <Row>
                                <Col s={12}>
                                    <h3 className= "white-text">Portfoilo</h3>
                                </Col>   
                            </Row>
                            {/* Portfolio Cards */}
                            <Row>
                                <Col m={12} l={6}>
                                    <Card className='small' header={
                                        <CardTitle image="#">Card Title
                                        </CardTitle>}
                                            actions={[<a href='#'>This is a Link</a>]}>
                                            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                    </Card> 
                                </Col>
                            </Row>
                        </div>
                    </div>
                {/* Contact */}
                <Parallax imageSrc="../../images/anotherOne.jpeg" />
                    <div className = "section white">
                        <div className = "row-container contactRow">
                            <Row>
                                {/* left spacer */}
                                <Col s={1}></Col>
                                {/* Contact header */}
                                <Col m={10} l = {4}>
                                    <h3 className = "center-align">Contact</h3>
                                </Col>
                                <Col m={12} l={6} className="center-align">
                                    <ul>
                                        <li>(952) 220-1314</li>
                                        <li>j.morrissey.16@gmail.com</li>
                                        <li>https://www.linkedin.com/in/jackmorrissey/</li>
                                        <li>https://github.com/jckmrrssy</li>
                                    </ul>
                                </Col>
                            </Row>  
                        </div>
                    </div>
            </div>
           
        )
    }
}
