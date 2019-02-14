import CleanWebpackPlugin from 'clean-webpack-plugin';

export const clean = path => {
  return {
    plugins: [new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [path] })]
  };
};
