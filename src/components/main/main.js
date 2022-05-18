import { App } from 'components/app/app';
import { AppBar } from 'components/app-bar/app-bar';
import { AppBarButton } from 'components/app-bar-button/app-bar-button';
import { Icon } from 'components/icon/icon';
import { Outlet } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import React from 'react';

export function Main() {
  return (
    <App>
      <AppBar>
        <AppBarButton to={ROUTES.SPLASH}>
          <Icon name="home" />
        </AppBarButton>
        <AppBarButton to={ROUTES.USERS}>
          <Icon name="user" />
        </AppBarButton>
      </AppBar>
      <Outlet />
    </App>
  );
}
