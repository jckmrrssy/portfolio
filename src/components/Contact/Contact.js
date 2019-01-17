import React, { Component } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import { Col, Row } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div>
         {/* Contact */}
                <div className="section white">
                    <ScrollableAnchor id={"contactSection"} >
                        <div className="row-container contactRow">
                            <Row>
                                <Col s={12} className = "center-align">
                                    <h3>Connect with me:</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={4} className="center-align iconGuy">
                                    <a href="mailto:j.morrissey.16@gmail.com"><FontAwesomeIcon className="fa-7x deep-orange-text text-lighten-2" icon={faEnvelope} /></a>
                                </Col>
                                <Col s={4} className="center-align iconGuy">
                                     <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/jackmorrissey"><FontAwesomeIcon className="fa-7x blue-text" icon={faLinkedin} /></a>
                                </Col>
                                <Col s={4} className="center-align iconGuy">
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/jckmrrssy"><FontAwesomeIcon className="fa-7x black-text" icon={faGithubSquare} /></a>
                                </Col>
                            </Row>
                        </div>
                    </ScrollableAnchor>
                </div>
      </div>
    )
  }
}
