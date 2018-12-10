import { resetSampleValue, selectSampleValue, updateSampleValue } from '../../redux/sample';

import { ReduxScreen } from './redux.screen';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: selectSampleValue(state)
});

const mapDispatchToProps = {
  update: updateSampleValue,
  reset: resetSampleValue
};

export const ConnectedReduxScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxScreen);
