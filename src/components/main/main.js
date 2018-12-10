import { App } from '../app/app';
import { AppBar } from '../app-bar/app-bar';
import { AppBarButton } from '../app-bar-button/app-bar-button';
import { Icon } from '../icon/icon';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes';
import React from 'react';

export const Main = props => {
  const { children } = props;

  return (
    <App>
      <AppBar>
        <AppBarButton to={ROUTES.SPLASH}>
          <Icon name="home" />
        </AppBarButton>
        <AppBarButton to={ROUTES.REDUX}>
          <Icon name="database" />
        </AppBarButton>
        {/* <AppBarButton to={ROUTES.HOT_RELOAD}><Icon name='fire' /></AppBarButton> */}
      </AppBar>
      {children}
    </App>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Main.defaultProps = {
  children: null
};
