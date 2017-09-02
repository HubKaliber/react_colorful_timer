import React, { Component } from 'react';



class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonText: "Start",
      time: this.props.time,
      interval: null,
      style: {
        "background-color":this.props.color
      }
    };
    this.clickMe = this.clickMe.bind(this);
    this.reset = this.reset.bind(this);
  }

  countDown(){
  const interval = setInterval(()=>{
      if(this.state.time <= 0){
        this.stopCountDown();
      }else{
        this.setState({
          time: this.state.time - 1,

        });
      }
    }, 1000);
    this.setState({
      interval: interval,
      buttonText: "Stop"
    });
  }

reset(){
  this.setState({
    time: this.props.time,
  });
  this.stopCountDown();
}


  stopCountDown(){
    clearInterval(this.state.interval);
    this.setState({
      buttonText: "Start",
      interval: null
    });
  }



  clickMe(){
    if (this.state.buttonText === "Start") {
      this.countDown();
    }else{
      this.stopCountDown();
    }

  }
  render() {
    return (
      <div id="main-timer-container" style = {this.state.style}>
          <div id="time-container">
            <h1>{this.state.time}</h1>
          </div>
          <div id="button-container">
            <button onClick={this.clickMe}>{this.state.buttonText}</button>
            <button onClick={this.reset}>Reset</button>
          </div>

      </div>
    );
  }
}

export default Timer;
