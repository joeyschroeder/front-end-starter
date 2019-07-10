import { BlockButton } from 'components/block-button/block-button';
import PropTypes from 'prop-types';
import React from 'react';
import { Screen } from 'components/screen/screen';
import styles from './redux-view.style.scss';

export const ReduxView = props => {
  const { reset, update, value } = props;

  return (
    <Screen className={styles.root}>
      <h1>REDUX</h1>
      <p>Redux is a predictable state container for JavaScript apps.</p>
      <p>
        This application includes <strong>React-Redux</strong> along with a sample reducer and action set following the{' '}
        <a
          href="https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Duck Pattern
        </a>
        .
      </p>
      <h2>Redux Value: {value}</h2>
      <p>
        Click the following buttons to update and reset the value stored in the Redux store. Note that you can leave
        this page and return and the value will be saved.
      </p>
      <BlockButton onClick={update}>Update</BlockButton>
      <BlockButton onClick={reset}>Reset</BlockButton>
    </Screen>
  );
};

ReduxView.propTypes = {
  reset: PropTypes.func,
  update: PropTypes.func,
  value: PropTypes.number
};

ReduxView.defaultProps = {
  reset: () => {},
  update: () => {},
  value: 0
};
