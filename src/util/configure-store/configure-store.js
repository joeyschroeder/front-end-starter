import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createRootReducer } from 'store/create-root-reducer';

export function configureStore() {
  const store = createStore(createRootReducer(), applyMiddleware(thunk));

  return store;
}
