import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/timer'

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <Timer time="10" color="red"/>
        <Timer time="20" color="orange"/>
        <Timer time="30" color="yellow"/>
        <Timer time="40" color="green"/>
        <Timer time="50" color="blue"/>
        <Timer time="60" color="purple"/>
        <Timer time="70" color="gray"/>
        <Timer time="80" color="#015"/>
        <Timer time="90" color="#00ff00"/>
        <Timer time="100" color="pink"/>
      </div>
    );
  }
}

export default App;
