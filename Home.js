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
			
			<div className="about_me">
				<h2>About Me</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa. Nec nam aliquam sem et tortor consequat. Sed viverra ipsum nunc aliquet bibendum enim. Cras fermentum odio eu feugiat pretium. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Lorem ipsum dolor sit amet consectetur adipiscing. Ac ut consequat semper viverra nam libero justo laoreet. Nisl pretium fusce id velit ut tortor. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Morbi tristique senectus et netus. Laoreet non curabitur gravida arcu ac.</p>
			</div>
			
			{/* contact me section */}
			<div className="contact_me">
				<h2>Want to contact me?</h2>
				<p>Copy my email to clipboard<span>	
					{/* copy button section */}
					<CopyToClipboard text={this.state.myEmail}
						onCopy={() => this.setState({copied: true})}>
						<a className="copybtn"><i class="fas fa-copy"></i></a>
					</CopyToClipboard></span>
				</p>
				
				{/* email buttons */}
				<div className="emailbtns">
					<p>Email me through gmail<a className="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=closcastillo95@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a></p>
					<p>Email me through your default mail application<a href="mailto:closcastillo95@gmail.com"><i class="fas fa-envelope"></i></a></p>  
				</div>
			</div>
		</div>);
    }
}

export default Home;

/*		
			*/