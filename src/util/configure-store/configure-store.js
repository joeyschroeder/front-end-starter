import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createRootReducer } from 'store/create-root-reducer';

export function configureStore() {
  const store = createStore(createRootReducer(), applyMiddleware(thunk));

  /* istanbul ignore next */
  // This is ignored during testing because there is
  // no way to mock npm's "module" during testing.
  if (module.hot) {
    module.hot.accept('../../store/create-root-reducer', () => {
      // eslint-disable-next-line global-require
      const nextReducers = require('../../store/create-root-reducer');
      store.replaceReducer(nextReducers);
    });
  }

  return store;
}
