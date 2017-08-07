import $ from 'jquery';
import observableState from '../src/index';

const store = observableState({
  counter: 1,
  color: 'black'
});

$('.btn').on('click', () => {

  store.setState(prevState => ({
    counter: prevState.counter + 1,
    color: prevState.counter % 2 ? 'salmon' : 'black'
  }));

});

store.render(() => {
  $('.counter').html(store.getState().counter);
  $('.counter').css('color', store.getState().color);
});
