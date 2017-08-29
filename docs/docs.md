---
layout: page
title: Docs
permalink: /docs/
---

# Docs - The Easy State API

### First of all you need to import easy-state.
```js
import createStateTree from 'easy-state';
```

### Initializing an easy state store
```js
const store = createStateTree({
  // Here goes all of your state
});
```

### Retrieve the current state of your store
```js
store.getState();
```

### Update the state of your application.
```js
// Use with object
store.setState({ });

// Use with callback
store.setState(prevState => {});
```

### Subscribe and listen for state changes
```js
store.subscribe((prevState, nextState) => {
  // Call the functions you want listening on
  // state changes.
})
```
### A logger for dev purposes
```js
import createStateTree, { logger } from 'easy-state';

const store = createStateTree({ someState: 'hello world' });

// Will log previous and next state of your application
// on state changes. Remember to remove it in production.
logger(store);
```

<div class="bottom-section">
  <a href="/easy-state/examples/" class="button button-primary">
    To the examples
  </a>
</div>
