---
path: "/docs/unnecessary-rendering"
title: "Stop unnecessary rendering"
order: 3
---

The `subscribe` method takes two parameters in it's given callback function.
These two parameters can be used to make your app more performant by only rerendering when necessary.

Here's an example of how you would use it in a counter application:

```js
import createStateTree from 'easy-state';

const store = createStateTree({
  counter: 0
});

// do some updating on state....

store.subscribe((prevState, nextState) => {
  if (prevState.counter !== nextState.counter) {
    // rerender your app only when the respective state changes.
  }
});
```
