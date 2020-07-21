import React, { Component } from "react";

class App extends Component {
	state = {
		counter: 0,
	};
	render() {
		return (
			<div data-test="component-app">
				<h1 data-test="counter-display">
					The counter is currently {this.state.counter}{" "}
				</h1>
				<button
					data-test="button"
					onClick={() => {
						this.setState({ counter: this.state.counter + 1 });
					}}
				>
					Increment counter
				</button>
			</div>
		);
	}
}

export default App;
