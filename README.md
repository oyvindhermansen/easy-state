# observableState
Simple state manipulation without any frameworks. <br>

## Get started
To get you started, initialize your state tree with observableState.
```js
const store = observableState({
  counter: 1,
});
```
To retrieve the current state tree at any point in time, use `getState`:
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

### Motivation
I've often come across projects that needed to use plain jquery or vanilla JavaScript instead of any frameworks e.g React or VueJS, and there is one thing I've missed: Possibilty to have application state in sync with my UI without any hassle. Top inspiration comes from React's own setState(), because I think It's super intuitive and easy to use and understand.
