import { isPlainObject, checkForUndefinedKeys } from './utils';

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
      if (!isPlainObject(nextState)) {
        throw new Error(`Expected nextState to be a plain object.`);
      }

      checkForUndefinedKeys(currentState, nextState);
      // Update the state
      currentState = Object.assign({}, initialState, nextState);
      // Make sure listeners from render is run on updated state.
      listeners.forEach(listener => listener());

      return currentState;
    }
    return;
  };

  const render = listener => {
    if (typeof listener !== 'function') {
      throw new Error(`Expected listener to be a function.`);
    }

    // Setting the initial state!
    listener();

    // make the listeners available to setState and run them.
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
