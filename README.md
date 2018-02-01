# Easy-state
Simple state manipulation without any frameworks.
<br><br>
[![Build Status](https://travis-ci.org/oyvindhermansen/easy-state.svg?branch=master)](https://travis-ci.org/oyvindhermansen/easy-state) [![codecov](https://codecov.io/gh/oyvindhermansen/easy-state/branch/master/graph/badge.svg)](https://codecov.io/gh/oyvindhermansen/easy-state)


## Visit the [docs page](https://oyvindhermansen.github.io/easy-state/)

---
### Developing easy-state

Install
```sh
$ git clone https://github.com/oyvindhermansen/easy-state.git
$ cd easy-state
$ yarn install
```

Run the demo whitch is powered by webpack and webpack dev-server.
The dev-server listens for changes in both `demo/` and `src/`, so you can write module implementation and testing it in the browser at the same time.
```sh
$ yarn dev
```

Unit testing
```sh
$ yarn test
$ yarn test:watch
```

Test coverage
```sh
$ yarn coverage
```

Prettier
```sh
# Targets src, demo and __tests__ folders.
$ yarn prettier
```

Build for production
```sh
$ yarn build
```

Run the website locally with Gatsby
```sh
$ cd docs && yarn develop
```

### Inspiration
The library is inspired by both React and Redux. It's sort of a Redux-lib, without the reducers, action-creators and dispatching actions, but instead changing state with setState()-method like they do in React.
