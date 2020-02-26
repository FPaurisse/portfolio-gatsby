import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import headerStyles from '../styles/header.module.css';

const Header = ({ siteTitle }) => (
  <header className={headerStyles.Header}>
    <div className={headerStyles.logo} title={siteTitle} />
    <nav className={headerStyles.nav}>
      <ul className={headerStyles.list}>
        <li className={headerStyles.item}>
          <Link to="/" activeClassName={headerStyles.active} className={headerStyles.link}>Works</Link>
        </li>
        <li className={headerStyles.item}>
          <Link to="/about" activeClassName={headerStyles.active} className={headerStyles.link}>About</Link>
        </li>
        <li className={headerStyles.item}>
          <Link to="/contact" activeClassName={headerStyles.active} className={headerStyles.link}>Contact</Link>
        </li>
      </ul>
    </nav>
    <div className={headerStyles.social}>
      <div className={headerStyles.text}>Follow me</div>
      <div className={headerStyles.social__wrapper}>
        <a className={headerStyles.social__link} href="https://www.linkedin.com/in/frederic-paurisse/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
