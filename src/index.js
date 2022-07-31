import React from 'react';
import { configureStore } from 'util/configure-store/configure-store';
import { render } from 'react-dom';
import { Root } from './components/root/root';

const store = configureStore();

const init = (Component) =>
  render(<Component store={store} />, document.getElementById('app'));

init(Root);
