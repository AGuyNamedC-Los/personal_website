import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Projects from "./Projects";

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
				<div class="dropdown">
					<a className="dropbtn" onClick={this.webPageHandler.bind(this, "Home")}><i class="fas fa-home"></i></a>
					<div class="dropdown-content">
						<a className="sub_btn" onClick={this.webPageHandler.bind(this, "Home")}>Home</a>
					</div>
				</div>
				
				<div class="dropdown">
					<a className="dropbtn" onClick={this.linkHandler.bind(this, "https://www.linkedin.com/in/carlos-augustine-castillo-1363a6133/")}><i class="fab fa-linkedin"></i></a>
					<div class="dropdown-content">
						<a className="sub_btn" onClick={this.linkHandler.bind(this, "https://www.linkedin.com/in/carlos-augustine-castillo-1363a6133/")}>LinkedIn</a>
					</div>
				</div>
				
				<div class="dropdown">
					<a className="dropbtn" onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los")}><i class="fab fa-github-square"></i></a>
					<div class="dropdown-content">
						<a className="sub_btn" onClick={this.webPageHandler.bind(this, "Home")}>GitHub</a>
					</div>
				</div>
				
				<div class="dropdown">
					<a className="dropbtn" onClick={this.linkHandler.bind(this, "https://drive.google.com/open?id=1_66fzouX81fBP-TpWdI0XbQZbv3DzxZE4JT_l8gD78o")}><i class="fas fa-user-tie"></i></a>
					<div class="dropdown-content">
						<a className="sub_btn" onClick={this.linkHandler.bind(this, "https://drive.google.com/open?id=1_66fzouX81fBP-TpWdI0XbQZbv3DzxZE4JT_l8gD78o")}>Resume</a>
					</div>
				</div>
				
				<div class="dropdown">
					<a className="dropbtn" onClick={this.webPageHandler.bind(this, "Projects")}><i class="fas fa-project-diagram"></i></a>
					<div class="dropdown-content">
						<a className="sub_btn" onClick={this.webPageHandler.bind(this, "Projects")}>Projects</a>
					</div>
				</div>
				
				<div class="dropdown">
					<a className="dropbtn" onClick={this.webPageHandler.bind(this, "Home")}><i class="fab fa-instagram"></i></a>
					<div class="dropdown-content">
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
				content = <Projects />;
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