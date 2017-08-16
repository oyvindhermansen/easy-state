# EasyState
Simple state manipulation without any frameworks.
<br><br>
[![Build Status](https://travis-ci.org/oyvindhermansen/easy-state.svg?branch=master)](https://travis-ci.org/oyvindhermansen/easy-state) [![codecov](https://codecov.io/gh/oyvindhermansen/easy-state/branch/master/graph/badge.svg)](https://codecov.io/gh/oyvindhermansen/easy-state)

## Getting started
First things first; import the module:
```js
import { createStateTree } from 'easy-state';
```
To get you started, initialize a state tree with the function `createStateTree`.
```js
const store = createStateTree({
  counter: 1,
});
```
To retrieve the current state at any point in time, use `getState`:
```js
store.getState();
```
To alter any state from your state tree, use `setState`:
```js
store.setState({
  counter: 2
});
```
Keep your UI in sync with your state by using `subscribe`:
```js
store.subscribe((prevState, nextState) => {
  DOMElement.innerHTML = nextState.counter;
});
```

> For larger applications you can divide your stores into
> smaller pieces, to get more control over certain parts.

Counter-example:
```js
const store = createStateTree({ counter: 0 });

const initEventListeners = () => {
  myIncrementButton.addEventListener('click', handleIncrement);
  myDecrementButton.addEventListener('click', handleDecrement);
};

const handleIncrement = () => {
  const counter = store.getState().counter;
  store.setState({ counter: counter + 1 });
}

const handleDecrement = () => {
  const counter = store.getState().counter;
  store.setState({ counter: counter - 1 });
}

const renderCounter = (counter) => {
  myDOMCounterElement.innerHTML = counter;
}

initEventListeners();
renderCounter(store.getState().counter);

store.subscribe((prevState, nextState) => {
  renderCounter(nextState.counter);
});
```

### Developing easy-state

Install
```sh
$ git clone https://github.com/oyvindhermansen/easy-state.git
$ cd easy-state
$ yarn install
```

Run the demo:
```sh
$ yarn dev
```

### Motivation
I've often come across projects that needed to use plain jquery or vanilla JavaScript instead of any frameworks e.g React or VueJS, and there is one thing I've missed: Possibilty to have application state in sync with my UI without any hassle.

### Inspiration
The library is inspired by both React and Redux. It's sort of a Redux-lib, without the reducers, action-creators and dispatching actions, but instead changing state with setState()-method like they do in React.
