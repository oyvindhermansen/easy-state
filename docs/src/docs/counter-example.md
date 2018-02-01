---
path: "/docs/counter-example"
title: "Counter example"
order: 4
---

This example shows how to use Easy State in its most simplistic form.

```js
import createStateTree from 'easy-state';

// Creating a store that will contain
// all of the application state
const store = createStateTree({
  counter: 0
});

// Get our buttons to increment and decrement
const incrementButton = document.getElementById('incBtn');
const decrementButton = document.getElementById('incBtn');

// Get output of counter result element
const counterOutput = document.getElementById('counter');

// Make the increment function
incrementButton.addEventListener('click', function() {
  store.setState(prevState => {
    return {
      counter: prevState.counter + 1
    };
  });
});

// Make the decrement function
decrementButton.addEventListener('click', function() {
  store.setState(prevState => {
    return {
      counter: prevState.counter - 1
    };
  });
});

// Adding a render function to render
// initially and within subscribe
function render() {
  // Setting the innerHTML to the current
  // state of the application
  counterOutput.innerHTML = store.getState().counter;
}

// Run for initial load
render();

store.subscribe(() => {
  render();
});
```
