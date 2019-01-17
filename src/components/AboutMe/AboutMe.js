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
                            <Col s={12} l={4} className="placeHolderGuy"></Col>
                            <Col s={12} l={8} className="center-align">
                                <h3 className="center-align">About me</h3>
                            </Col>
                        </Row>
                        
                        <Row>
                            {/* about me pic */}
                            <Col s={12} l={4} className="picGuy center-align">
                                <img alt="a pic of jack" className="imgGuy responsive-img" src="../../images/mePic.jpg" />
                            </Col>
                            {/* about me text */}
                            <Col s={12} l={8} className="aboutText">
                                <p className="center-align">I'm a Full-Stack Web Developer who can design and build refined applications from mockup to rollout with a full database and back-end. My passion for development is rooted in my love for creative problem solving and my desire to make everyday life easier for app users. I'm particularly savvy working with front-end technologies and am always eager to learn new skills.</p>
                                <p className="center-align">I have two years of experience in the financial services industry and just completed the University of Minnesota’s Full-Stack Developer program. I'm currently searching for a full-time junior developer or software engineering opportunity. If you are in need of a developer, check out some of my portfolio highlights below and feel free to contact me with any questions.</p>
                            </Col>
                        </Row>
                    </div>
                </ScrollableAnchor>
            </div>
      </div>
    )
  }
}
