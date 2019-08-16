import React, { Component } from "react";
import "./App.css";

import Village from './Village';
import SmurfForm from './SmurfForm';

import { connect } from 'react-redux';

import { loadVillage } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.load = props.loadVillage;
  }
  componentDidMount() {
    this.load();
  }
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Village />
      </div>
    );
  }
}

export default connect(null, { loadVillage })(App)