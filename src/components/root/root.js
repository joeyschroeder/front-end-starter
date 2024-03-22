import { Main } from 'components/main/main';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ROUTES } from 'constants/routes';
import React from 'react';
import { ReduxViewConnected } from 'components/redux-view/redux-view.connected';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Splash } from 'components/splash/splash';
import packageJson from '../../../package.json';

// The application is deployed to GitHub Pages. GitHub Pages prefixes the
// application root with the package name: 'front-end-starter' so we use is as
// the basename for the router when in 'production' mode'
const basename = process.env.BABEL_ENV === 'production' ? packageJson.name : '';

export function Root(props) {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Main />} path="/">
            <Route element={<Splash />} path={ROUTES.SPLASH} />
            <Route element={<ReduxViewConnected />} path={ROUTES.REDUX} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
};

Root.defaultProps = {
  store: null,
};
