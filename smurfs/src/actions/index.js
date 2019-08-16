import { commands } from '../reducers';

export const doSomething = () => {
  return {
    type: '!!',
    payload: '!!'
  };
};

export const getThunk = () => dispatch => {
  dispatch({ type: '!!', payload: '!!' });
};