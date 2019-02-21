import React from "react";
import "./Glitch.scss";

const Glitch = props => {
	return (
		<div className="glitch" data-text={props.sub}>
			{props.title}
		</div>
	);
};

export default Glitch;
