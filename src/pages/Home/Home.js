import React, { Component } from "react";
import { Row, Col, Parallax, Card, CardTitle } from "react-materialize";
import projects from "../../portfolio.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import "./Home.css"

export default class Home extends Component {
    
    state = {
        projects
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
                                    <img alt ="a pic of jack" className="imgGuy responsive-img" src="../../images/mePic.jpg"/>
                                </Col>
                                {/* about me text */}
                                <Col m={12} l={6} className= "aboutText">
                                    <h3 className="center-align">About me</h3>
                                    <p className="center-align">I'm a Full-Stack Web Developer who can design and build refined applications from mockup to rollout with a full database and back-end. My passion for development is rooted in my love for creative problem solving and my desire to make everyday life easier for app users. I focus on the MERN stack (Mongo, Express.js, React.js, Node.js), and particularly like working with front-end technologies.</p>
                                    <p className="center-align">I graduated from the University of Wisconsin-Madison with a degree in finance, and have two years’ experience in the financial services industry. Having just completed the University of Minnesota’s Full-Stack Developer coding bootcamp, I’m ready and up to date with the latest techniques and technologies.</p>
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
                                    {this.state.projects.map(project => (
                                        <Col m={12} l={6}>
                                            <Card className = "small hoverable" header=
                                            {<CardTitle reveal image={project.image} waves="light"/>}
                                                title={project.title}
                                                reveal={
                                                    <div>
                                                        <p>{project.description}</p>
                                                        <p><a href={project.link}>Link to project</a></p>
                                                    </div>
                                                    }>
                                            </Card> 
                                        </Col>
                                    ))}
                                
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
                                    <p className ="center-align">Thank you for visiting my page. I look forward to hearing from you.</p>
                                </Col>
                                <Col m={12} l={6} className="center-align">
                                    <ul>
                                        <li><FontAwesomeIcon icon={faMobileAlt} />   (952) 220-1314</li>
                                        <li><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:j.morrissey.16@gmail.com">   j.morrissey.16@gmail.com</a></li>
                                        <li><FontAwesomeIcon icon={faLinkedin} /><a href="http://www.linkedin.com/in/jackmorrissey">   https://www.linkedin.com/in/jackmorrissey/</a></li>
                                        <li><FontAwesomeIcon icon={faGithubSquare} /><a href="http://www.github.com/jckmrrssy">   https://github.com/jckmrrssy</a></li>
                                    </ul>
                                </Col>
                                {/* right spacer */}
                                <Col s={1}></Col>
                            </Row>  
                        </div>
                    </div>
            </div>
           
        )
    }
}
