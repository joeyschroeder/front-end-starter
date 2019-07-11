import { resetSampleValue, selectSampleValue, updateSampleValue } from 'store/sample/sample';

import { connect } from 'react-redux';
import { ReduxView } from './redux-view';

const mapStateToProps = state => ({
  value: selectSampleValue(state)
});

const mapDispatchToProps = {
  update: updateSampleValue,
  reset: resetSampleValue
};

export const ReduxViewConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxView);
