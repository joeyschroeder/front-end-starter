const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * It takes in a few options and returns a webpack config object with a single
 * plugin that generates an HTML file
 * @param [] - faviconPath - the path to the favicon file
 * @returns An object with a plugins property that is an array with a single
 * HtmlWebpackPlugin instance.
 */
module.exports = {
  buildHtmlConfig: ({ faviconPath, templatePath, title, templateParameters } = {}) => {
    return {
      plugins: [
        new HtmlWebpackPlugin({
          favicon: faviconPath,
          filename: 'index.html',
          inject: true,
          minify: {
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
          },
          template: templatePath,
          templateParameters,
          title,
        }),
      ],
    };
  },
};
