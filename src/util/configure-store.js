import { applyMiddleware, createStore } from 'redux';

import { createRootReducer } from 'store/create-root-reducer';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

export const configureStore = history => {
  const store = createStore(createRootReducer(history), applyMiddleware(routerMiddleware(history), thunk));

  if (module.hot) {
    module.hot.accept('../store/create-root-reducer', () => {
      // eslint-disable-next-line global-require
      const nextReducers = require('../store/create-root-reducer');
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};
