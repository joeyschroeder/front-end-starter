import React, { useEffect, useState } from 'react';
import { Screen } from 'components/screen/screen';
import {
  getUsers,
  addUser,
  updateUserActive,
  deleteUser,
  deleteInactiveUsers,
} from 'services/users/';
import { UsersList } from './users-list/user-list';
import styles from './users.style.scss';
import { UsersForm } from './users-form/users-form';

export function Users() {
  const [users, setUsers] = useState([]);

  const refreshUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  const onUsersFormSubmit = async (name) => {
    await addUser({ name });
    await refreshUsers();
  };

  const onUserActiveChange = async (id) => {
    await updateUserActive(id);
    await refreshUsers();
  };

  const onUserDeleteClick = async (id) => {
    await deleteUser(id);
    await refreshUsers();
  };

  const onClearInactiveUsersClick = async () => {
    await deleteInactiveUsers();
    await refreshUsers();
  };

  useEffect(async () => {
    await refreshUsers();
  }, []);

  return (
    <Screen centerContent className={styles.root}>
      <div>
        <h1>🤷‍♂️ Users</h1>
        <p>
          Below is a list of users along with an input to add new users. Simply
          enter a <strong>user&apos;s name</strong> and press{' '}
          <strong>ENTER</strong>.
        </p>
        <p>
          You can mark users as <strike>inactive</strike> or{' '}
          <strong>active</strong> by clicking the checkbox.
        </p>
        <div className={styles.primary}>
          <UsersForm onSubmit={onUsersFormSubmit} />
          <UsersList
            onClearClick={onClearInactiveUsersClick}
            onUserActiveChange={onUserActiveChange}
            onUserDeleteClick={onUserDeleteClick}
            users={users}
          />
        </div>
      </div>
    </Screen>
  );
}
