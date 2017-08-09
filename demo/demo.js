import $ from 'jquery';
import createStateTree from '../src/index';

const store = createStateTree({
  todos: ['Learn createStateTree', 'learn React', 'Some other thingy!'],
});

function todo(todos) {
  return todos.map((t, index) => {
    return `
      <li>
        ${t}
        <button data-index="${index}" class="remove-todo">
          Trash
        </button>
      </li>
    `;
  });
}

function app() {
  const $body = $('body');
  const $todosList = $('.todos-list');
  const $input = $('.input');
  const $addTodoBtn = $('.btn-todo');
  const $removeBtn = '.remove-todo';

  $addTodoBtn.on('click', e => handleAddTodo(e, $input));
  $body.on('click', $removeBtn, removeTodo);

  store.render(() => {
    $todosList.html(todo(store.getState().todos));
  });
}

function removeTodo(e) {
  const $this = $(e.currentTarget);
  const index = parseInt($this.attr('data-index'));

  const filtered = store.getState().todos.filter((item, i) => {
    return i != index;
  });

  store.setState({
    todos: filtered
  });
}

function handleAddTodo(e, input) {
  if (input.val() !== '') {
    /*
    store.setState({
      todos: [...store.getState().todos, input.val()],
      counter: 1
    });
    */
    store.setState((prevState) => {
      return {
        todos: [...prevState.todos, input.val()],
        counter: 1
      }
    })

    console.log('AFTER SETSTATE: ', store.getState());
    input.val('');
  }
}

app();
