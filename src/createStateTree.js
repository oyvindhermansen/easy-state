import { isPlainObject, checkForUndefinedKeys } from './utils';

/**
 * createStateTree - The function that holds your applications
 * state. You can have one or multiple stores.
 * @param {Object} initialState
 * @return {Function} getState
 * @return {Function} setState
 * @return {Function} subscribe
 */
const createStateTree = initialState => {
  let currentState = initialState;
  let previousState = currentState;
  let listeners = [];
  let nextListeners = listeners;

  if (!isPlainObject(initialState)) {
    throw new Error(`Expected initialState to be a plain object.`);
  }

  /**
   * getState - The function that always gives you the updated
   * state of your application.
   * @param {void}
   * @return {Object} currentState
   */
  const getState = () => {
    return currentState;
  };

  /**
   * setState - The only way to change a store's state.
   * @param {Function | Object} nextState
   * @return {Object} nextState
   */
  const setState = nextState => {
    if (!nextState) {
      throw new Error(
        'Expected an object or a callback function to return new state.'
      );
    }

    const newListeners = (listeners = nextListeners);
    previousState = currentState;

    if (isPlainObject(nextState)) {
      checkForUndefinedKeys(previousState, nextState);
      currentState = Object.assign({}, currentState, nextState);
    } else if (typeof nextState === 'function') {
      checkForUndefinedKeys(previousState, nextState(previousState));
      currentState = Object.assign({}, currentState, nextState(previousState));
    } else {
      throw new Error(
        `Expected nextState to be a plain object or a callback function.`
      );
    }

    newListeners.forEach(listener => listener(previousState, currentState));

    return nextState;
  };

  /**
   * subscribe - The only way to subscribe to state changes
   * and keep your UI in sync with the application's state.
   * @param {Function} listener
   * @return {Array} listeners
   */
  const subscribe = listener => {
    if (typeof listener !== 'function') {
      throw new Error(`Expected listener to be a function.`);
    }

    listeners.push(listener);

    let isSubscribed = true;

    return function unsubscribe() {
      if (!isSubscribed) return;

      isSubscribed = false;

      const index = listeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  };

  return {
    setState,
    getState,
    subscribe
  };
};

export default createStateTree;
