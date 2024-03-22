const DEFAULT_GENERATOR = { filename: '[name][ext]' };

/**
 * This function returns a webpack config object that tells webpack to use the
 * file-loader to load all files that match the given regex.
 * @param [generator] - The generator to use for this loader.
 * @returns A function that returns an object.
 */
module.exports = {
  buildFileLoaderConfig: (generator = DEFAULT_GENERATOR) => {
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
  },
};
