---
path: "/docs/async-example"
title: "Handle async operations"
order: 6
---

Easy state is all about having to define data once. Using it when getting async data is no different.
In this example we just define our data state as an empty array, and reacting on state changes, like loading and receiving response from the API.

```js
import createStateTree from 'easy-state';

const store = createStateTree({
  data: [],
  loading: false
});

function fetchData() {
  store.setState({ loading: true });

  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
      store.setState({
        data: res,
        loading: false
      });
    });
}

function render() {
  const { data } = store.getState();

  return data.map(item => {
    return document.body.appendChild(document.createTextNode(item.title));
  });
}

fetchData();
render();

store.subscribe(() => {
  render();
});
```
