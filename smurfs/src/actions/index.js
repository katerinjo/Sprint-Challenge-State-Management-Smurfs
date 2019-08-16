import { LOAD_VILLAGE, LOAD_SUCCESS, LOAD_FAIL } from '../reducers';

export const doSomething = () => {
  return {
    type: '!!',
    payload: '!!'
  };
};

export const loadVillage = () => dispatch => {
  dispatch({ type: LOAD_VILLAGE });
  dispatch({ type: LOAD_SUCCESS, payload: {name: 'test', age: 42, height: 2019}});
};