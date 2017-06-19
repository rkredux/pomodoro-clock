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
    this.minUpdater = this.minUpdater.bind(this); 
    // this.hrUpdater = this.hrUpdater.bind(this); 
  }


  setTime(value){
    this.newTime = value; //take a snapshot of user time input
    this.totalSeconds = 
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
            status: true, 
            totalSeconds: prevState.time.totalSeconds -1
          }, 
        }
      }) 
    }



//To do
//we eventuall need to call this as interval updater
//runs every 60 seconds and updates the count of the mins 
//hours 
  minUpdater(){
    if (this.state.time.mins > 0){
      this.setState(function(prevState){
        return {
          time: {
            hrs: prevState.time.hrs,
            mins: prevState.time.mins -1, 
            seconds: prevState.time.seconds, 
            status: prevState.time.status, 
            totalSeconds: prevState.time.totalSeconds
          }
        }
      })
    } else{
      clearInterval(this.minuteUpdater);
    }
  }





//To do
//Here we need add the functionality 
//to lower the mins and hr immediately just before the clock starts
//explore life cycle hooks for this if possible. May be the 
//transformation is smoother than it is now. 

  startTimer(){
    if (!this.state.time.status){
      if (this.state.time.mins > 0) {
    this.setState(function(prevState){
      return{
        time:{
          hrs: prevState.time.hrs, 
          mins: prevState.time.mins -1,
          seconds: prevState.time.seconds, 
          status:prevState.time.status, 
          totalSeconds: prevState.time.totalSeconds, 
        }
      }
    })
  } 

    this.timer = setInterval(this.incrementTimer.bind(this), 1000);
    this.minuteUpdater = setInterval(this.minUpdater.bind(this),60000); 
    // this.hourUpdater = setInterval(this.hrUpdater.bind(this), 3600000)
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
