// Use in JSX
import React from "react";
import ReactDOM from "react-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import bitmoji from "./bitmoji.png";

class Home extends React.Component {
	    constructor(props) {
        super(props); // Must call
		this.state = {myEmail: 'closcastillo95@gmail.com', copied: false};
    }
	
    render() {
		var bitmojiImage = <img src={bitmoji}/>;
		
		return ( 
		<div className="home">
			<figure className="bitmoji">
				{bitmojiImage}
			</figure>
			<h1 className="my_name">I'm Carlos Castillo</h1>
			{/* about me section */}
			<div className="about_me">
				<h2>About Me</h2>
				<p>I'm currently a student at California State University East Bay going for a major in computer science. I'd like to say 
				I've been programming since I was old enough to use a computer but I've only recently been enfatuated in 
				this field for about 3 years from when I switched from being a kinesiology major (yeah I dont why I chose that either...). If I'm not 
				working out or playing video games then I'm probably entranced in my own world, programming away. I'm not very picky in what
				I like to program or the projects I start, wether it be something entertaining for just myself, a challenge for self satisfaction, or a useful tool for 
				other people to use I always enjoy the process towards completing a project I've started. It's a goal of 
				mine to work on projects that are so much bigger than me that can be impactful and helpful to other people. If you'd like 
				to see more of my work or qualifications please visit the appropriate buttons at the top of this page!</p>
			</div>
			{/* contact me section */}
			<div className="contact_me">
				<h2>Want to contact me?</h2>
				<div className="contact_me_btns">
					{/* copy button section */}
					<p>Copy my email to clipboard	
						<CopyToClipboard text={this.state.myEmail}
							onCopy={() => this.setState({copied: true})}>
							<a className="copybtn"><i className="fas fa-copy"></i></a>
						</CopyToClipboard>
					</p>
					{/* email buttons */}
					<p>Email me through gmail<a className="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=closcastillo95@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a></p>
					<a className="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=closcastillo95@gmail.com" target="_blank"><p>Email me through gmail <i className="fas fa-envelope"></i></p></a>
					<p href="mailto:closcastillo95@gmail.com">Email me through your default mail application<a href="mailto:closcastillo95@gmail.com"><i className="fas fa-envelope"></i></a></p>  
					<a href="mailto:closcastillo95@gmail.com"><p>Email me through your default mail application <i className="fas fa-envelope"></i></p></a>  
				</div>
			</div>
		</div>);
    }
}

export default Home;