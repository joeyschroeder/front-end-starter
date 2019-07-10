import { App } from 'components/app/app';
import { AppBar } from 'components/app-bar/app-bar';
import { AppBarButton } from 'components/app-bar-button/app-bar-button';
import { Icon } from 'components/icon/icon';
import PropTypes from 'prop-types';
import { ROUTES } from 'constants/routes';
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
