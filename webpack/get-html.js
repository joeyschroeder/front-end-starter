import HtmlWebpackPlugin from 'html-webpack-plugin';

export const getHtml = ({ title, template, templateParameters }) => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        minify: {
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        },
        template,
        templateParameters,
        title,
      }),
    ],
  };
};
