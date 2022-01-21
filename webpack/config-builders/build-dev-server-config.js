import path from 'path';
import { WatchIgnorePlugin } from 'webpack';

export const buildDevServerConfig = ({
  baseDirectory,
  host,
  port,
  proxy,
} = {}) => {
  return {
    devServer: {
      historyApiFallback: true,
      host,
      hot: true,
      inline: true,
      open: false,
      overlay: true,
      port,
      proxy,
      stats: 'errors-only',
    },
    plugins: [
      new WatchIgnorePlugin({
        paths: [path.join(baseDirectory, 'node_modules')],
      }),
    ],
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  };
};
