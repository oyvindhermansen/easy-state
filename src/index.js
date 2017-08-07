import { isPlainObject, isFunction, checkForUndefinedKeys } from './utils';

const observableState = initialState => {
  let currentState = initialState;
  const listeners = [];

  if (!isPlainObject(initialState)) {
    throw new Error(
      `Expected initialState to be ` +
        `a plain object, instead got: '${typeof initialState}'
    `
    );
  }

  const setState = nextState => {
    if (nextState) {
      if (isPlainObject(nextState)) {
        checkForUndefinedKeys(currentState, nextState);
        currentState = Object.assign({}, initialState, nextState);
      }

      if (isFunction(nextState)) {
        checkForUndefinedKeys(currentState, nextState(currentState));
        currentState = Object.assign({}, initialState, nextState(currentState));
      }

      // Make sure listeners from render is run on updated state.
      listeners.forEach(listener => listener());

      return currentState;
    }
    return;
  };

  const render = listener => {
    if (!isFunction(listener)) {
      throw new Error(`Expected listener to be a function.`);
    }

    // Setting the initial state!
    listener();

    // Push the listener so it can
    // be looped in setState and
    // rerender and sync ui at once
    // inside render method.
    listeners.push(listener);

    return listeners;
  };

  const getState = () => {
    return currentState;
  };

  return {
    setState,
    getState,
    render
  };
};

export default observableState;
