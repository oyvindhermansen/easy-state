# Easy-state
Simple state manipulation without any frameworks.
<br><br>
[![Build Status](https://travis-ci.org/oyvindhermansen/easy-state.svg?branch=master)](https://travis-ci.org/oyvindhermansen/easy-state) [![codecov](https://codecov.io/gh/oyvindhermansen/easy-state/branch/master/graph/badge.svg)](https://codecov.io/gh/oyvindhermansen/easy-state)

## Getting started
First things first; import the module:
```js
import createStateTree from 'easy-state';
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

> To checkout some examples, visit the [docs page](https://oyvindhermansen.github.io/easy-state/)

### Developing easy-state

Install
```sh
$ git clone https://github.com/oyvindhermansen/easy-state.git
$ cd easy-state
$ yarn install
```

Run the demo whitch is powered by webpack and webpack dev-server.
The dev-server listens for changes in both `demo/` and `src/`, so you can write module implementation and testing it in the browser at the same time.
```sh
$ yarn dev
```

Unit testing
```sh
$ yarn test
$ yarn test:watch
```

Test coverage
```sh
$ yarn coverage
```

Prettier
```sh
# Targets src, demo and __tests__ folders.
$ yarn prettier
```

Website
```sh
# make sure you have jekyll installed
# It will run on localhost:4000/easy-state/
$ yarn website
```

Build for production
```sh
$ yarn build
```


### Motivation
I've often come across projects that needed to use plain jquery or vanilla JavaScript instead of any frameworks e.g React or VueJS, and there is one thing I've missed: Possibilty to have application state in sync with my UI without any hassle.

### Inspiration
The library is inspired by both React and Redux. It's sort of a Redux-lib, without the reducers, action-creators and dispatching actions, but instead changing state with setState()-method like they do in React.
