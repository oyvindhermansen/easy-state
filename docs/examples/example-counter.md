---
layout: examples
title: Counter example
permalink: '/examples/counter-example'
---

# Counter example

Import easy-state, set DOM element variables and create
an easy-state store.
```js
import createStateTree from 'easy-state';

const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const counterElem = document.getElementById('counter-elem');

const store = createStateTree({
  counter: 0
});
```

Let's do the increment function.
```js
btnIncrement.addEventListener('click', () => {
  store.setState(prevState => {
    return {
      counter: prevState.counter + 1
    };
  });
});
```

The decrement function is 99% the same as increment
```js
btnDecrement.addEventListener('click', () => {
  store.setState(prevState => {
    return {
      counter: prevState.counter - 1
    };
  });
})
```

Make a render function that will output the counter
in the DOM.
```js
const render = () => {
  const { counter } = store.getState();
  counterElem.innerHTML = counter;
}

// init the render method for initial state
render();

```

Run the subscribe method that rerenders when changes happen
in the easy-state store.
```js
store.subscribe((prevState, nextState) => {
  // Check prevState with nextState and only
  // rerender when needed.
  if (prevState.counter !== nextState.counter) {
    render();
  }
})
```
