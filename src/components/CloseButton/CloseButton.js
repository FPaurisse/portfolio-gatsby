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
    dispatch(toggleAside(closeLink || null));
  };

  return (
    <div className={cx(
      s.wrapper,
      { [s.wrapper__hide]: vertical },
      { [s.wrapper__full]: isAside === 'work' },
    )}
    >
      {closeLink && closeLink.startsWith('/')
        ? (
          <Link
            to={closeLink}
            className={cx(
              s.CloseButton,
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
        )}
    </div>
  );
};

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(CloseButton);
