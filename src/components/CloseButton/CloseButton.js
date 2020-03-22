import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import s from './CloseButton.module.css';

import { toggleAside } from '../../state/app';

const CloseButton = ({
  vertical, closeTitle, closeLink, currentCategory, isAside, dispatch,
}) => {
  const changeAside = () => {
    dispatch(toggleAside(null));
  };

  return (
    closeLink && closeLink.startsWith('/')
      ? (
        <Link
          to={closeLink}
          className={cx(
            s.CloseButton,
            { [s.CloseButton__hide]: vertical },
            { [s.CloseButton__hide]: isAside !== 'work' },
          )}
          state={{ currentCategory }}
        >
          <FontAwesomeIcon className={s.icon} icon={faCaretSquareLeft} />
          {closeTitle}
        </Link>
      )
      : (
        <button
          type="button"
          className={cx(
            s.CloseButton,
          )}
          onClick={changeAside}
        >
          <FontAwesomeIcon className={s.icon} icon={faCaretSquareLeft} />
          {closeTitle}
        </button>
      )
  );
};

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(CloseButton);
