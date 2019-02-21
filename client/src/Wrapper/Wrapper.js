import React from "react";
import "./Wrapper.scss";
import About from "../About/About";
import Work from "../Work/Work";
import ReactFullpage from "@fullpage/react-fullpage";

const Wrapper = () => (
	<ReactFullpage
		render={() => {
			return (
				<ReactFullpage.Wrapper>
					<div className="section">
						<About />
					</div>
					<div className="section">
						<Work />
					</div>
				</ReactFullpage.Wrapper>
			);
		}}
	/>
);

export default Wrapper;
