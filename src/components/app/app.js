import 'animate.css/animate.css';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'styles/index.scss';

import React from 'react';

import PropTypes from 'prop-types';
import styles from './app.style.scss';

export function App(props) {
  const { children } = props;
  return <div className={styles.root}>{children}</div>;
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

App.defaultProps = {
  children: null,
};
