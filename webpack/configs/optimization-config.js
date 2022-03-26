import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

export const OPTIMIZATION_CONFIG = {
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    moduleIds: 'named',
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};
