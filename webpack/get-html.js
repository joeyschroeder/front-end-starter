import HtmlWebpackPlugin from 'html-webpack-plugin';

export const getHtml = ({ title, template }) => {

    return {
        plugins: [
            new HtmlWebpackPlugin({
                title,
                template,
                minify: {
                    collapseInlineTagWhitespace: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                }
            })
        ]
    };
};
