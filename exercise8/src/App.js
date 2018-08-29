import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonStats from "./PersonStats";

class App extends Component {
  render() {
    return (
      <div className="App">
          <PersonStats />
      </div>
    );
  }
}

export default App;
