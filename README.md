# setState
Simpler state manipulation without any frameworks.

<small>The module is inspired by React's setState, and uses Redux in it's core.</small>

## API
This module only provides the function `setState`.
It takes three parameteres:

1. `initialState`
2. `nextState`
3. `callback function for rendering`

Example:

```js
import setState from 'setState';

// initialize your state tree
const initialState = {
  counter: 0
};

//set UI with the initial state
yourDOMNode.innerHTML = initialState.counter;

// use setState to alter the state inside a click handler

btn.addEventListener('click', () => {

  setState(initialState, (prevState) => ({
    counter: prevState.counter + 1
  }), (updatedState) => {
    // set your UI with the updated state
    yourDOMNode.innerHTML = updatedState.counter;
  });

});

```
# setState
