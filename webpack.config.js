const path = require('path');
const { merge } = require('webpack-merge');
const { JAVASCRIPT_LOADER_CONFIG } = require('./webpack/configs/javascript-loader-config');
const { POLYFILLS_CONFIG } = require('./webpack/configs/polyfills-config');
const { buildHtmlConfig } = require('./webpack/config-builders/build-html-config');
const { DEVTOOL_CONFIG } = require('./webpack/configs/devtool-config');
const { buildDevServerConfig } = require('./webpack/config-builders/build-dev-server-config');
const { buildFontLoaderConfig } = require('./webpack/config-builders/build-font-loader-config');
const { buildFileLoaderConfig } = require('./webpack/config-builders/build-file-loader-config');
const { buildStyleLoaderConfig } = require('./webpack/config-builders/build-style-loader-config');
const { COMPRESS_ASSETS_CONFIG } = require('./webpack/configs/compress-assets-config');
const { OPTIMIZATION_CONFIG } = require('./webpack/configs/optimization-config');
const { STATS_CONFIG } = require('./webpack/configs/stats-config');
const { buildCleanConfig } = require('./webpack/config-builders/build-clean-config');

const baseDirectory = '';
const devServerHost = 'localhost';
const devServerPort = '9090';
const outputDirectory = 'docs';
const outputPublicPath = '';

const title = 'Front-End Starter | Joey Schroeder';

const siteName = 'Front-End Starter';
const url = 'https://joeyschroeder.github.io/front-end-starter';
const description = 'A front-end starter application including React, Redux, Webpack and more!';

const entryPoint = path.join(__dirname, baseDirectory, 'src/index.js');
const faviconPath = path.join(__dirname, baseDirectory, 'src/assets/images/public/favicon.png');
const templatePath = path.join(__dirname, baseDirectory, 'src/templates/main.ejs');

const OUTPUT_PATH = path.resolve(__dirname, outputDirectory);
const ENTRY_CONFIG = { entry: path.resolve(__dirname, entryPoint) };

const OUTPUT_CONFIG = {
  output: {
    filename: '[name].js?v=[contenthash]',
    path: OUTPUT_PATH,
    publicPath: path.join(outputPublicPath, '/'),
  },
};

const COMMON_CONFIG = merge([
  ENTRY_CONFIG,
  JAVASCRIPT_LOADER_CONFIG,
  POLYFILLS_CONFIG,
  buildHtmlConfig({ faviconPath, templatePath, title, templateParameters: { siteName, url, description } }),
]);

const DEVELOPMENT_CONFIG = merge([
  COMMON_CONFIG,
  DEVTOOL_CONFIG,
  buildDevServerConfig({
    baseDirectory,
    host: devServerHost,
    port: devServerPort,
  }),
  buildFontLoaderConfig(),
  buildFileLoaderConfig(),
  buildStyleLoaderConfig(),
]);

const PRODUCTION_CONFIG = merge([
  COMMON_CONFIG,
  COMPRESS_ASSETS_CONFIG,
  OPTIMIZATION_CONFIG,
  OUTPUT_CONFIG,
  STATS_CONFIG,
  buildCleanConfig(OUTPUT_PATH),
  buildFontLoaderConfig({ filename: 'fonts/[name][ext]' }),
  buildFileLoaderConfig({ filename: 'files/[name][ext]' }),
  buildStyleLoaderConfig(true),
]);

module.exports = ({ production = false, development = false } = {}) => {
  let mode = 'none';

  if (development) mode = 'development';
  if (production) mode = 'production';

  process.env.BABEL_ENV = mode;

  if (production) return merge(PRODUCTION_CONFIG, { mode });
  return merge(DEVELOPMENT_CONFIG, { mode });
};
