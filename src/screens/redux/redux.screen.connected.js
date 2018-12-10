import { resetTestProp, selectTestValue, updateTestProp } from '../../redux/test';

import { ReduxScreen } from './redux.screen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: selectTestValue(state)
});

const mapDispatchToProps = {
  update: updateTestProp,
  reset: resetTestProp
};

export const ConnectedReduxScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxScreen);
