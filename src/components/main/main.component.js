import { App } from '../app/app.component';
import { AppBar } from '../app-bar/app-bar.component';
import { AppBarButton } from '../app-bar-button/app-bar-button.component';
import { Icon } from '../icon/icon.component';
import PropTypes from 'prop-types';
import React from 'react';

export const Main = props => {

    const { children } = props;

    return (
        <App>
            {/* <AppBar>
                <AppBarButton><Icon name='home' /></AppBarButton>
                <AppBarButton><Icon name='database' /> Redux</AppBarButton>
            </AppBar> */}
            {children}
        </App>
    );
};

Main.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

Main.defaultProps = {
    children: null
};
