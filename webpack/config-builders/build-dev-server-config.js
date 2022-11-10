import path from 'path';
import { WatchIgnorePlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export const buildDevServerConfig = ({
  baseDirectory,
  host,
  port,
  proxy,
} = {}) => {
  return {
    devServer: {
      client: {
        overlay: true,
      },
      devMiddleware: {
        stats: 'errors-only',
      },
      historyApiFallback: true,
      host,
      hot: true,
      open: false,
      port,
      proxy,
    },
    plugins: [
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
      new WatchIgnorePlugin({
        paths: [path.join(baseDirectory, 'node_modules')],
      }),
    ],
  };
};
