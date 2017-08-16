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
  const listeners = [];

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
    if (nextState) {
      previousState = currentState;

      if (isPlainObject(nextState)) {
        checkForUndefinedKeys(previousState, nextState);
        currentState = Object.assign({}, initialState, nextState);
      } else if (typeof nextState === 'function') {
        checkForUndefinedKeys(previousState, nextState(previousState));
        currentState = Object.assign({}, initialState, nextState(previousState));
      } else {
        throw new Error(
          `Expected nextState to be a plain object or a callback function.`
        );
      }

      /**
       * Make sure listeners from render
       * is run every time setState is called
       */

      listeners.forEach(listener => listener(currentState, previousState));

      return nextState;
    }
    return;
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

    /**
     * make the listeners available
     * to setState and run them.
     */

    listeners.push(listener);

    return listeners;
  };

  return {
    setState,
    getState,
    subscribe
  };
};

export default createStateTree;
