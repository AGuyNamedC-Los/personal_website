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
	
	mockify() {
		let mockifyString = "";
		let tempText = this.state.text;
		
		for(var c in this.state.text) {
			if(Math.floor((Math.random() * 10) + 1) % 3 == 0) {
				mockifyString += c.toUpperCase();
			} else {
				mockifyString += c.toLowerCase();
			}			
		}
		
		/*
		for(let i = 0; i < tempText.length; i++) {
			if(Math.floor((Math.random() * 10) + 1) % 3 == 0) {
				mockifyString += tempText[i].toUpperCase();
			} else {
				mockifyString += tempText[i].toLowerCase();
				console.log(tempText[i].toUpperCase());
			}
		}*/
		
		this.setState({text: mockifyString});
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
					<a onClick={this.mockify.bind(this)}>ypoc</a>
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