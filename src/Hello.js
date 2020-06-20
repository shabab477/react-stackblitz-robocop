import React from 'react';
import './Hello.css';

class Hello extends React.Component{
	render() {
		return ( 
			<div className=" f2 tc">
            <h1>Hello Boo </h1>
			<p> You are welcome </p>
			<p> {this.props.greeting} </p>
			</div>

			);
	}


}
export default Hello;