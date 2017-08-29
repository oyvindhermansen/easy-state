---
layout: examples
title: Async example
permalink: '/examples/async-example'
---

# Async example

```js
import createStateTree from '../src/index';

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
  return posts.map(item => `<li>${item.title}</li>`);
};

const render = () => {
  const { posts } = store.getState();
  const hasPostsLoaded = posts.length ? post(posts) : '<h1>Loading!</h1>';
  outputList.innerHTLM = hasPostsLoaded;
};

fetchPosts();
render();

store.subscribe((prevState, nextState) => {
  if (prevState.posts !== nextState.posts) {
    render();
  }
});

```
