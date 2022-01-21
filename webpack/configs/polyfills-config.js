import { ProvidePlugin } from 'webpack';

export const POLYFILLS_CONFIG = {
  plugins: [
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
};
