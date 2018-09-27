import { resetTestProp, selectValue, updateTestProp } from '../../ducks/test.duck';

import { ReduxScreen } from './redux.screen';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    value: selectValue(state)
  };
};

const mapDispatchToProps = Object.assign(
  {},
  {
    update: updateTestProp,
    reset: resetTestProp
  }
);

export const ConnectedReduxScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxScreen);
