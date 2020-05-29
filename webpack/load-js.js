export const loadJs = ({ include, exclude, options } = {}) => {
  return {
    module: {
      rules: [
        {
          exclude,
          include,
          loader: 'babel-loader',
          options,
          test: /\.js$/,
        },
      ],
    },
  };
};
