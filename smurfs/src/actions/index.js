import { LOAD_VILLAGE, LOAD_SUCCESS, LOAD_FAIL } from '../reducers';
import axios from 'axios';

export const doSomething = () => {
  return {
    type: '!!',
    payload: '!!'
  };
};

export const loadVillage = () => dispatch => {
  dispatch({ type: LOAD_VILLAGE });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: LOAD_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: LOAD_FAIL});
    });
};