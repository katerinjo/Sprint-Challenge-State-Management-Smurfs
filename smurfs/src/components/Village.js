import React from 'react';

import { connect } from 'react-redux';

import { LOAD_ABORT } from '../reducers';

const Village = ({ members, onFire }) => {
  return (
    <div className={onFire ? 'fire' : ''}>
      {members.length ? members.map(({name, age, height}) => (
        <p>{name}: {age}yo {height}cm</p>
      )) : <p>not loaded</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    members: state.village,
    onFire: state.status === LOAD_ABORT
  }
}


export default connect(mapStateToProps, {})(Village)