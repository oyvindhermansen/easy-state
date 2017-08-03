import { createStore } from 'redux';

const isPlainObject = input => {
  return !Array.isArray(input) && typeof input === 'object';
};

const setState = (initialState, nextState, renderUpdatedState) => {

  if (!initialState) {
    throw new Error(`No initial state provided.`)
  }

  if (!isPlainObject(initialState)) {
    throw new Error(`Expected initial state to be a plain object.`);
  }

  const actionCreator = () => ({ type: 'SIMPLUX' });

  const reducer = (state = initialState, action) => {
    if (action.type === 'SIMPLUX') {

      // Using a callback unction for setting new state
      if (typeof nextState === 'function') {
        return Object.assign(state, nextState(state));
      }

      // Using a plain object for setting new state
      if (isPlainObject(nextState)) {
        return Object.assign(state, nextState);
      }
    }
    return state;
  }

  const store = createStore(reducer);

  store.dispatch(actionCreator());

  if (renderUpdatedState) {
    if (typeof renderUpdatedState === 'function') {
      renderUpdatedState(store.getState());
    }
  }

  return nextState;
}

export default setState;
