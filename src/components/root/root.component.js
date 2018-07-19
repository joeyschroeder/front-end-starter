import { ConnectedRouter } from 'connected-react-router';
import { Main } from '../main/main.component';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ROUTES } from '../../routes';
import React from 'react';
import { ReduxScreen } from '../../screens/redux/redux.screen';
import { Route } from 'react-router';
import { SplashScreen } from '../../screens/splash/splash.screen';

export const Root = props => {
    const { history, store } = props;

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Main>
                    <Route exact path={ROUTES.SPLASH} component={SplashScreen} />
                    <Route exact path={ROUTES.REDUX} component={ReduxScreen} />
                </Main>
            </ConnectedRouter>
        </Provider>
    );
};

Root.propTypes = {
    history: PropTypes.object,
    store: PropTypes.object
};

Root.defaultProps = {
    history: null,
    store: null
};
