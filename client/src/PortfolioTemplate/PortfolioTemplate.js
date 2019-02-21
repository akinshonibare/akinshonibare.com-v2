import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./PortfolioTemplate.scss";

class PortfolioTemplate extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="portfoliotemplate-wrapper">
				<div className="title">
					<span>{this.props.item.title}</span>
				</div>
				<div className="border" />
				<div className="tools">
					{this.props.item.tools.map(item => (
						<span>{item}</span>
					))}
				</div>
				<div className="border" />
				<div className="description">{this.props.item.description}</div>
				<div className="border" />
				<div className="tools">
					{!(this.props.item.info[0] === "") && (
						<a href={this.props.item.info[0]}>
							<span>
								<FontAwesomeIcon icon={faLink} />
								VISIT
							</span>
						</a>
					)}
					<a href={this.props.item.info[1]}>
						<span>
							<FontAwesomeIcon icon={faGithub} />
							GITHUB
						</span>
					</a>
				</div>
				<div className="border" />
			</div>
		);
	}
}

export default PortfolioTemplate;
