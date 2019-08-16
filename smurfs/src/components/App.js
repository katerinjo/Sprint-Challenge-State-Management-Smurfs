import React, { Component } from "react";
import "./App.css";

import Village from './Village';
import SmurfForm from './SmurfForm';

import { connect } from 'react-redux';

import { loadVillage, addSmurf } from '../actions';
import { ADD_FAIL } from '../reducers';

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
    formFire: state.status === ADD_FAIL
  };
};

export default connect(null, { loadVillage, addSmurf })(App)