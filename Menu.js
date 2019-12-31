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

/*

			<div>
				<div className="navbar">
					<a href="#home">Home</a>
					<div className="subnav">
						<button className="subnavbtn">About <i className="fa fa-caret-down"></i></button>
						<div className="subnav-content">
							<a href="#company">Company</a>
							<a href="#team">Team</a>
							<a href="#careers">Careers</a>
						</div>
					</div> 
					<div className="subnav">
						<button className="subnavbtn">Services <i className="fa fa-caret-down"></i></button>
						<div class="subnav-content">
							<a href="#bring">Bring</a>
							<a href="#deliver">Deliver</a>
							<a href="#package">Package</a>
							<a href="#express">Express</a>
						</div>
					</div> 
					<div className="subnav">
						<button className="subnavbtn">Partners <i className="fa fa-caret-down"></i></button>
						<div className="subnav-content">
							<a href="#link1">Link 1</a>
							<a href="#link2">Link 2</a>
							<a href="#link3">Link 3</a>
							<a href="#link4">Link 4</a>
						</div>
					</div>
					<a href="#contact">Contact</a>
					</div>

					<div style="padding:0 16px">
					<h3>Subnav/dropdown menu inside a Navigation Bar</h3>
					<p>Hover over the "about", "services" or "partners" link to see the sub navigation menu.</p>
				</div>
			</div>;

*/
