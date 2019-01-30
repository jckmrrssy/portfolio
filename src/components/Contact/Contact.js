import React, { Component } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import { Col, Row } from "react-materialize";

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
                                    <a href="mailto:jack@jackmorrissey.io"><i className="fas fa-envelope fa-7x"></i></a>
                                </Col>
                                <Col s={4} className="center-align iconGuy">
                                     <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/jackmorrissey"><i className="fab fa-linkedin fa-7x blue-text"></i></a>
                                </Col>
                                <Col s={4} className="center-align iconGuy">
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/jckmrrssy"><i className="fab fa-github-square fa-7x black-text"></i></a>
                                </Col>
                            </Row>
                        </div>
                    </ScrollableAnchor>
                </div>
      </div>
    )
  }
}
