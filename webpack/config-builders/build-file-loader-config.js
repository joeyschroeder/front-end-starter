const DEFAULT_GENERATOR = { filename: '[name][ext]' };

export const buildFileLoaderConfig = (generator = DEFAULT_GENERATOR) => {
  return {
    module: {
      rules: [
        {
          test: /\.(gif|jpe?g|png|mp3|mp4|txt)$/i,
          type: 'asset/resource',
          generator,
        },
      ],
    },
  };
};
