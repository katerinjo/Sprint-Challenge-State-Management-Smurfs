import React, { Component } from "react";
import "./App.css";

import Village from './Village';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Village />
      </div>
    );
  }
}

export default App;
