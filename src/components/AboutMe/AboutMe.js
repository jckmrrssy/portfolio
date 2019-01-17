import React, { Component } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import { Col, Row } from "react-materialize";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        
            {/* About me */}
                
                
                <div className="section grey lighten-4">
                    <ScrollableAnchor id={"aboutMeSection"} >
                        <div className="row-container aboutMeRow">
                            <Row>
                                {/* left side spacer */}
                                <Col s={1} ></Col>
                                {/* about me pic */}
                                <Col m={10} l={4} className="picGuy">
                                    <img alt="a pic of jack" className="imgGuy responsive-img" src="../../images/mePic.jpg" />
                                </Col>
                                {/* about me text */}
                                <Col m={12} l={6} className="aboutText">
                                    <h3 className="center-align">About me</h3>
                                    <p className="center-align">I'm a Full-Stack Web Developer who can design and build refined applications from mockup to rollout with a full database and back-end. My passion for development is rooted in my love for creative problem solving and my desire to make everyday life easier for app users. I'm particularly savvy working with front-end technologies and am always eager to learn new skills.</p>
                                    <p className="center-align">I graduated from the University of Wisconsin-Madison with a degree in finance, and have two years of experience in the financial services industry. Having just completed the University of Minnesota’s Full-Stack Developer program, I’m ready and up to date with the latest techniques and technologies.</p>
                                    <p className="center-align">I'm currently searching for a full-time junior developer or software engineering opportunity. If you are in need of a developer, check out some of my portfolio highlights below and feel free to contact me with any questions.</p>
                                </Col>
                                {/* right side spacer */}
                                <Col s={1} ></Col>
                            </Row>
                        </div>
                    </ScrollableAnchor>
                </div>


      </div>
    )
  }
}
