import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './block-button.style.scss';

export function BlockButton(props) {
  const { children, onClick, color } = props;

  const className = classNames(styles.root, {
    [styles[color]]: color,
  });

  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

BlockButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.string,
  onClick: PropTypes.func,
};

BlockButton.defaultProps = {
  children: null,
  color: undefined,
  onClick: null,
};
