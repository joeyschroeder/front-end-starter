import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { Root } from './components/root/root.component';
import { configureStore } from './util/configure-store';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';

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
  module.hot.accept('./components/root/root.component', () => {
    const nextRoot = require('./components/root/root.component').Root;
    init(nextRoot);
  });
}
