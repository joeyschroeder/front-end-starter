import { Main } from 'components/main/main';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ROUTES } from 'constants/routes';
import React from 'react';
import { ReduxViewConnected } from 'components/redux-view/redux-view.connected';
import { Route, BrowserRouter } from 'react-router-dom';
import { Splash } from 'components/splash/splash';

export const Root = props => {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Route exact path={ROUTES.SPLASH} component={Splash} />
          <Route exact path={ROUTES.REDUX} component={ReduxViewConnected} />
        </Main>
      </BrowserRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object
};

Root.defaultProps = {
  store: null
};
