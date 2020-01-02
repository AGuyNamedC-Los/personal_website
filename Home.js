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
	
	copyFunction() {
		
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

			<p className="contact_info">
			Want to get in contact with me?<br/>
			</p>
				
			<CopyToClipboard text={this.state.myEmail}
				onCopy={() => this.setState({copied: true})}>
				<button>Copy to clipboard with button</button>
			</CopyToClipboard>

			<p>closcastillo95@gmail.com</p><button className="copybtn" onClick={this.copyFunction.bind(this)}>Copy</button> 
			<p className="contact_info">
				<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com" target="_blank">Title</a>
			</p>
		</div>);
    }
}

export default Home;