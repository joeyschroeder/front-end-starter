import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const buildCleanConfig = (path) => {
  return {
    plugins: [new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [path] })],
  };
};
