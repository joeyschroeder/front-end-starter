import { applyMiddleware, createStore } from 'redux';

import { createRootReducer } from '../redux/create-root-reducer';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

export const configureStore = history => {
  const store = createStore(createRootReducer(history), applyMiddleware(routerMiddleware(history), thunk));

  if (module.hot) {
    module.hot.accept('../redux/create-root-reducer', () => {
      const nextReducers = require('../redux/create-root-reducer');
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};
