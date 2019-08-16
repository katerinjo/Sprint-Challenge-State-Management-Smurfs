import React, { Component } from "react";
import "./App.css";

import Village from './Village';
import SmurfForm from './SmurfForm';

import { connect } from 'react-redux';

import { loadVillage, addSmurf } from '../actions';
import { ADD_ABORT } from '../reducers';

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
        <SmurfForm subFun={this.props.addSmurf} onFire={this.props.formFire} />
        <Village />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formFire: state.status === ADD_ABORT
  };
};

export default connect(mapStateToProps, { loadVillage, addSmurf })(App)