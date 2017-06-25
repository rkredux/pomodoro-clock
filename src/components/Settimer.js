import React, { Component } from 'react';

class Settimer extends Component{

	constructor(){
		super(); 
		this.handleTime = this.handleTime.bind(this); 
	}


	minutesToTime(minutes){
		  let hrs, mins, time, status = false, totalSeconds;
		  const seconds = 0;  		  
		  if (minutes < 60){
		    mins = minutes%60; 
		    hrs = 0; 
		  }		  
		  else{
		    hrs = parseInt(minutes/60); 
		    mins = minutes%60; 
		  }		
		  totalSeconds = hrs*3600 + mins*60 + seconds;   
		  time = {hrs,mins,seconds, status, totalSeconds}  		  
		  return time;  
	}


	handleTime(e){
		e.preventDefault();
		this.props.interval(this.minutesToTime(this.inputTime.value)); 
	}


	render(){
		return(
			<form className="time-setter" onSubmit={this.handleTime}>
			  <h3>Set New Interval</h3>
			  <input type="number" min="1" required placeholder="Set Time(minutes)" ref={(input) => this.inputTime = input}/>
			  <button type="submit">Set Time</button>
			</form>
			); 
	}
}





export default Settimer; 

