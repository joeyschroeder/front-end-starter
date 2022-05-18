import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import styles from './checkbox.style.scss';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object,
  };

  static defaultProps = {
    checked: false,
    className: undefined,
    disabled: false,
    label: undefined,
    name: undefined,
    onChange: undefined,
    style: undefined,
  };

  constructor(props) {
    super(props);
    const { name } = props;

    this.name = name || uniqueId('checkbox__');
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const { onChange } = this.props;
    if (onChange) onChange(event.target.checked);
  }

  getClassNames() {
    const { checked, className, disabled } = this.props;

    const result = classNames(styles.root, className, {
      [styles.disabled]: disabled,
      [styles.checked]: checked,
    });

    return result;
  }

  render() {
    const {
      checked,
      className: classNameProp,
      disabled,
      label,
      name,
      onChange,
      style,
      ...other
    } = this.props;

    const className = this.getClassNames();
    const labelExists = Boolean(label);
    const labelElement = checked ? label : <strike>{label}</strike>;

    return (
      <label
        htmlFor={this.name}
        className={className}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...other}
      >
        <div className={styles.icon}>
          <div className={styles.fill} />
        </div>
        {labelExists && <span>{labelElement}</span>}
        <input
          checked={checked}
          disabled={disabled}
          id={this.name}
          onChange={this.handleOnChange}
          style={style}
          type="checkbox"
        />
      </label>
    );
  }
}

export default Checkbox;
