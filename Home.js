// Use in JSX
import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
	    constructor(props) {
        super(props); // Must call
    }
	
    render() {
		return ( 
		<div className="home">
			<h1 className="my_name">Carlos Castillo</h1>
			<p className="about_me">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa. Nec nam aliquam sem et tortor consequat. Sed viverra ipsum nunc aliquet bibendum enim. Cras fermentum odio eu feugiat pretium. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Lorem ipsum dolor sit amet consectetur adipiscing. Ac ut consequat semper viverra nam libero justo laoreet. Nisl pretium fusce id velit ut tortor. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Morbi tristique senectus et netus. Laoreet non curabitur gravida arcu ac.</p>
		</div>);
    }
}

export default Home;