/*
	npm init
	npm install react
	npm install react-dom
	npm install npm install -g parcel-bundler
	parcel build index.html --public-url ./		to create the dist file that goes into filezilla to be put online
	npm install --save react react-copy-to-clipboard
	http://csweb01.csueastbay.edu/~wi9937/carloscastillo/ is the website name for now
	parcel index.html in bash to get it running on localhost:1234
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
				break;
        }
	}
}

ReactDOM.render(<App />, document.getElementById("root"));