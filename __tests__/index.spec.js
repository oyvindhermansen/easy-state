import { createStateTree, combineStores } from '../src/index';
global.console = { warn: jest.fn() };

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
  });
});

describe('combineStores', () => {
  it('should throw if stores is not a plain object', () => {
    expect(() => {
      combineStores([]);
    }).toThrow();

    expect(() => {
      combineStores('');
    }).toThrow();

    expect(() => {
      combineStores(23432);
    }).toThrow();

    expect(() => {
      combineStores(() => {});
    }).toThrow();

    expect(() => {
      combineStores({});
    }).not.toThrow();
  });

  it('should make multiple stores available through the rootStore', () => {
    const storeOne = createStateTree({ hello: 'world' });
    const storeTwo = createStateTree({ foo: 'bar' });

    const rootStore = combineStores({
      storeOne,
      storeTwo
    });

    expect(rootStore.storeOne.getState()).toEqual({ hello: 'world' });
    expect(rootStore.storeTwo.getState()).toEqual({ foo: 'bar' });
  });
});
