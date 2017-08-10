import createStateTree from '../src/index';
global.console = { warn: jest.fn() };

describe('createStateTree', () => {
  describe('top level API', () => {
    it('should provide 3 methods off the state tree', () => {
      const store = createStateTree({});
      const methods = Object.keys(store);

      expect(methods.length).toBe(3);
      expect(methods).toContain('getState');
      expect(methods).toContain('setState');
      expect(methods).toContain('render');
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

  describe('createStateTree - render', () => {
    it('should throw if argument is not a function', () => {
      const store = createStateTree({ counter: 1 });
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
