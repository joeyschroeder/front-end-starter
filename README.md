# 🌈 Front-End Starter
An application using [React](https://reactjs.org/) designed to be used as a starting point for front-end applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### Node.js & Node Package Manager
You'll need to download and install Node.js version 6 or higher and Node Package Manager for installing dependencies.  Node Package Manager is installed when installing Node.js.  Download the latest version of Node.js for [macOS](https://nodejs.org/dist/v6.11.0/node-v6.11.0.pkg) or [Windows (64-bit)](https://nodejs.org/dist/v6.11.0/node-v6.11.0-x86.msi).

### Installing

First, you'll need to clone this repository to your working directory on your local machine.  Second, install the project dependencies using Node Package Manager through the command line.

#### Installing Dependencies

1. Open your command line.
2. Navigate to your working directory.
3. Clone this repository to your working directory.
4. Navigate inside the front-end-starter directory.
5. Install the dependencies.

```
cd /path/to/working/directory
hg clone github.com/joeyschroeder/front-end-starter
cd /front-end-starter
npm install
```

## Scripts
### `build`
This command runs `webpack` in "production" mode.  It uses the `src/index.js` file as it's entry point, and generates a JavaScript `main.js` and `vendor.js` file in `docs/`.

### `coverage`
This command runs `jest --coverage`.  It prints the test successes/failures in the command line and creates an .html test coverage report in `./coverage/lcov-report/index.html`.

### `start`
This command runs `webpack-dev-server` in "development" mode. Hot reloading is enabled.

### `test`
This command runs `jest`. It prints test successes/failures in the command line.

## To-Dos
* Contribution Guidelines
* Documentation

## Dependencies
The following are the dependencies in `package.json` separated into the categories in which the dependencies are required.

### Development

#### Linting JavaScript
* babel-eslint
* eslint
* eslint-config-airbnb
* eslint-config-prettier
* eslint-config-prettier
* eslint-plugin-import
* eslint-plugin-jsx-a11y
* eslint-plugin-react
* prettier
* react-hot-loader

#### Linting Styles
* stylelint
* stylelint-config-standard

#### Transpilation
* @babel/cli
* @babel/plugin-proposal-class-properties
* @babel/preset-env
* @babel/preset-react

#### Webpack
* @babel/register // this is necessary to use the .babel.js extension on the Wepback configuration
* clean-webpack-plugin
* path
* webpack
* webpack-cli
* webpack-dev-server
* webpack-merge

##### Fonts
* file-loader
* url-loader

##### JavaScript
* babel-loader
* uglifyjs-webpack-plugin

##### Styles
* autoprefixer
* css-loader
* mini-css-extract-plugin
* node-sass
* optimize-css-assets-webpack-plugin
* postcss-loader
* sass-loader
* style-loader

##### Templates
* html-webpack-plugin

### Production
* font-awesome

#### JavaScript
* classnames
* connected-react-router
* lodash
* prop-types
* react
* react-dom
* react-redux
* react-router-dom
* redux
* redux-actions
* redux-thunk

#### Styles
* normalize.css
* animate.css

### Testing
* @babel/preset-env
* @babel/preset-react
* babel-core // this is necessary as a bridge until babel-jest supports Babel 7
* babel-jest
* enzyme
* enzyme-adapter-react-16
* eslint-plugin-jest
* identity-obj-proxy
* jest
* react
* react-dom
* react-test-renderer

## Authors

* **Joey Schroeder** - *Initial work*

See also the list of [contributors](https://github.com/joeyschroeder/front-end-starter/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details

## Acknowledgments

* Hat tip to anyone who's code was used
