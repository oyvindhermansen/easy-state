---
layout: examples
title: Async example
permalink: '/examples/async-example'
---

# Async example


Import easy-state and create your store
```js
import createStateTree from 'easy-state';

const store = createStateTree({
  posts: []
});

// our output element for rendering elements
const outputList = document.getElementById('output-list');
```

Let's fetch the data for our example app.
```js
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
      store.setState({
        posts: res
      });
    })
    .catch(err => console.log(err));
}
```
Then, make a function that will append our post with title
```js

const post = (posts) => {
  return posts.map(item => {
    const node = document.createElement('li');
    const txt = document.createTextNode(item.title);

    node.appendChild(txt);
    return node;
  });
};

```
Now, lets make a render function that will actually
append our posts to the DOM.
```js

const render = () => {
  const { posts } = store.getState();

  for(let i = 0; i < post(posts).length; i++) {
    outputList.append(post(posts)[i]);
  }
};

// Run fetch and render.
fetchPosts();
render();
```

Make sure that you use the subscribe method to listen
for state changes.
```js

store.subscribe((prevState, nextState) => {
  if (prevState.posts !== nextState.posts) {
    render();
  }
});

```
