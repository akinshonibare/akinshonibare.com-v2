import React, { Component } from "react";
import Glitch from "../Glitch/Glitch";
import Typing from "react-typing-animation";
import ME from "./me-2.png";
import "./About.scss";

class About extends Component {
	render() {
		return (
			<div className="about-wrapper">
				<div className="container about-me">
					<div className="about">
						<Glitch title={"ABOUT ME"} sub={"WHOIS AK"} />
						<Typing speed={5} className="info">
							<div>
								<span>NAME:</span> AKIN SHONIBARE
							</div>
							<div>
								<span>TITLE:</span> FULLSTACK WEB DEVELOPER |
								SOFTWARE DEVELOPER
							</div>
							<div>
								<span>EDUCATION:</span> QUEEN'S UNIVERSITY
								KINGSTON, ONTARIO
							</div>
							<div>
								<span>DEGREE:</span> COMPUTER ENGINEERING |
								ENTREPRENEURSHIP AND INNOVATION STREAM
							</div>
							<div>
								<span>SKILLS:</span> HTML, CSS(SASS), PYTHON,
								JAVASCRIPT, C++, JAVA, REACT, REDUX, NODEJS,
								EXPRESS, ...
							</div>
						</Typing>
					</div>
					<div className="random">
						<img
							src={ME}
							alt="my side"
							width="450px"
							style={{ marginTop: "5%" }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
