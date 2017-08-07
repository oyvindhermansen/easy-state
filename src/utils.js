export const isPlainObject = input => {
  return !Array.isArray(input) && typeof input === 'object';
};

export const isFunction = input => {
  return typeof input === 'function';
};

export const checkForUndefinedKeys = (currentState, nextState) => {
  for (let key in nextState) {
    if (!currentState.hasOwnProperty(key)) {
      console.warn(
        `You are trying to update the key '${key}', ` +
          `which does not exists in the initial state object. ` +
          `The non-existing key will be deleted from the state tree.`
      );

      // Remove the non-existing key from the new state tree.
      // TODO: This currently only works if setState is used
      // with a plain object, and not a function with prevState
      // as callback.
      delete nextState[key];
    }
  }
};
