import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Col, Row } from "react-materialize";
import "./AboutMe.css";

export default class AboutMe extends Component {
	render() {
		return (
			<div>
				{/* About me */}
				<div className="section white">
					<ScrollableAnchor id={"aboutMeSection"}>
						<div className="row-container aboutMeRow">
							<Row>
								<Col s={12} l={4} className="placeHolderGuy" />
								<Col s={12} l={8} className="center-align">
									<h3 className="center-align">About me</h3>
								</Col>
							</Row>

							<Row>
								{/* about me pic */}
								<Col s={12} l={4} className="picGuy center-align">
									<img
										alt="a pic of jack"
										className="imgGuy responsive-img"
										src="../../images/mePic.jpg"
									/>
								</Col>
								{/* about me text */}
								<Col s={12} l={8} className="aboutText">
									<p className="center-align">
										I'm a Full-Stack Web Developer who can design and build
										refined applications from mockup to rollout. My passion for
										development is rooted in my love for creative problem
										solving and my desire to make everyday life easier for app
										users.
									</p>
									<p className="center-align">
										I'm particularly savvy working with front-end technologies
										and am always eager to learn new skills. University of
										Minnesota developer program graduate.
									</p>
								</Col>
							</Row>
						</div>
					</ScrollableAnchor>
				</div>
			</div>
		);
	}
}
