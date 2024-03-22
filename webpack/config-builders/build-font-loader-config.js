const DEFAULT_GENERATOR = { filename: '[name][ext]' };

/**
 * This function returns a webpack config object that tells webpack to use the
 * asset/resource generator for any file that matches the font file extensions.
 * @param [generator] - The generator function to use.
 * @returns A function that returns an object.
 */
module.exports = {
  buildFontLoaderConfig: (generator = DEFAULT_GENERATOR) => {
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
  },
};
