import PropTypes from 'prop-types';
import React from 'react';
import { Main } from 'components/main/main';
import { Provider } from 'react-redux';
import { ROUTES } from 'constants/routes';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Splash } from 'components/splash/splash';
import CssBaseline from '@mui/material/CssBaseline';
import packageJson from '../../../package.json';

// The application is deployed to GitHub Pages. GitHub Pages prefixes the
// application root with the package name: 'front-end-starter' so we use is as
// the basename for the router when in 'production' mode'
const basename = process.env.BABEL_ENV === 'production' ? packageJson.name : '';

export function Root(props) {
  const { store } = props;

  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path={ROUTES.SPLASH} element={<Splash />} />
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
