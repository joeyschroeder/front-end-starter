import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './app-bar-button.style.scss';

export function AppBarButton(props) {
  const { children, onClick, to } = props;

  if (to)
    return (
      <Link className={styles.root} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles.root} onClick={onClick} type="button">
      {children}
    </button>
  );
}

AppBarButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  to: PropTypes.string,
};

AppBarButton.defaultProps = {
  children: null,
  onClick: null,
  to: '',
};
