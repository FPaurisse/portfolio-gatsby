import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import s from '../styles/header.module.css';
import Logo from './logo';

const Header = ({ siteTitle, location }) => (
  <header className={s.Header}>
    <Link className={s.logoWrapper} to="/">
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
          <Link to="/" activeClassName={s.linkActive} className={cx(location.pathname.includes('works') && s.linkActive, s.link)}>Works</Link>
        </li>
        <li className={s.item}>
          <Link to="/contact" activeClassName={s.linkActive} className={s.link}>Contact</Link>
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

export default Header;
