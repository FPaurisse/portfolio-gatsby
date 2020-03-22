import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from './Header.module.css';
import Logo from '../Logo/Logo';

import {
  toggleContact, toggleTerms, toggleLoad, toggleWorkAside, toggleDarkMode, toggleCredits,
} from '../../state/app';

const Header = ({
  isContact, darkMode, dispatch, siteTitle,
}) => {
  const closeModal = () => {
    dispatch(toggleWorkAside(false));
    dispatch(toggleContact(false));
    dispatch(toggleTerms(false));
    dispatch(toggleCredits(false));
    if (!isContact) {
      dispatch(toggleLoad(true));
    }
  };
  const handleContact = () => {
    dispatch(toggleWorkAside(false));
    dispatch(toggleContact(!isContact));
    dispatch(toggleTerms(false));
    dispatch(toggleCredits(false));
  };
  return (
    <header className={s.Header}>
      <Link
        className={s.logoWrapper}
        to="/"
        onClick={() => closeModal()}
      >
        <div className={s.logo} title={siteTitle}>
          <div className={s.iconLogo}>
            <Logo />
          </div>
        </div>
        <h1 className={s.title}>Creative developer</h1>
      </Link>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link
              to="/"
              onClick={() => closeModal()}
              className={cx(s.link, { [s.linkActive]: !isContact })}
            >
              Works
            </Link>
          </li>
          <li className={s.item}>
            <button
              type="button"
              onClick={() => handleContact()}
              className={cx(s.link, { [s.linkActive]: isContact })}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div className={s.headerBottom}>
        <div className={s.Linkedin}>
          <div className={s.LinkedinText}>Follow me</div>
          <div className={s.LinkedinWrapper}>
            <button
              className={s.LinkedinButton}
              type="button"
              onClick={() => dispatch(toggleDarkMode(!darkMode))}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
          </div>
        </div>
        <button
          type="button"
          title="Switch theme"
          className={s.switchThemeButton}
          onClick={() => dispatch(toggleDarkMode(!darkMode))}
        >
          <FontAwesomeIcon
            className={cx(s.switchThemeIcon, { [s.switchThemeIcon__dark]: darkMode })}
            icon={faAdjust}
          />
        </button>
      </div>
    </header>
  );
};

export default connect((state) => ({
  isContact: state.app.isContact,
  isWorkDetails: state.app.isWorkDetails,
  darkMode: state.app.darkMode,
}), null)(Header);
