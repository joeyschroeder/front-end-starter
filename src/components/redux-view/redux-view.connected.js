import { sampleDuck, updateSampleByOne } from 'store/sample/sample';

import { connect } from 'react-redux';
import { ReduxView } from './redux-view';

const mapStateToProps = (state) => ({
  value: sampleDuck.select.state(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    update: () => dispatch(updateSampleByOne()),
    reset: () => dispatch(sampleDuck.actions.reset()),
  };
};

export const ReduxViewConnected = connect(mapStateToProps, mapDispatchToProps)(ReduxView);
