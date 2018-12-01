import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bottle from './components/Bottle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bottle></Bottle>
      </div>
    );
  }
}

export default App;
