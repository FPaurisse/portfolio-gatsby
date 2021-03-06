import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from './Header.module.css';
import Logo from '../Logo/Logo';

import {
  toggleLoad, toggleAside, toggleDarkMode,
} from '../../state/app';

const Header = ({
  isAside, darkMode, dispatch, siteTitle,
}) => {
  const closeModal = () => {
    dispatch(toggleAside(null));
    if (isAside !== 'contact') {
      dispatch(toggleLoad(true));
    }
  };
  const handleContact = () => {
    dispatch(toggleAside('contact'));
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
      <div className={s.wrapper}>
        <nav className={s.nav}>
          <ul className={s.list}>
            <li className={s.item}>
              <Link
                to="/"
                onClick={() => closeModal()}
                className={cx(s.link, { [s.linkActive]: isAside !== 'contact' })}
              >
                Works
              </Link>
            </li>
            <li className={s.item}>
              <button
                type="button"
                onClick={() => handleContact()}
                className={cx(s.link, { [s.linkActive]: isAside === 'contact' })}
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
              icon={darkMode ? faLightbulb : faMoon}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default connect((state) => ({
  isAside: state.app.isAside,
  darkMode: state.app.darkMode,
}), null)(Header);
