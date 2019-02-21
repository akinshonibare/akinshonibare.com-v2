import React, { Component } from "react";
import Typing from "react-typing-animation";
import "./TypeWriter.scss";

class TypeWriter extends Component {
	render() {
		return (
			<div className="typewriter-wrapper">
				<Typing
					speed={50}
					onFinishedTyping={() => {
						this.props.setLoading();
					}}
				>
					<div>USERNAME: anonymous platypus</div>
					<div>
						PASSWORD: ***********
						<Typing.Backspace count={10} />
						*****************
					</div>
				</Typing>
			</div>
		);
	}
}

export default TypeWriter;
