import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import s from './CloseButton.module.css';

import { toggleAside } from '../../state/app';

const CloseButton = ({ closeTitle, closeLink, dispatch }) => {
  const changeAside = () => {
    dispatch(toggleAside(closeLink));
  };

  return (
    <button
      type="button"
      className={cx(s.CloseButton)}
      onClick={changeAside}
    >
      <FontAwesomeIcon className={s.icon} icon={faCaretSquareLeft} />
      {closeTitle}
    </button>
  );
};

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(CloseButton);
