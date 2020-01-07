import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Projects from "./Projects";
import SBMockify from "./SpongeBobMock";

class MainApp extends React.Component {
    constructor(props) {
        super(props); // Must call
        this.state = {showing: "Home"};
    }
	
	webPageHandler(webPage) {
		this.setState({showing: webPage});
	}
	
	linkHandler(url) {
		var win = window.open(url, '_blank');
		win.focus();
	}
	
    render() {
		let menu = 
			<div className="menu">
				<div className="dropdown">
					<a className="dropbtn" onClick={this.webPageHandler.bind(this, "Home")}><i className="fas fa-home"></i></a>
					<div className="dropdown-content">
						<a className="sub_btn" onClick={this.webPageHandler.bind(this, "Home")}>Home</a>
					</div>
				</div>
				
				<div className="dropdown">
					<a className="dropbtn" onClick={this.linkHandler.bind(this, "https://www.linkedin.com/in/carlos-augustine-castillo-1363a6133/")}><i className="fab fa-linkedin"></i></a>
					<div className="dropdown-content">
						<a className="sub_btn" onClick={this.linkHandler.bind(this, "https://www.linkedin.com/in/carlos-augustine-castillo-1363a6133/")}>LinkedIn</a>
					</div>
				</div>
				
				<div className="dropdown">
					<a className="dropbtn" onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los")}><i className="fab fa-github-square"></i></a>
					<div className="dropdown-content">
						<a className="sub_btn" onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los")}>GitHub</a>
					</div>
				</div>
				
				<div className="dropdown">
					<a className="dropbtn" onClick={this.linkHandler.bind(this, "https://drive.google.com/open?id=1_66fzouX81fBP-TpWdI0XbQZbv3DzxZE4JT_l8gD78o")}><i className="fas fa-user-tie"></i></a>
					<div className="dropdown-content">
						<a className="sub_btn" onClick={this.linkHandler.bind(this, "https://drive.google.com/open?id=1_66fzouX81fBP-TpWdI0XbQZbv3DzxZE4JT_l8gD78o")}>Resume</a>
					</div>
				</div>
				
				<div className="dropdown">
					<a className="dropbtn" onClick={this.webPageHandler.bind(this, "Projects")}><i className="fas fa-project-diagram"></i></a>
					<div className="dropdown-content">
						<a className="sub_btn" onClick={this.webPageHandler.bind(this, "Projects")}>Projects</a>
					</div>
				</div>
				
				<div className="dropdown">
					<a className="dropbtn" onClick={this.webPageHandler.bind(this, "Home")}><i className="fab fa-instagram"></i></a>
					<div className="dropdown-content">
						<a className="sub_btn" onClick={this.webPageHandler.bind(this, "Home")}>Instagram</a>
					</div>
				</div>
			</div>;

        let content = <Home />;
			
		switch(this.state.showing){
			case "Home":
				content = <Home />;
				break;
			case "Projects":
				content = <Projects WebPageHandler={this.webPageHandler.bind(this)}/>;	{/* have to pass the function down since the projects that can be clicked on are unable to access this level of heirarchy's this.state.showing */}
				break;	
			case "SBMockify":
				content = <SBMockify />;
				break;
			default:
				content = <h2>Warning something went wrong!!!</h2>;
				break;
		}

		return (
			<div>
				<nav>
					{menu}
				</nav>
				{content}
			</div>);
    }
}
export default MainApp;