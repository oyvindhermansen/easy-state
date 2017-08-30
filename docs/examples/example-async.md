---
layout: examples
title: Async example
permalink: '/examples/async-example'
---

# Async example

```js
import createStateTree from 'easy-state';

const store = createStateTree({
  posts: []
});

const outputList = document.getElementById('output-list');

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

const post = (posts) => {
  return posts.map(item => {
    const node = document.createElement('li');
    const txt = document.createTextNode(item.title);

    node.appendChild(txt);
    return node;
  });
};

const render = () => {
  const { posts } = store.getState();

  for(let i = 0; i < post(posts).length; i++) {
    outputList.append(post(posts)[i])
  }
};

fetchPosts();
render();

store.subscribe((prevState, nextState) => {
  if (prevState.posts !== nextState.posts) {
    render();
  }
});

```
