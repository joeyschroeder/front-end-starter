export const loadFonts = ({ options } = {}) => {
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
