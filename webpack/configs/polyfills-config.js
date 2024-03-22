require('buffer');

const { ProvidePlugin } = require('webpack');

/* A webpack plugin that injects modules into the application. */
module.exports = {
  POLYFILLS_CONFIG: {
    plugins: [
      new ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
  },
};
