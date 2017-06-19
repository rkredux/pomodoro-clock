import React, { Component } from 'react';


class Timer extends Component{


	render(){
		const times = this.props.time
		return(
			<div className="timer">
			   {Object
			   	.keys(times)
			   	.map((time) => <h2 key={time}>{times[time]}</h2>)
			   }
			</div>
		); 
	}

}


export default Timer; 

