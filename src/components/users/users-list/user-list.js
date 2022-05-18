import { BlockButton } from 'components/block-button/block-button';
import React from 'react';
import PropTypes from 'prop-types';
import { UserListItem } from './user-list-item/user-list-item';
import styles from './user-list.style.scss';

export function UsersList(props) {
  const { users, onClearClick, onUserActiveChange, onUserDeleteClick } = props;
  const activeUsers = users.filter((user) => user.active === true);

  return (
    <div className={styles.root}>
      {users.map(({ id, name, active }) => {
        const onChange = () => onUserActiveChange(id);
        const onDeleteClick = () => onUserDeleteClick(id);

        return (
          <UserListItem
            active={active}
            id={id}
            key={id}
            name={name}
            onChange={onChange}
            onDeleteClick={onDeleteClick}
          />
        );
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
  onClearClick: PropTypes.func,
  onUserActiveChange: PropTypes.func.isRequired,
  onUserDeleteClick: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object),
};

UsersList.defaultProps = {
  onClearClick: undefined,
  users: [],
};
