import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from 'components/root/root';
import { STORE } from 'store';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Root store={STORE} />);
