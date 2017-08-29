---
layout: examples
title: Counter example
permalink: '/examples/counter-example'
---

# Counter example

```js
import createStateTree from 'easy-state';

const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const counterElem = document.getElementById('counter-elem');

btnIncrement.addEventListener('click', () => {
  store.setState(prevState => {
    return {
      counter: prevState.counter + 1
    };
  });
});

btnDecrement.addEventListener('click', () => {
  store.setState(prevState => {
    return {
      counter: prevState.counter - 1
    };
  });
})

const store = createStateTree({
  counter: 0
});

const render = () => {
  const { counter } = store.getState();
  counterElem.innerHTML = counter;
}

render();

store.subscribe((prevState, nextState) => {
  // Check prevState with nextState and only
  // rerender when needed.
  if (prevState.counter !== nextState.counter) {
    render();
  }
})
```
