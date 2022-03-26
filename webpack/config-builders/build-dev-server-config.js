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
      client: {
        overlay: true,
        progress: true,
      },
      historyApiFallback: true,
      host,
      hot: true,
      open: false,
      port,
      proxy,
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
