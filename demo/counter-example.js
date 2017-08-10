import $ from 'jquery';
import createStateTree from '../src/index';

const store = createStateTree({
  counter: 0
});

function app() {
  const { counter } = store.getState();

  $('button').on('click', handleIncrement);

  store.render(() => {
    $('.counterElem').html(counter);
  });
}

function handleIncrement() {
  const { counter } = store.getState();

  store.setState({
    counter: counter + 1
  });
}
