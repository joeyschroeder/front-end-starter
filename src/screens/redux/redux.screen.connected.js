import { resetTestProp, selectValue, updateTestProp } from '../../redux/test.duck';

import { ReduxScreen } from './redux.screen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: selectValue(state)
});

const mapDispatchToProps = {
  update: updateTestProp,
  reset: resetTestProp
}

export const ConnectedReduxScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxScreen);
