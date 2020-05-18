import 'animate.css/animate.css';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'styles/index.scss';

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styles from './app.style.scss';

export class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    children: null
  };

  componentDidMount() {
    // When the app.js component mounts it fires an event called 'appReady'
    const event = new CustomEvent('appReady', {
      bubbles: true,
      cancelable: false
    });

    document.dispatchEvent(event);
  }

  render() {
    const { children } = this.props;

    return <div className={styles.root}>{children}</div>;
  }
}
