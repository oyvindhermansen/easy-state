/**
* logger - A dev logger that prints out previous state
* and next state to the console through state changes that
* gets listened by the subscribe method.
* @param {Object} store - An instance of createStateTree.
* @return {void}
**/

const logger = store => {
  if (!store) {
    throw new Error(`No store was provided.`);
  }

  /**
  * Just making sure an instance from createStateTree is
  * getting passed to the logger().
  **/
  if (
    !store.hasOwnProperty('getState') ||
    !store.hasOwnProperty('setState') ||
    !store.hasOwnProperty('subscribe')
  ) {
    throw new Error(`Expected an easy-state store, but got '${store}'`);
  }

  store.subscribe((prevState, nextState) => {
    console.log(
      '%c Prev state ',
      'font-size: 12px; color: blue; font-weight: bold',
      prevState
    );
    console.log(
      '%c Next state ',
      'font-size: 12px; color: green; font-weight: bold',
      nextState
    );
    console.log('\n');
  });
};

export default logger;
