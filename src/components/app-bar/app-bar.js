import PropTypes from 'prop-types';
import React from 'react';
import styles from './app-bar.style.scss';

export const AppBar = (props) => {
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
};

AppBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AppBar.defaultProps = {
  children: null,
};
