import React, { Component } from "react";
import Wrapper from "./Wrapper/Wrapper";
import TypeWriter from "./TypeWriter/TypeWriter";

import "./App.scss";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	setLoading = () => {
		this.setState({
			loading: false
		});
	};

	render() {
		const { loading } = this.state;
		return (
			<div className="app-wrapper">
				{loading && <TypeWriter setLoading={this.setLoading} />}
				{!loading && <Wrapper />}
			</div>
		);
	}
}

export default App;
