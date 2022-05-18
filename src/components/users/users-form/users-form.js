import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './users-form.style.scss';

export function UsersForm(props) {
  const { onSubmit: onSubmitProp } = props;
  const [value, setValue] = useState('');

  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitProp(value);
    setValue('');
  };

  return (
    <div className={styles.root}>
      <form onSubmit={onSubmit}>
        <input
          id="name"
          name="name"
          onChange={onChange}
          placeholder="enter a user name..."
          type="text"
          value={value}
        />
      </form>
    </div>
  );
}

UsersForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
