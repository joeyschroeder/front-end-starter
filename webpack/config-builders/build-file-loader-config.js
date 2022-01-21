const DEFAULT_OPTIONS = { name: '[name].[ext]' };

export const buildFileLoaderConfig = (options = DEFAULT_OPTIONS) => {
  return {
    module: {
      rules: [
        {
          test: /\.(gif|jpe?g|png|mp3|mp4|txt)$/i,
          use: {
            loader: 'url-loader',
            options,
          },
        },
      ],
    },
  };
};
