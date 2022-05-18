import React, { useEffect, useState } from 'react';
import { Screen } from 'components/screen/screen';
import { getUsers, addUser } from 'services/users/';
import { UsersList } from './users-list/user-list';
import styles from './users.style.scss';
import { UsersForm } from './users-form/users-form';

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const response = await getUsers();
    setUsers(response);
  }, []);

  const onUsersFormSubmit = async (name) => {
    await addUser({ name });
    const response = await getUsers();
    setUsers(response);
  };

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
          <UsersList users={users} />
        </div>
      </div>
    </Screen>
  );
}
