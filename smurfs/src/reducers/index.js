//states
export const STATIC = 'STATIC';
export const ADDING = 'ADDING';
export const ADD_ABORT = 'ADD_ABORT';
export const LOADING = 'LOADING';
export const LOAD_ABORT = 'LOAD_ABORT';

//transitions
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_FAIL = 'ADD_FAIL';
export const LOAD_VILLAGE = 'LOAD_VILLAGE';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAIL = 'LOAD_FAIL';

const initState = {
  village: [],
  status: STATIC
};

export default (state = initState, action) => {
  switch(action.type) {
    case LOAD_VILLAGE:
      alert(LOAD_VILLAGE)
      return {...state, status: LOADING};
    case LOAD_SUCCESS:
      alert(LOAD_SUCCESS)
      return {
        village: action.payload,
        status: STATIC
      };
    case LOAD_FAIL:
      return {
        ...state,
        status: LOAD_ABORT
      };
    default:
      return state;
  }
};
