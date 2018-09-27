import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './screen.style.scss';

export class Screen extends Component {
  static propTypes = {
    centerContent: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string
  };

  static defaultProps = {
    centerContent: false,
    children: null,
    className: ''
  };

  getClassNames() {
    const { centerContent, className } = this.props;

    const result = classNames('animated', 'fadeIn', className, styles.root, { [styles.centerContent]: centerContent });

    return result;
  }

  render() {
    const { children } = this.props;
    const className = this.getClassNames();

    return <div className={className}>{children}</div>;
  }
}
