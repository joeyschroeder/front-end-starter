const DEFAULT_OPTIONS = { name: '[name].[ext]' };

export const buildFontLoaderConfig = (options = DEFAULT_OPTIONS) => {
  return {
    module: {
      rules: [
        {
          test: /\.(eot|otf|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader: 'url-loader',
            options,
          },
        },
      ],
    },
  };
};
