import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import s from './Footer.module.css';

import { toggleAside } from '../../state/app';

const Footer = ({ dispatch }) => {
  const showCredits = () => {
    dispatch(toggleAside('credits'));
  };
  return (
    <footer className={s.Footer}>
      <p className={s.text}>
        Frédéric Paurisse ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        -
        <button
          className={s.button}
          type="button"
          onClick={showCredits}
        >
          Built with
          <FontAwesomeIcon
            className={cx(s.buttonIcon)}
            icon={faHandPointRight}
          />
        </button>
      </p>
    </footer>
  );
};

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(Footer);
