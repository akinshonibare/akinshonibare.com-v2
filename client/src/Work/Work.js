import React, { Component } from "react";
import Slider from "react-slick";
import PortfolioTemplate from "../PortfolioTemplate/PortfolioTemplate";

import "./Work.scss";

const portfolio = [
	{
		title: "kingston housing",
		description:
			"web application that scrapes and combines house postings from major kingston realtors.",
		tools: ["React", "NodeJS"],
		info: [
			"https://kingston-housing.herokuapp.com/",
			"https://github.com/akinshonibare"
		]
	},
	{
		title: "SHOPIFY web engineer challenge",
		description:
			"web app to search for waste items using the Toronto Waste Wizard database, and save frequently used ones.",
		tools: ["React", "NodeJS", "MongoDB", "Redux", "Express"],
		info: [
			"https://build-vgnhlcbxec.now.sh/",
			"https://github.com/akinshonibare/Shopify-Design-Engineer-Challenge"
		]
	},
	{
		title: "music crowd",
		description:
			"an interactive democratic music streaming web app that allows a host create a room using their Spotify account enabling others join in on their own devices.",
		tools: ["React", "NodeJS", "MongoDB", "Redux", "Express"],
		info: [
			"https://www.musicrowd.ca/",
			"https://github.com/ccrowley96/MusiCrowd"
		]
	},
	{
		title: "filetron",
		description:
			"One-stop cloud storage aggregator and file purchasing platform made at HackHarvard 2018.",
		tools: ["React", "NodeJS", "MongoDB", "Redux", "Express"],
		info: ["", "https://github.com/SeanCahalan/cloudfile-hackharvard"]
	},
	{
		title: "food fight",
		description:
			"C++ backend, SFML frontend two player card trading game for Software Development class.",
		tools: ["C++", "SFML", "MYSQL"],
		info: ["", "https://github.com/akinshonibare/Food-Fight-Game"]
	},
	{
		title: "movie ticketing system",
		description: "Movie ticketing and cinema reservation site.",
		tools: ["HTML", "CSS", "PHP", "MYSQL"],
		info: ["", "https://github.com/akinshonibare/Food-Fight-Game"]
	}
];

class Work extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="work-wrapper">
				<h2>PAST PROJECTS</h2>
				<div className="wrapper">
					<Slider {...settings}>
						{portfolio.map((item, i) => (
							<PortfolioTemplate item={item} key={i} />
						))}
					</Slider>
				</div>
			</div>
		);
	}
}

export default Work;
