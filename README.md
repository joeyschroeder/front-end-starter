[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/joeyschroeder/front-end-starter.svg)](https://github.com/joeyschroeder/front-end-starter/issues)
[![GitHub stars](https://img.shields.io/github/stars/joeyschroeder/front-end-starter.svg)](https://github.com/joeyschroeder/front-end-starter/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# 🌈 Front-End Starter

An application using [React](https://reactjs.org/) and [Redux](https://redux.js.org/) designed to be used as a starting point for front-end applications.

## <a name='TableofContents'></a>Table of Contents
<!-- vscode-markdown-toc -->
* [Getting Started](#GettingStarted)
	* [Prerequisites](#Prerequisites)
		* [Node.js & Node Package Manager](#Node.jsNodePackageManager)
	* [Installing](#Installing)
* [Development](#Development)
	* [Webpack Dev Server](#WebpackDevServer)
		* [Hot Reloading](#HotReloading)
	* [ESLint and Prettier.io](#ESLintandPrettier.io)
	* [Committing](#Committing)
		* [Pre-Commit Hooks](#Pre-CommitHooks)
* [Testing](#Testing)
* [Scripts](#Scripts)
	* [`build`](#build)
	* [`clean`](#clean)
	* [`eslint`](#eslint)
	* [`eslint:fix`](#eslint:fix)
	* [`start`](#start)
	* [`stylelint`](#stylelint)
	* [`stylelint:fix`](#stylelint:fix)
	* [`test`](#test)
	* [`test:changed`](#test:changed)
	* [`test:coverage`](#test:coverage)
* [Authors](#Authors)
* [Acknowledgments](#Acknowledgments)
<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

<a name="getting-started"></a>

## <a name='GettingStarted'></a>Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

<a name="prerequisites"></a>

### <a name='Prerequisites'></a>Prerequisites

#### <a name='Node.jsNodePackageManager'></a>Node.js & Node Package Manager

You'll need to download and install Node.js version 6 or higher and Node Package Manager for installing dependencies. Node Package Manager is installed when installing Node.js. Download the latest version of Node.js [here](https://nodejs.org/en/download/).

<a name="installing"></a>

### <a name='Installing'></a>Installing

You'll need to clone this repository to your working directory on your local machine, then install the project dependencies using **Node Package Manager** through the command line.

First, navigate to your working directory:

```
cd path/to/your/working/directory
```

Clone this repository to your working directory:
First clone the repository:

```
git clone https://github.com/joeyschroeder/front-end-starter.git
```

After cloning is complete, navigate inside the newly cloned repository:

```
cd front-end-starter
```

Finally, run `npm install` to install all project dependencies:

```
npm install
```

<a name="development"></a>

## <a name='Development'></a>Development

<a name="webpack-dev-server"></a>

### <a name='WebpackDevServer'></a>Webpack Dev Server

During development, this application can be run in a web browser using [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/). To start the application in a web browser, navigate to the root of the project directory in the command line and run `npm run start`. This command will print out a URL which can be opened in a web browser.

First, navigate to the root of the project:

```
cd path/to/your/working/directory/front-end-starter
```

Then start the application:

```
npm run start
```

After Webpack Dev Server has compiled the development bundle, it will print out something similar to following:

```
ℹ ｢wds｣: Project is running at http://localhost:9090/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: 404s will fallback to /index.html
ℹ ｢wdm｣:
ℹ ｢wdm｣: Compiled successfully.
```

Open the URL [http://localhost:9090/](http://localhost:9090/) in your web browser.

#### <a name='HotReloading'></a>Hot Reloading

This project is equipped with [Webpack Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/). This means that while Webpack Dev Server is running the documentation application, you can make changes to the files and they will automatically update in the web browser. Occasionally, the web browser may need a manual refresh if you're changes affect application state or changes outside of the React life-cycle.

<a name="eslint-and-prettierio"></a>

### <a name='ESLintandPrettier.io'></a>ESLint and Prettier.io

This project is equipped with [ESLint](https://eslint.org/) and [Prettier.io](https://prettier.io/) to ensure a homogeneous code-style and JavaScript syntactical error prevention.

During development, you can run `npm run eslint:fix` in the root of the project to automatically fix any fixable [ESLint errors/warnings](.eslintrc), and format your JavaScript to match the [Prettier standards](.prettierrc).

<a name="committing"></a>

### <a name='Committing'></a>Committing

To ensure the commit history of this project remains helpful, please use the commit rules outlined [here](https://chris.beams.io/posts/git-commit/) when committing.

To making following these rules easier, this project is equipped with a [Git commit template](commit.template.txt):

```
# <type>: (If applied, this commit will...) <subject> (Max 50 char)
# |<----  Using a Maximum Of 50 Characters  ---->|


# Explain why this change is being made
# |<----   Try To Limit Each Line to a Maximum Of 72 Characters   ---->|

# Provide links or keys to any relevant tickets, articles or other resources
# Example: JIRA issue #23

# --- COMMIT END ---
# Type can be
#    breaking (changes that break previous implementations)
#    feat     (new feature)
#    fix      (bug fix)
#    refactor (refactoring production code)
#    revert   (changes that revert a previous commit)
#    style    (formatting, missing semi colons, etc; no code change)
#    docs     (changes to documentation)
#    test     (adding or refactoring tests; no production code change)
#    chore    (updating grunt tasks etc; no production code change)
#    other    (changes that do not fit in above categories)
# --------------------
# Remember to
#    Capitalize the subject line
#    Use the imperative mood in the subject line
#    Do not end the subject line with a period
#    Separate subject from body with a blank line
#    Use the body to explain what and why vs. how
#    Can use multiple lines with "-" for bullet points in body
# --------------------

```

To enable this Git commit template, run the following command from the root of the project:

```
git config --global commit.template commit.template.txt
```

#### <a name='Pre-CommitHooks'></a>Pre-Commit Hooks

This project is equipped with [Git Pre-Commit Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to help ensure successful builds. These "hooks" are a set of scripts that will run before allowing a developer to commit to the project. If any of these scripts fail the commit will cancel.

Before allowing a successful commit Git will run the following scripts:

```
npm run eslint
npm run stylelint
npm run test:changed
```

It's recommended a developers run `npm run eslint:fix` often during development to prevent any failures from code-style or JavaScript syntactical errors.

<a name="testing"></a>

## <a name='Testing'></a>Testing

This project is equipped with [Jest](https://jestjs.io/), and [Enzyme](https://github.com/airbnb/enzyme) to assist in testing JavaScript files. Each JavaScript file in the application should be in it's own folder with a sibling `.test.js` test file. The test file should test as close to 100% of it's sibling.

To check the test coverage of the application run `npm run lib:coverage`. This script will print out a code coverage report in the command line and generate an LCOV code coverage report in the project's `./coverage/` folder.

<a name="scripts"></a>

## <a name='Scripts'></a>Scripts

### <a name='build'></a>`build`

This command runs `webpack` in "production" mode. It uses the `src/index.js` file as it's entry point, and generates a JavaScript `main.js` and `vendor.js` file in `dist/`.

### <a name='clean'></a>`clean`

This command delets the `dist/` directory.

### <a name='eslint'></a>`eslint`

This command runs `eslint src/`. It prints eslint warnings and errors in the command line.

### <a name='eslint:fix'></a>`eslint:fix`

This command runs `eslint --fix src/`. It attempts to fix any eslint warnings/errors then prints the remaining warnings and errors in the command line.

### <a name='start'></a>`start`

This command runs `webpack-dev-server` in "development" mode on the documentation. Hot reloading is enabled. Once running, you can access the documentation running locally at [localhost:9090/](http://localhost:9090/).

### <a name='stylelint'></a>`stylelint`

This command runs `stylelint 'src/**/*/*.scss`. It prints styelint warnings and errors in the command line.

### <a name='stylelint:fix'></a>`stylelint:fix`

This command runs `stylelint --fix 'src/**/*/*.scss`. It attempts to fix any stylelint warnings/errors then prints the remaining warnings and errors in the command line.

### <a name='test'></a>`test`

This command runs `jest`. It prints test successes/failures in the command line.

### <a name='test:changed'></a>`test:changed`

This command runs `jest -o` on the JavaScript files that have changed or are uncommitted. It prints test successes/failures in the command line.

### <a name='test:coverage'></a>`test:coverage`

This command runs `jest --coverage`. It prints the test successes/failures in the command line and creates an .html test coverage report in `./coverage/lcov-report/index.html`.

<a name="authors"></a>

## <a name='Authors'></a>Authors

- **Joey Schroeder** - _Initial work_

See also the list of [contributors](https://github.com/joeyschroeder/front-end-starter/contributors) who participated in this project.

<a name="acknowledgments"></a>

## <a name='Acknowledgments'></a>Acknowledgments

Hat tip to anyone who's code was used! 🤠
