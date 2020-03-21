import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStream,
} from '@fortawesome/free-solid-svg-icons';
import s from '../styles/Footer.module.css';

import { toggleCredits, toggleContact } from '../state/app';

const Footer = ({ isCredits, dispatch }) => {
  const showCredits = () => {
    dispatch(toggleCredits(!isCredits));
    dispatch(toggleContact(false));
  };
  return (
    <div className={s.Footer}>
      <p className={s.text}>
        © Frédéric Paurisse 2020 - Built with
        <button className={s.button} type="button" onClick={showCredits}>
          <FontAwesomeIcon
            className={cx(s.buttonIcon)}
            icon={faStream}
          />
        </button>
      </p>
    </div>
  );
};

export default connect((state) => ({
  isCredits: state.app.isCredits,
}), null)(Footer);
