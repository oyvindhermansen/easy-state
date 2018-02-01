---
path: "/docs/development-logger"
title: "Development logger"
order: 3
---

Easy State also provides a utility function to use when developing, and it's called `logger`. Here's an example of how you would use it:

```js
import createStateTree, { logger } from 'easy-state';

const store = createStateTree({
  name: 'John Doe',
  age: 24
});

logger(store);
```

What this does is logging every state change in the browser console with the `previous` and `nextState`,
so it is easy for you as a developer to compare state trees before and after changes.
