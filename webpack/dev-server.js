import path from 'path';
import { WatchIgnorePlugin, ProvidePlugin } from 'webpack';

export const devServer = ({ host, port }) => {
  return {
    devServer: {
      historyApiFallback: true,
      host,
      hot: true,
      inline: true,
      open: false,
      overlay: true,
      port,
      stats: 'errors-only',
    },
    plugins: [
      new WatchIgnorePlugin({ paths: [path.join(__dirname, 'node_modules')] }),
      new ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  };
};
