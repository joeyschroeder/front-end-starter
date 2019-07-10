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
git clone github.com/joeyschroeder/front-end-starter
cd /front-end-starter
npm install
```

## Scripts
### `build`
This command runs `webpack` in "production" mode.  It uses the `src/index.js` file as it's entry point, and generates a JavaScript `main.js` and `vendor.js` file in `docs/`.

### `clean`
This command delets the `dist/` directory.

### `eslint`
This command runs `eslint src/`.  It prints eslint warnings and errors in the command line.

### `eslint:fix`
This command runs `eslint --fix src/`.  It attempts to fix any eslint warnings/errors then prints the remaining warnings and errors in the command line.

#### `start`
This command runs `webpack-dev-server` in "development" mode on the documentation. Hot reloading is enabled.  Once running, you can access the documentation running locally at [localhost:9090/](http://localhost:9090/).

### `stylelint`
This command runs `stylelint 'src/**/*/*.scss`.  It prints styelint warnings and errors in the command line.

### `stylelint:fix`
This command runs `stylelint --fix 'src/**/*/*.scss`.  It attempts to fix any stylelint warnings/errors then prints the remaining warnings and errors in the command line.

### `test`
This command runs `jest`. It prints test successes/failures in the command line.

### `test:changed`
This command runs `jest -o` on the JavaScript files that have changed or are uncommitted. It prints test successes/failures in the command line.

### `test:coverage`
This command runs `jest --coverage`.  It prints the test successes/failures in the command line and creates an .html test coverage report in `./coverage/lcov-report/index.html`.

## To-Dos
* Contribution Guidelines
* Documentation

## Dependencies
The following are the dependencies in `package.json` separated into the categories in which the dependencies are required.

### Development

#### Git
* pre-commit // simple package to integration with git pre-commit

#### Linting JavaScript
* babel-eslint
* eslint
* eslint-config-airbnb
* eslint-config-prettier
* eslint-import-resolver-babel-module
* eslint-plugin-import
* eslint-plugin-jsx-a11y
* eslint-plugin-prettier
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
* babel-plugin-lodash
* babel-plugin-transform-react-pure-class-to-function

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
* animate.css
* normalize.css

### Testing
* @babel/preset-env
* @babel/preset-react
* babel-core // this is necessary as a bridge until babel-jest supports Babel 7
* babel-jest
* enzyme
* enzyme-adapter-react-16
* eslint-plugin-jest
* eslint-plugin-jest
* identity-obj-proxy
* jest
* jest-dot-reporter
* react
* react-dom
* react-test-renderer

## Built With
* [Babel](https://babeljs.io/) - A JavaScript transpiler
* [Jest](https://jestjs.io/) - A JavaScript testing framework
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Webpack](https://github.com/webpack/webpack) - A JavaScript module bundler

## Authors

* **Joey Schroeder** - *Initial work*

See also the list of [contributors](https://github.com/joeyschroeder/front-end-starter/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details

## Acknowledgments

* Hat tip to anyone who's code was used
