import setState from '../src/index';
import $ from 'jquery';

function counterExample() {

  const initialState = {
    counter: 0,
    color: 'black'
  }

  const $counter = $('#counter');
  const $btn = $('#incrementBtn');

  $counter
    .html(initialState.counter)
    .css('color', initialState.color)

  $btn.on('click', () => {
    setState(initialState, (prevState) => ({
      counter: prevState.counter + 1,
      color: prevState.counter % 2 ? 'black' : 'salmon'
    }), (updatedState) => {
      // Do your updated state within the same setState instance.
      $counter
        .html(updatedState.counter)
        .css('color', updatedState.color)
    })
  })

}

counterExample();
