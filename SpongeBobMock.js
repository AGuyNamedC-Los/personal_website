import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";


class Menu extends React.Component {
    constructor(props) {
        super(props); // Must call
        this.state = {showing: "home"};
    }
	
	/* web page handlers */
	webPageHandler(webPage) {
		this.setState({showing: webPage});
	}
	
    render() {
        let menu =  <ul className="Menu">
			<li><a onClick={this.webPageHandler.bind(this, "Home")}>Home</a></li>
			<li><a onClick={this.webPageHandler.bind(this, "Menu")}>Menu</a></li>
            </ul>;

		return (
			<div>
				{menu}
			</div>);
    }
}
export default Menu;