import path from 'path';
import webpack from 'webpack';

export const devServer = ({ host, port }) => {
  return {
    devServer: {
      historyApiFallback: true,
      host,
      open: false,
      overlay: true,
      port,
      stats: 'errors-only',
    },
    plugins: [
      new webpack.WatchIgnorePlugin([path.join(__dirname, 'node_modules')]),
      new webpack.NamedModulesPlugin(),
    ],
  };
};
