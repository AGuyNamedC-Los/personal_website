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
		let content = 
		<div>
			<p>Im working on it!!!</p>
		</div>;

		return (
			<div>
			{content}
			</div>);
    }
}
export default Menu;