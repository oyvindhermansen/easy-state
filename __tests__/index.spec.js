import createStateTree, { logger } from '../src/index';
global.console = { warn: jest.fn(), log: jest.fn() };

describe('createStateTree', () => {
  describe('top level API', () => {
    it('should provide 3 methods off the state tree', () => {
      const store = createStateTree({});
      const methods = Object.keys(store);

      expect(methods.length).toBe(3);
      expect(methods).toContain('getState');
      expect(methods).toContain('setState');
      expect(methods).toContain('subscribe');
    });

    it('should throw when initial state is not a plain object', () => {
      expect(() => {
        createStateTree('state');
      }).toThrow();

      expect(() => {
        createStateTree([]);
      }).toThrow();

      expect(() => {
        createStateTree(403);
      }).toThrow();

      expect(() => {
        createStateTree({});
      }).not.toThrow();
    });
  });

  describe('createStateTree - getState', () => {
    it('should return the latest updated state at any point in time', () => {
      const store = createStateTree({ counter: 1 });

      expect(store.getState()).toEqual({ counter: 1 });
      store.setState({ counter: 2 });
      expect(store.getState()).toEqual({ counter: 2 });
    });
  });

  describe('createStateTree - setState', () => {
    it('should return undefined if no next state provided', () => {
      const store = createStateTree({ counter: 1 });
      expect(store.setState()).toEqual(undefined);
    });

    it('should throw if nextState is not a plain object', () => {
      const store = createStateTree({ counter: 1 });

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
      const store = createStateTree({ counter: 1 });
      store.setState({ someUnknownKey: 'hello' });

      expect(console.warn).toBeCalled();
    });

    it('should warn the user if trying to update a non-existing key when using callback on setState', () => {
      const store = createStateTree({ counter: 1 });
      store.setState(prevState => {
        return {
          hello: 'world'
        };
      });

      expect(console.warn).toBeCalled();
    });

    it('should not reset state if you update only one key', () => {
      const store = createStateTree({ counter: 1, posts: [] });

      store.setState({
        posts: [...store.getState().posts, 'hello', 'world']
      });

      store.setState({
        counter: 2
      });

      const expectedStore = {
        counter: 2,
        posts: ['hello', 'world']
      };

      expect(store.getState()).toEqual(expectedStore);
    });
  });

  describe('createStateTree - subscribe', () => {
    it('should throw if argument is not a function', () => {
      const store = createStateTree({ counter: 1 });
      expect(() => {
        store.subscribe();
      }).toThrow();

      expect(() => {
        store.subscribe('');
      }).toThrow();

      expect(() => {
        store.subscribe(4);
      }).toThrow();

      expect(() => {
        store.subscribe([]);
      }).toThrow();

      expect(() => {
        store.subscribe(() => {});
      }).not.toThrow();
    });

    it('should remove relevant listener from listen', () => {
      const store = createStateTree({ counter: 1 });
      const listener = jest.fn();

      store.subscribe(listener);
      const unsubscribeSecond = store.subscribe(listener);

      unsubscribeSecond();
      unsubscribeSecond();

      store.setState({ counter: 2 });
      expect(listener.mock.calls.length).toBe(1);
    });
  });

  describe('logger', () => {
    it('should throw if no store is provided', () => {
      expect(() => {
        logger();
      }).toThrow();
    });

    it('should throw if store is not an instance of createStateTree', () => {
      const fakeStore = { counter: 1 };

      expect(() => {
        logger(fakeStore);
      }).toThrow();
    });

    it('should log the prev and next state to the console if state changes', () => {
      const store = createStateTree({ counter: 1 });

      logger(store);
      store.setState({ counter: 2 });

      expect(console.log).toBeCalled();
    });
  });
});
