import { BlockButton } from 'components/block-button/block-button';
import React from 'react';
import PropTypes from 'prop-types';
import { UserListItem } from './user-list-item/user-list-item';
import styles from './user-list.style.scss';

export function UsersList(props) {
  const { users, onClearClick } = props;
  const activeUsers = users.filter((user) => user.active === true);

  return (
    <div className={styles.root}>
      {users.map(({ id, name, active }) => {
        return <UserListItem key={id} name={name} active={active} id={id} />;
      })}
      <div className={styles.secondary}>
        <div className={styles.detail}>
          {activeUsers.length}/{users.length} active users
        </div>
        <div className={styles.action}>
          <BlockButton onClick={onClearClick}>Clear inactive</BlockButton>
        </div>
      </div>
    </div>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  onClearClick: PropTypes.func,
};

UsersList.defaultProps = {
  users: [],
  onClearClick: undefined,
};
