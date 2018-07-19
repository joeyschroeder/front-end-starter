import PropTypes from 'prop-types';
import React from 'react';
import styles from './app-bar-button.style.scss';

export const AppBarButton = props => {

    const { children, onClick } = props;

    return (
        <button className={styles.root} type='button' onClick={onClick}>{children}</button>
    );
};

AppBarButton.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
    onClick: PropTypes.func
};

AppBarButton.defaultProps = {
    children: null,
    onClick: null
};
