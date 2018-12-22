import React, { Component } from "react";
import { Row, Col, Parallax, Card, CardTitle } from "react-materialize";
import projects from "../../portfolio.json"
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
                                    <img className="imgGuy responsive-img" src="../../images/mePic.jpg"/>
                                </Col>
                                {/* about me text */}
                                <Col m={12} l={6} className= "aboutText">
                                    <h3 className="center-align">About me</h3>
                                    <p className ="center-align">I'm a Full-Stack Web Developer who can design and build refined applications from mockup to rollout with a full database and back-end. My passion for development is rooted in my love of creative problem solving and my desire to make everyday life easier for app users. I focus on the MERN stack (Mongo, Express.js, React.js, Node.js), and particularly like working with front-end technologies.</p>
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
                                </Col>
                                <Col m={12} l={6} className="center-align">
                                    <ul>
                                        <li>(952) 220-1314</li>
                                        <li><i className="small material-icons ">email</i><a href="mailto:j.morrissey.16@gmail.com">j.morrissey.16@gmail.com</a></li>
                                        <li><a href="http://www.linkedin.com/in/jackmorrissey">https://www.linkedin.com/in/jackmorrissey/</a></li>
                                        <li>https://github.com/jckmrrssy</li>
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
