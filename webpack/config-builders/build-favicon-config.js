import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

export const buildFaviconConfig = (sourcePath) => {
  if (!sourcePath) return {};

  return {
    plugins: [
      new FaviconsWebpackPlugin({
        background: '#fff',
        cache: true,
        emitStats: false,
        inject: true,
        logo: sourcePath,
        persistentCache: true,
        prefix: 'icons/',
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
