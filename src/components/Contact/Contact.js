import React, { Component } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import { Col, Row } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div>
         {/* Contact */}
                <div className="section white">
                    <ScrollableAnchor id={"contactSection"} >
                        <div className="row-container contactRow">
                            <Row>
                                {/* left spacer */}
                                <Col s={1}></Col>

                                {/* Contact header */}

                                <Col s={12} l={4}>
                                    <h3 className="center-align">Contact</h3>
                                    <p className="center-align">Thank you for visiting my page. I look forward to hearing from you.</p>
                                </Col>
                                <Col s={12} l={6} className="center-align" >
                                    <ul>
                                        <li><FontAwesomeIcon icon={faMobileAlt} />   (952) 220-1314</li>
                                        <li><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:j.morrissey.16@gmail.com">   j.morrissey.16@gmail.com</a></li>
                                        <li><FontAwesomeIcon icon={faLinkedin} /><a href="http://www.linkedin.com/in/jackmorrissey">  jackmorrissey</a></li>
                                        <li><FontAwesomeIcon icon={faGithubSquare} /><a href="http://www.github.com/jckmrrssy">   @jckmrrssy</a></li>
                                    </ul>
                                </Col>
                                {/* right spacer */}
                                <Col s={1}></Col>
                            </Row>
                        </div>
                    </ScrollableAnchor>
                </div>
      </div>
    )
  }
}
