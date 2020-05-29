import CopyPlugin from 'copy-webpack-plugin';

export const copyFiles = ({ from, to } = {}) => {
  return {
    plugins: [
      new CopyPlugin({
        patterns: [{ from, to }],
      }),
    ],
  };
};
