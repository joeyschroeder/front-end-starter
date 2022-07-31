import merge from 'webpack-merge';
import path from 'path';
import { COMPRESS_ASSETS_CONFIG } from './webpack/configs/compress-assets-config';
import { DEVTOOL_CONFIG } from './webpack/configs/devtool-config';
import { JAVASCRIPT_LOADER_CONFIG } from './webpack/configs/javascript-loader-config';
import { OPTIMIZATION_CONFIG } from './webpack/configs/optimization-config';
import { STATS_CONFIG } from './webpack/configs/stats-config';
import { buildCleanConfig } from './webpack/config-builders/build-clean-config';
import { buildDevServerConfig } from './webpack/config-builders/build-dev-server-config';
import { buildFaviconConfig } from './webpack/config-builders/build-favicon-config';
import { buildFileLoaderConfig } from './webpack/config-builders/build-file-loader-config';
import { buildFontLoaderConfig } from './webpack/config-builders/build-font-loader-config';
import { buildHtmlConfig } from './webpack/config-builders/build-html-config';
import { buildStyleLoaderConfig } from './webpack/config-builders/build-style-loader-config';
import { POLYFILLS_CONFIG } from './webpack/configs/polyfills-config';

const baseDirectory = '';
const devServerHost = 'localhost';
const devServerPort = '9090';
const outputDirectory = 'docs';
const outputPublicPath = '';
const title = 'Front-End Starter | Joey Schroeder';
const siteName = 'Front-End Starter';
const url = 'https://joeyschroeder.github.io/front-end-starter';
const description =
  'A front-end starter application including React, Redux, Webpack and more!';

const entryPoint = path.join(__dirname, baseDirectory, 'src/index.js');
const faviconPath = path.join(
  __dirname,
  baseDirectory,
  'src/assets/favicon.png'
);
const templatePath = path.join(
  __dirname,
  baseDirectory,
  'src/templates/main.ejs'
);

const OUTPUT_PATH = path.resolve(__dirname, outputDirectory);
const ENTRY_CONFIG = { entry: path.resolve(__dirname, entryPoint) };

const OUTPUT_CONFIG = {
  output: {
    filename: '[name].js?v=[contenthash]',
    path: OUTPUT_PATH,
    publicPath: outputPublicPath,
  },
};

const COMMON_CONFIG = merge([
  ENTRY_CONFIG,
  JAVASCRIPT_LOADER_CONFIG,
  POLYFILLS_CONFIG,
  buildHtmlConfig({
    template: templatePath,
    templateParameters: { description, siteName, url },
    title,
  }),
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
  buildFaviconConfig(faviconPath),
  buildFontLoaderConfig({ filename: 'fonts/[name][ext]?v=[query]' }),
  buildFileLoaderConfig({ filename: 'images/[name][ext]' }),
  buildStyleLoaderConfig(true),
]);

export default ({ production = false, development = false } = {}) => {
  let mode = 'none';

  if (development) mode = 'development';
  if (production) mode = 'production';

  process.env.BABEL_ENV = mode;

  if (production) return merge(PRODUCTION_CONFIG, { mode });
  return merge(DEVELOPMENT_CONFIG, { mode });
};
