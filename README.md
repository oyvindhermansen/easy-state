# observableState
Simple state manipulation without any frameworks.

## API
Package provides `observableState` as the initializer.
- observableState([initialState])

#### The `observableState` API

<strong>`setState([nextState])`</strong>
If you want to alter the state of your application, setState is the way to go. It can either take a plain `object` or a `function` with the prevState as argument.

<strong>`getState()`</strong>
This function is always providing you with the latest state of your application.

<strong>`render([callback])`</strong>
This method is where you render your state to your UI.

### Example
```js
// Initialize your state tree.
const store = observableState({
  counter: 1
});

store.getState() // { counter: 1 }

store.setState(prevState => ({
  counter: prevState.counter + 1
}));

store.getState() // { counter: 2 }
```

### Motivation
I've often come across projects that needed to use plain jquery or vanilla JavaScript instead of any frameworks e.g React or VueJS, and there is one thing I've missed: Possibilty to have application state in sync with my UI without any hassle. Top inspiration comes from React's own setState(), because I think It's super intuitive and easy to use and understand.
