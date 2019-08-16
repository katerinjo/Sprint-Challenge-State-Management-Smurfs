const initState = {};

export const commands = {
  ADD_SMURF: 'ADD_SMURF',
  ADD_FAIL: 'ADD_FAIL',
  LOAD_VILLAGE: 'LOAD_VILLAGE',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  LOAD_FAIL: 'LOAD_FAIL'
};

const states = {
  STATIC: 'STATIC',
  ADDING: 'ADDING',
  ADD_ABORT: 'ADD_ABORT',
  LOADING: 'LOADING',
  LOAD_ABORT: 'LOAD_ABORT'
};

export const [
  ADD_SMURF,
  ADD_FAIL,
  LOAD_VILLAGE,
  LOAD_SUCCESS,
  LOAD_FAIL
 ] = [
  'ADD_SMURF',
  'ADD_FAIL',
  'LOAD_VILLAGE',
  'LOAD_SUCCESS',
  'LOAD_FAIL'
 ];

const [
  STATIC,
  ADDING,
  ADD_ABORT,
  LOADING,
  LOAD_ABORT
] = [
  'STATIC',
  'ADDING',
  'ADD_ABORT',
  'LOADING',
  'LOAD_ABORT'
];

export default (state = initState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};