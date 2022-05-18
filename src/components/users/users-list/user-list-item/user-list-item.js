import Checkbox from 'components/checkbox/checkbox';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/icon/icon';
import { BlockButton } from 'components/block-button/block-button';
import styles from './user-list-item.style.scss';

export function UserListItem(props) {
  const { active, id, name, onChange, onDeleteClick } = props;

  return (
    <div className={styles.root}>
      <div className={styles['checkbox-container']}>
        <Checkbox
          checked={active}
          id={id}
          label={name}
          onChange={onChange}
          style={{ width: '100%' }}
        />
      </div>
      <div className={styles.delete}>
        <BlockButton color="danger" onClick={onDeleteClick}>
          <Icon name="trash" />
        </BlockButton>
      </div>
    </div>
  );
}

UserListItem.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

UserListItem.defaultProps = {
  active: true,
  id: '',
  name: '',
};
