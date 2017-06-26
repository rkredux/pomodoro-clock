import React, { Component } from 'react';

class Control extends Component {


	render(){
		return(
			<div className="control">
			   <button onClick={this.props.stopTimer} className="stop">Hold On</button>
			   <button onClick={this.props.startTimer} className="start">Let's Go</button>
			   <button onClick={this.props.resetTimer} className="reset">Reset</button>
			</div>
			); 
	}
}



export default Control; 