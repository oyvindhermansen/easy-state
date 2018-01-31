---
path: "/docs/api"
title: "Easy State API"
order: 2
---

Easy State provides one function that will be the base of your applications state.
This function is called `createStateTree`. Here's an example of how you'll use it.

```javascript
import createStateTree from 'easy-state';

const myStore = createStateTree({
  // ... application state
});
```

When your state tree is created using `createStateTree`, it provides you with the following methods:

### getState

This method will give you access to your applications current state.

```js
myStore.getState();
```

### setState

`setState` is the only way to change the state of your application.
It takes an argument with your new state. It can be either a plain object, or a callback function. Here's an example

```js
// With object
myStore.setState({
  //...new state
});

// With callback
myStore.setState(prevState => {
  return {
    // ... new state
  };
});
```

### subscribe

This is where the magic happens. Rerender once inside the `subscribe` method and it automatically updates your UI whenever `setState` is called. `Subscribe` takes one argument, a callback. Here's an example

```js
myStore.subscribe((prevState, nextState) => {
  // Do rerendering here once,
  // and your state will sync up with your UI automatically
});
```
