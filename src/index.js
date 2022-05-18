import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { configureStore } from 'util/configure-store/configure-store';
import { render } from 'react-dom';
import { Root } from './components/root/root';
import { Server } from './server';

const store = configureStore();

// mock miragejs server
Server();

const init = (Component) =>
  render(
    <AppContainer>
      <Component store={store} />
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
