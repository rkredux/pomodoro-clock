import React, { Component } from 'react';


class Timer extends Component{


	render(){

		const times = {
			hr: this.props.time.hrs, 
			min: this.props.time.mins, 
			sec: this.props.time.seconds
		}


		return(
			<div className="timer">
			   {Object
			   	.keys(times)
			   	.map((time) => <h2 key={time}>{times[time]}{time}</h2>)
			   }
			</div>
		); 
	}

}


export default Timer; 

