import $ from 'jquery';
import createStateTree from '../src/index';

const store = createStateTree({
  posts: []
})

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => store.setState({ posts: res }))
    .catch(err => console.log(err));
}

function post(posts) {
  return posts.map(item => {
    return `<li>${item.title}</li>`;
  });
}

function app() {
  fetchUsers();

  store.render(() => {
    const { posts } = store.getState();
    const renderPosts = posts.length ? post(posts) : '<h1>Loading!</h1>'
    $('body').html(renderPosts);
  });
}

app();
