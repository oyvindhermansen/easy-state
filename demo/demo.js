import setState from '../src/index';
import $ from 'jquery';

function todo(todos) {
  return todos.map(t => `<li>${t}</li>`);
}

function todos() {
  const $todosContainer = $('.todos');
  const $addBtn = $('.add-todo');
  const $input = $('.input');

  // set application initialState
  const initialState = {
    todos: [],
  };
  // render UI initialState
  $todosContainer.html(todo(initialState.todos));

  $addBtn.on('click', (e) => {
    setState(initialState, (prevState) => {
      if ($input.val() !== '') {
        return {
          todos: [
            ...prevState.todos,
            $input.val()
          ],
          borderColor: prevState.todos.length % 2 ? '1px solid salmon' : '1px solid #eee'
        }
      }
    }, (updatedState) => {
      $todosContainer.html(todo(updatedState.todos))
      $input.val('');
    });
  });
}

todos();
