import React from 'react';
import { configureStore } from 'util/configure-store/configure-store';
import { createRoot } from 'react-dom/client';
import { Root } from './components/root/root';

const container = document.getElementById('app');
const root = createRoot(container);
const store = configureStore();

root.render(<Root store={store} />);
