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
store.subscribe(() => {
  // Call the functions you want listening on
  // state changes.
})
```
