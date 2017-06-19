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
        status: false
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
    this.newTime = value; //take a snapshot of user time input
    this.setState({
      time:value
    }); 
    // console.log(this.state.time.status); 
   }


  incrementTimer(){
      this.setState((prevState) => {
        return {
          time:{
            hrs: prevState.time.hrs, 
            mins: prevState.time.mins, 
            seconds: prevState.time.seconds -1, 
            status: true
          }, 
        }
      }) 
    }



  startTimer(){
    if (!this.state.time.status){
    this.timer = setInterval(this.incrementTimer.bind(this), 1000);
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
              status: false
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
