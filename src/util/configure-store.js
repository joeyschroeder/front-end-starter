import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import Reducers from '../ducks/index';
import thunk from 'redux-thunk';

export const configureStore = history => {
    const store = createStore(
        connectRouter(history)(Reducers),
        applyMiddleware(routerMiddleware(history), thunk)
    );

    if (module.hot) {
        module.hot.accept('../ducks/index', () => {
            const nextReducers = require('../ducks/index');
            store.replaceReducer(nextReducers);
        });
    }

    return store;
};
