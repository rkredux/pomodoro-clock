import React, { Component } from 'react';
import './App.css';
import Timer from "./components/Timer.js"; 
import Control from "./components/Control.js"; 
import Settimer from "./components/Settimer.js"; 

class App extends Component {

  constructor(props){

    super(props);
    this.state = { 
      time:{
        hrs: props.initialTime.hrs, 
        mins: props.initialTime.mins, 
        seconds: props.initialTime.seconds, 
        status: false,
        totalSeconds: props.initialTime.hrs*60*60 + props.initialTime.mins*60 + props.initialTime.seconds
      }, 

    }; 

    this.baseState = this.state; 
    this.setTime = this.setTime.bind(this);
    this.startTimer = this.startTimer.bind(this); 
    this.incrementTimer = this.incrementTimer.bind(this); 
    this.stopTimer = this.stopTimer.bind(this); 
    this.resetTimer = this.resetTimer.bind(this); 
  }


  setTime(value){
    clearInterval(this.timer); 
    this.newTime = value; 
    this.totalSeconds = 
    this.setState({
      time:value
    }); 
  }


  
  secondsToTime(seconds){
    let hrs, mins, secs;//declaring variables 
    let tempSec = seconds - 0; //make a copy of the seconds arg
    hrs = parseInt(tempSec/3600); //hrs is set
    tempSec = tempSec - hrs*3600; //remove hrs
    mins = parseInt(tempSec/60);//mins is set
    tempSec = tempSec - mins*60; //remove mins 
    secs = tempSec; //seconds is left, set that to secs variable
    return { hrs, mins, secs } 
  }



  incrementTimer(){
    if (this.state.time.totalSeconds > 0){
      this.setState((prevState) => {
        const secondsLeft = prevState.time.totalSeconds -1; 
        const obj = this.secondsToTime(secondsLeft); 
        return {
          time:{
            hrs: obj.hrs, 
            mins: obj.mins, 
            seconds: obj.secs, 
            status: true, 
            totalSeconds:secondsLeft
          }, 
        }
      });  
    } else{
      clearInterval(this.timer); 
      console.log(this.state.time); 
    }
  }

  

  startTimer(){
    if (!this.state.time.status){
    this.timer = setInterval(this.incrementTimer, 1000);   
    }
  }



  stopTimer(){
    if (this.state.time.status){
        this.setState(function(prevState){
          return{
            time: {
              hrs: prevState.time.hrs, 
              mins: prevState.time.mins, 
              seconds: prevState.time.seconds,
              status: false, 
              totalSeconds: prevState.time.totalSeconds
            }
          }
        })
        clearInterval(this.timer);  
    }
  }



  resetTimer(){
      clearInterval(this.timer);
      if (this.hasOwnProperty("newTime")){  
      this.setState({
           time:this.newTime
      }); 
    }else{
      this.setState(this.baseState); 
    }
  }




  render() {
      return (
        <div className="app">
          <Timer time={this.state.time}></Timer>
          <Control resetTimer={this.resetTimer} stopTimer={this.stopTimer} startTimer={this.startTimer}></Control>
          <Settimer interval={this.setTime}></Settimer>
        </div>
      );
  }

}


export default App;
