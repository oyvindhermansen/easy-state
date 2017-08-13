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
store.subscribe(() => {
  myDOMElement.innerHTML = store.getState().counter
});
```

The beauty of the subscribe-method is that you only need to define your UI-rendering once, and <strong>not</strong> on every state change you want to do in your application.

> For larger applications you can divide your stores into
> smaller pieces, to get more control over certain parts.


If you want to have more control over your applications state with multiple
stores, you can use the function `combineStores` that `easy-state` provides.
```js
import { createStateTree, combineStores } from 'easy-state';

const storeOne = createStateTree({ hello: 'world' });
const storeTwo = createStateTree({ foo: 'bar' });

// init rootStore and pass the other stores to it.
const store = combineStores({
  storeOne,
  storeTwo
});

// Then you can use it like this:
store.storeOne.getState();
store.storeOne.setState({ hello: 'something new' });

// and you can listen to the store you want:
store.storeTwo.subscribe(() => {
  // render some HTML here and it will only listen to storeTwo.
});
```

### Motivation
I've often come across projects that needed to use plain jquery or vanilla JavaScript instead of any frameworks e.g React or VueJS, and there is one thing I've missed: Possibilty to have application state in sync with my UI without any hassle.

### Inspiration
The library is inspired by both React and Redux. It's sort of a Redux-lib, without the reducers, action-creators and dispatching actions, but instead changing state with setState()-method like they do in React.
