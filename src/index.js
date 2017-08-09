import { isPlainObject, checkForUndefinedKeys } from './utils';

const createStateTree = initialState => {
  let currentState = initialState;
  const listeners = [];

  if (!isPlainObject(initialState)) {
    throw new Error(`Expected initialState to be a plain object.`);
  }

  const setState = nextState => {
    if (nextState) {
      if (isPlainObject(nextState)) {
        checkForUndefinedKeys(currentState, nextState);
        currentState = Object.assign({}, initialState, nextState);
      } else if (typeof nextState === 'function') {
        
        /**
         * TODO: Remove the undefined key from the currentState
         * when using callback to set new state. 
         */
        checkForUndefinedKeys(currentState, nextState(currentState));
        currentState = Object.assign({}, initialState, nextState(currentState));
      } else {
        throw new Error(`Expected nextState to be a plain object or a callback function.`);
      }

      
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

export default createStateTree;
