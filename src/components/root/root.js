import { Main } from 'components/main/main';
import { ROUTES } from 'constants/routes';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Splash } from 'components/splash/splash';
import { Users } from 'components/users/users';
import packageJson from '../../../package.json';

// The application is deployed to GitHub Pages. GitHub Pages prefixes the
// application root with the package name: 'front-end-starter' so we use is as
// the basename for the router when in 'production' mode'
const basename = process.env.BABEL_ENV === 'production' ? packageJson.name : '';

export function Root() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path={ROUTES.SPLASH} element={<Splash />} />
          <Route path={ROUTES.USERS} element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
