import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { configureStore } from 'util/configure-store/configure-store';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import { Root } from './components/root/root';

const history = createBrowserHistory();
const store = configureStore(history);

const init = Component =>
  render(
    <AppContainer>
      <Component history={history} store={store} />
    </AppContainer>,
    document.getElementById('app')
  );

init(Root);

if (module.hot) {
  module.hot.accept('./components/root/root', () => {
    // eslint-disable-next-line global-require
    const nextRoot = require('./components/root/root').Root;
    init(nextRoot);
  });
}
