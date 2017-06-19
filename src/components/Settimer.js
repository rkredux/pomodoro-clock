import React, { Component } from 'react';

class Settimer extends Component{


	//capture the time entered by the user
	//call the props timer

	constructor(){
		super(); 
		this.handleTime = this.handleTime.bind(this); 
	}


	minutesToTime(minutes){
		  let hrs, mins, time, status = false;
		  const seconds = 0;  		  
		  if (minutes < 60){
		    mins = minutes%60; 
		    hrs = 0; 
		  }		  
		  else{
		    hrs = parseInt(minutes/60); 
		    mins = minutes%60; 
		  }		  
		  time = {hrs,mins,seconds, status}  		  
		  return time;  
	}


	handleTime(e){
		e.preventDefault();
		this.props.interval(this.minutesToTime(this.inputTime.value)); 
	}


	render(){
		return(
			<form className="time-setter" onSubmit={this.handleTime}>
			  <h2>Set New Time</h2>
			  <input type="number" min="1" required placeholder="Set Time(minutes)" ref={(input) => this.inputTime = input}/>
			  <button type="submit">Work Hard</button>
			</form>
			); 
	}
}





export default Settimer; 

