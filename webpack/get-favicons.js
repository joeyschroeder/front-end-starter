import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

export const getFavicons = ({ sourcePath }) => {
  return {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: sourcePath,
        background: '#fff',
        emitStats: false,
        inject: true, // Inject the html into the html-webpack-plugin
        persistentCache: true,
        prefix: './icons/',
        favicons: {
          icons: {
            android: false,
            appleIcon: false,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: false,
            windows: false,
            yandex: false,
          },
        },
      }),
    ],
  };
};
