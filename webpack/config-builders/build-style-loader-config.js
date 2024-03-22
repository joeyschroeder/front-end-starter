require('autoprefixer');
require('css-loader');
require('postcss');
require('postcss-loader');
require('sass');
require('sass-loader');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * It returns a webpack config object that contains a module rule for both CSS and
 * SCSS files, and a MiniCssExtractPlugin instance
 * @param [production=false] - boolean - whether or not we're in production mode
 * @returns An object with a module property and a plugins property.
 */
module.exports = {
  buildStyleLoaderConfig: (production = false) => {
    const cssLoader = {
      loader: 'css-loader',
      options: {
        modules: false,
        sourceMap: false,
      },
    };

    const cssModulesLoader = {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        modules: {
          localIdentName: production ? '[contenthash:base64:5]' : '[name][local][contenthash:base64:5]',
        },
        sourceMap: !production,
      },
    };

    const postCssLoader = {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer'],
        },
        sourceMap: !production,
      },
    };

    const sassLoader = {
      loader: 'sass-loader',
      options: { sourceMap: !production },
    };

    return {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [production ? MiniCssExtractPlugin.loader : 'style-loader', cssLoader],
          },
          {
            test: /\.scss$/,
            use: [
              production ? MiniCssExtractPlugin.loader : 'style-loader',
              cssModulesLoader,
              postCssLoader,
              sassLoader,
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          chunkFilename: '[name]-[id].css?v=[contenthash]',
          filename: '[name].css?v=[contenthash]',
        }),
      ],
    };
  },
};
