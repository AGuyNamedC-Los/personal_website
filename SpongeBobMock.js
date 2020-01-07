import React from "react";
import ReactDOM from "react-dom";
//import Home from "./Home";
import {CopyToClipboard} from 'react-copy-to-clipboard';


class SpongeBobMock extends React.Component {
    constructor(props) {
        super(props); // Must call
        this.state = {text: "", copied: false};
    }
	
	userInput(event) {
		this.setState({text: event.target.value});
	}
	
    render() {
		let content = 
		<div>
			<h1>SB Mockify</h1>
			<div className="sbmockify_gui">
				
				<textarea value={this.state.text} onChange={this.userInput.bind(this)}></textarea>
				<div className="sb_btns">
					<CopyToClipboard text={this.state.text}
						onCopy={() => this.setState({copied: true})}>
						<a className="copybtn">Copy</a>
					</CopyToClipboard>
					<a>ypoc</a>
				</div>
			</div>
			<h2>What is this?</h2>
			<p className="description">Spongebob mockify is a simple text converted to converting your regular text into random upper and lower case letters of the text you input</p>
			
			
		</div>;

		return (
			<div className="sbmockify">
				{content}
			</div>);
    }
}
export default SpongeBobMock;

/* {this.state.copied ? <span style={{color: 'red'}}>copied</span> : <span style={{color: 'red'}}>not copied</span>} */