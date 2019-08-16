import { LOAD_VILLAGE, LOAD_SUCCESS, LOAD_FAIL, ADD_SMURF, ADD_FAIL } from '../reducers';
import axios from 'axios';

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

export const addSmurf = smurf => dispatch => {
  dispatch({type: ADD_SMURF});
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      loadVillage()(dispatch);
    })
    .catch(err => {
      console.log(err);
      dispatch({type: ADD_FAIL});
    });
};