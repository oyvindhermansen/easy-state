# EasyState
Simple state manipulation without any frameworks. <br>

## Getting started

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
To render and keep your UI in sync with your state, use `render`:
```js
store.render(() => {
  myDOMElement.innerHTML = store.getState().counter
});
```

The beauty of the render-method is that you only need to define your UI-rendering once, and <strong>not</strong> on every state change you want to do in your application.

> For larger applications you can divide your stores into
> smaller pieces, to get more control over certain parts.

### Motivation
I've often come across projects that needed to use plain jquery or vanilla JavaScript instead of any frameworks e.g React or VueJS, and there is one thing I've missed: Possibilty to have application state in sync with my UI without any hassle.

### Inspiration
The library is inspired by both React and Redux. It's sort of a Redux-lib, without the reducers, action-creators and dispatching actions, but instead changing state with setState()-method like they do in React.
