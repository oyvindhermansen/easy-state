import $ from 'jquery';
import createStateTree from '../src/index';

const store = createStateTree({
  todos: ['Learn createStateTree', 'learn React', 'Some other thingy!']
});

const $body = $('body');
const $todosList = $('.todos-list');
const $input = $('.input');
const $addTodoBtn = $('.btn-todo');

const addTodo = (e, input) => {
  if (input.val() !== '') {
    store.setState(prevState => {
      return {
        todos: [...prevState.todos, input.val()]
      };
    });

    input.val('');
  }
};

const removeTodo = e => {
  const $this = $(e.currentTarget);
  const index = parseInt($this.attr('data-index'), 10);
  const filtered = store.getState().todos.filter((item, i) => i != index);
  store.setState({ todos: filtered });
};

const initEventListeners = () => {
  $addTodoBtn.on('click', e => addTodo(e, $input));
  $body.on('click', '.remove-todo', e => removeTodo(e));
};

const todoList = todos =>
  todos.map(
    (t, index) => `
        <li>
          ${t}
          <button data-index="${index}" class="remove-todo">
            Trash
          </button>
        </li>
      `
  );

const renderTodos = todos => {
  $todosList.html(todoList(todos));
};

renderTodos(store.getState().todos);
initEventListeners();

store.subscribe((prevState, nextState) => {
  if (nextState.todos !== prevState.todos) {
    renderTodos(nextState.todos);
  }
});
