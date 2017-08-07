import $ from 'jquery';
import observableState from '../src/index';

const store = observableState({
  counter: 1,
  color: 'black'
});

store.render(() => {
  $('.counter').html(store.getState().counter);
  $('.counter').css('color', store.getState().color);
});

$('.btn').on('click', () => {
  /*
  store.setState({
    counter: store.getState().counter + 1,
    color: store.getState().counter % 2 ? 'salmon' : 'red',
    ohshit: 'nope',
    dope: 'haha'
  })
  */
  store.setState(prevState => ({
    counter: prevState.counter + 1,
    color: prevState.counter % 2 ? 'salmon' : 'red',
    ohshit: 'nope',
    dope: 'haha'
  }));

  console.log('NEXT STATE: ', store.getState())
});

/*

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
*/
