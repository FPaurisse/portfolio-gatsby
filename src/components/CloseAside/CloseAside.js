import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import s from './CloseAside.module.css';

import { toggleAside } from '../../state/app';

const CloseAside = ({ closeTitle, closeLink, dispatch }) => {
  const changeAside = () => {
    dispatch(toggleAside(closeLink));
  };

  return (
    <button
      type="button"
      className={cx(s.CloseAside)}
      onClick={changeAside}
    >
      <FontAwesomeIcon className={s.icon} icon={faCaretSquareLeft} />
      {closeTitle}
    </button>
  );
};

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(CloseAside);
