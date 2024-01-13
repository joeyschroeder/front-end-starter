import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './screen.style.scss';

export function Screen(props) {
  const { children, centerContent, className: classNameProp } = props;
  const className = classNames(
    'animated',
    'fadeIn',
    classNameProp,
    styles.root,
    {
      [styles.centerContent]: centerContent,
    },
  );

  return <div className={className}>{children}</div>;
}

Screen.propTypes = {
  centerContent: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

Screen.defaultProps = {
  centerContent: false,
  children: null,
  className: '',
};
