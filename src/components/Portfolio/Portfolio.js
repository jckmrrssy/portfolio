import React, { Component } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import { Col, Row, Card, CardTitle } from "react-materialize";
import projects from "../../portfolio.json";

export default class Portfolio extends Component {
  
  state = {
    projects
  };

  
  render() {
    return (
      <div>
        {/* Portfolio */}

                <div className="section blue-grey darken-4">
                    <ScrollableAnchor id={"portfolioSection"}>
                        <div className="row-container portfolioRow">

                            {/* Portfolio Header */}

                            <Row>
                                <Col s={12}>
                                    <h3 className="white-text">Portfolio</h3>
                                </Col>
                            </Row>

                            {/* Portfolio Cards */}

                            <Row>
                                {this.state.projects.map(project => (
                                    <Col m={12} l={6}>
                                        <Card className="small hoverable" header=
                                            {<CardTitle reveal image={project.image} waves="light" />}
                                            title={project.title}
                                            reveal={
                                                <div>
                                                    <p>{project.description}</p>
                                                    <p><a href={project.deployedLink} target="_blank">Link to project</a> | <a href={project.githubLink} target="_blank">Link to repository</a></p>
                                                </div>
                                            }>
                                        </Card>
                                    </Col>
                                ))}

                            </Row>
                        </div>
                    </ScrollableAnchor >
                </div>
      </div>
    )
  }
}
