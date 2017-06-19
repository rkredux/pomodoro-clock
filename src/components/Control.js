import React, { Component } from 'react';

class Control extends Component {


	render(){
		return(
			<div className="control">
			   <button onClick={this.props.stopTimer} className="stop">||</button>
			   <button onClick={this.props.startTimer} className="start">Start</button>
			   <button onClick={this.props.resetTimer} className="reset">Reset</button>
			</div>
			); 
	}
}



export default Control; 