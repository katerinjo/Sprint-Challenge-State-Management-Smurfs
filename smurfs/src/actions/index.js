export const commands = {
  '!!': '!!'
};

export const doSomething = () => {
  return {
    type: '!!',
    payload: '!!'
  };
};

export const getThunk = () => dispatch => {
  dispatch({ type: '!!', payload: '!!' });
};