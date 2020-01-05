import React from "react";
import ReactDOM from "react-dom";
import SBMockify from "./SpongeBobMock";

class Projects extends React.Component {
    constructor(props) {
        super(props); // Must call
		this.state = {showing: ""};
    }
	
	webPageHandler(webPage) {
		this.setState({showing: webPage});
	}
	
	linkHandler(url) {
		var win = window.open(url, '_blank');
		win.focus();
	}
	
    render() {
		let content = 
		<div className="browser_projects">
			<h2>Browser Related Projects</h2>
			<ul className="browser_projects_menu">
				<li><a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/personal_website")}>This Website</a></li>
				<li><a onClick={this.webPageHandler.bind(this, "SBMockify")}>Mockify</a></li>
			</ul>
		</div> 
		
		switch(this.state.showing){
			case "":
				break;
			case "SBMockify":
				content = <SBMockify /> ;
				break;
			default:
				content = <h2>Warning something went wrong!!!</h2>;
				break;
		}
		
		return (
		<div className="Projects">
			{content}
		</div>);
    }
}
export default Projects;