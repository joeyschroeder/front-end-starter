import Checkbox from 'components/checkbox/checkbox';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './user-list-item.style.scss';

export function UserListItem(props) {
  const { active, id, name } = props;

  return (
    <div className={styles.root}>
      <Checkbox
        id={id}
        checked={active}
        label={name}
        style={{ width: '100%' }}
      />
    </div>
  );
}

UserListItem.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
};

UserListItem.defaultProps = {
  active: true,
  id: '',
  name: '',
};
