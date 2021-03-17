import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const loadStyles = ({ production = false } = {}) => {
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
      modules: true,
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
    options: {
      sourceMap: !production,
    },
  };

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            production ? MiniCssExtractPlugin.loader : 'style-loader',
            cssLoader,
          ],
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
        filename: '[name]-[contenthash].css',
        chunkFilename: '[id]-[contenthash].css',
      }),
    ],
  };
};
