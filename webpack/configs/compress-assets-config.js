import CompressionPlugin from 'compression-webpack-plugin';

export const COMPRESS_ASSETS_CONFIG = {
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      deleteOriginalAssets: false,
      filename: '[path][base].gz[query]',
      test: /\.(js|css)(\?.*)?$/i,
    }),
  ],
};
