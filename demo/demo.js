import $ from 'jquery';
import createStateTree from '../src/index';

class TodoApp {
  constructor() {
    this.store = createStateTree({
      todos: ['Learn createStateTree', 'learn React', 'Some other thingy!']
    });

    this.$body = $('body');
    this.$todosList = $('.todos-list');
    this.$input = $('.input');
    this.$addTodoBtn = $('.btn-todo');
    this.$removeBtn = '.remove-todo';
    this.initEventListeners();
    this.render();
  }

  initEventListeners() {
    this.$addTodoBtn.on('click', e => this.handleAddTodo(e, this.$input));
    this.$body.on('click', this.$removeBtn, e => this.removeTodo(e));
  }

  handleAddTodo(e, input) {
    if (input.val() !== '') {
      this.store.setState(prevState => {
        return {
          todos: [...prevState.todos, input.val()]
        };
      });

      input.val('');
    }
  }

  removeTodo(e) {
    const $this = $(e.currentTarget);
    const index = parseInt($this.attr('data-index'));

    const filtered = this.store.getState().todos.filter((item, i) => {
      return i != index;
    });

    this.store.setState({
      todos: filtered
    });
  }

  todo(todos) {
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

  render() {
    this.store.subscribe(() => {
      this.$todosList.html(this.todo(this.store.getState().todos));
    });
  }
}

new TodoApp();
