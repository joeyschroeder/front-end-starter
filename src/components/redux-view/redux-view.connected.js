import { resetSampleValue, selectSampleValue, updateSampleValue } from '../../redux/sample/sample';

import { ReduxView } from './redux-view';
import { connect } from 'react-redux';

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
