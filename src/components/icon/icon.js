import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    className: '',
    name: 'bell-o'
  };

  getClassName() {
    const { className, name } = this.props;

    const result = classNames('fa', 'fa-fw', className, {
      [`fa-${name}`]: name
    });

    return result;
  }

  render() {
    const className = this.getClassName();

    return <i className={className} aria-hidden="true" />;
  }
}
