import { ConnectedRouter } from 'connected-react-router';
import { Main } from 'components/main/main';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ROUTES } from 'constants/routes';
import React from 'react';
import { ReduxViewConnected } from 'components/redux-view/redux-view.connected';
import { Route } from 'react-router';
import { Splash } from 'components/splash/splash';

export const Root = props => {
  const { history, store } = props;

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main>
          <Route exact path={ROUTES.SPLASH} component={Splash} />
          <Route exact path={ROUTES.REDUX} component={ReduxViewConnected} />
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
