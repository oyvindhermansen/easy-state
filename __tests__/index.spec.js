import observableState from '../src/index';
global.console = { warn: jest.fn() };

describe('observableState', () => {
  describe('top level API', () => {
    it('should throw when initial state is not a plain object', () => {
      expect(() => {
        observableState('state');
      }).toThrow();

      expect(() => {
        observableState([]);
      }).toThrow();

      expect(() => {
        observableState(403);
      }).toThrow();

      expect(() => {
        observableState({});
      }).not.toThrow();
    });
  });

  describe('observableState - getState', () => {
    it('should return the latest updated state at any point in time', () => {
      const store = observableState({ counter: 1 });

      expect(store.getState()).toEqual({ counter: 1 });
      store.setState({ counter: 2 });
      expect(store.getState()).toEqual({ counter: 2 });
    });
  });

  describe('observableState - setState', () => {
    it('should return undefined if no next state provided', () => {
      const store = observableState({ counter: 1 });
      expect(store.setState()).toEqual(undefined);
    });

    it('should throw if nextState is not a plain object', () => {
      const store = observableState({ counter: 1 });

      expect(() => {
        store.setState([]);
      }).toThrow();

      expect(() => {
        store.setState(4);
      }).toThrow();

      expect(() => {
        store.setState('this is some text');
      }).toThrow();

      expect(() => {
        store.setState({});
      }).not.toThrow();
    });

    it('should warn the user if trying to update a non-existing key', () => {
      const store = observableState({ counter: 1 });
      store.setState({ someUnknownKey: 'hello' });
      expect(console.warn).toBeCalled();
    });
  });

  describe('observableState - render', () => {
    it('should throw if argument is not a function', () => {
      const store = observableState({ counter: 1 });
      expect(() => {
        store.render();
      }).toThrow();

      expect(() => {
        store.render('');
      }).toThrow();

      expect(() => {
        store.render(4);
      }).toThrow();

      expect(() => {
        store.render([]);
      }).toThrow();

      expect(() => {
        store.render(() => {});
      }).not.toThrow();
    });
  });
});
