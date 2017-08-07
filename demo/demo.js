import $ from 'jquery';
import observableState from '../src/index';

const store = observableState({
  counter: 1,
  color: 'black'
});

$('.btn').on('click', () => {

  store.setState({
    counter: store.getState().counter + 1,
    color: store.getState().counter % 2 ? 'salmon' : 'black',
    lol: 'something something something'
  });

});

store.render(() => {
  $('.counter').html(store.getState().counter);
  $('.counter').css('color', store.getState().color);
});
