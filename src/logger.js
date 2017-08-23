/**
* logger - A dev logger that prints out previous state
* and next state to the console through state changes that
* gets listened by the subscribe method.
* @param {void}
* @return {void}
**/

const logger = store => {
  return store.subscribe((prevState, nextState) => {
    console.log(
      '%c Previous state ',
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
