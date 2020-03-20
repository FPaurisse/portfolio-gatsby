import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from '../styles/header.module.css';
import Logo from './logo';

import { toggleContact, toggleTerms, toggleLoad } from '../state/app';

const Header = ({ isContact, dispatch, siteTitle }) => {
  const closeModal = () => {
    dispatch(toggleContact(false));
    dispatch(toggleTerms(false));
    if (!isContact) {
      dispatch(toggleLoad(true));
    }
  };
  const handleContact = () => {
    dispatch(toggleContact(!isContact));
    dispatch(toggleTerms(false));
  };
  return (
    <header className={s.Header}>
      <Link className={s.logoWrapper} to="/" onClick={() => closeModal()}>
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
            <Link to="/" onClick={() => closeModal()} className={cx(s.link, { [s.linkActive]: !isContact })}>Works</Link>
          </li>
          <li className={s.item}>
            <button type="button" onClick={() => handleContact()} className={cx(s.link, { [s.linkActive]: isContact })}>Contact</button>
          </li>
        </ul>
      </nav>
      <div className={s.social}>
        <div className={s.text}>Follow me</div>
        <div className={s.social__wrapper}>
          <a className={s.social__link} href="https://www.linkedin.com/in/frederic-paurisse/" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default connect((state) => ({
  isContact: state.app.isContact,
}), null)(Header);
