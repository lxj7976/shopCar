import React, { Component } from 'react';
import './App.css';
import One from './components/one'
import Car from "./components/car"
class App extends Component {
  render() {
    return (
      <div className="App">
        <One />
        <Car />
      </div>
    );
  }
}

export default App;
