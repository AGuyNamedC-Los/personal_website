/*
	npm init
	npm install react
	npm install react-dom
	npm install -g parcel-bundler
*/

import React from "react";
import ReactDOM from "react-dom";

import MainApp from "./MainApp.js";

class App extends React.Component {
    constructor(props) {
        super(props); // Must call
		this.state = {show: "MainApp"};
    }

    // Renders component based on current state and props
    render() {
		switch (this.state.show) {
            case 'MainApp':
                return <MainApp />;
                break;
            default:
                return <h2>Some type of problem!</h2>;
        }
	}
}

ReactDOM.render(<App />, document.getElementById("root"));