const CompressionPlugin = require('compression-webpack-plugin');

/* A webpack plugin that compresses assets. */
module.exports = {
  COMPRESS_ASSETS_CONFIG: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        deleteOriginalAssets: false,
        filename: '[path][base].gz[query]',
        test: /\.(js|css)(\?.*)?$/i,
      }),
    ],
  },
};
