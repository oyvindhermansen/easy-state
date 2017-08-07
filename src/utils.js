export const isPlainObject = input => {
  return !Array.isArray(input) && typeof input === 'object';
};

export const checkForUndefinedKeys = (currentState, nextState) => {
  for (let key in nextState) {
    if (!currentState.hasOwnProperty(key)) {
      console.warn(
        `You are trying to update the key '${key}', ` +
          `which does not exists in the initial state object. ` +
          `The non-existing key will be deleted from the state tree.`
      );
      
      delete nextState[key];
    }
  }
};
