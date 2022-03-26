const DEFAULT_GENERATOR = { filename: '[name][ext]' };

export const buildFontLoaderConfig = (generator = DEFAULT_GENERATOR) => {
  return {
    module: {
      rules: [
        {
          test: /\.(eot|otf|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          type: 'asset/resource',
          generator,
        },
      ],
    },
  };
};
