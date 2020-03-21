import React from 'react';
import s from '../styles/Footer.module.css';

const Footer = () => (
  <div className={s.Footer}>
    <p className={s.text}>
      © Frédéric Paurisse 2020 - Built with
      {' '}
      <a className={s.link} rel="noopener noreferrer" target="_blank" href="https://www.gatsbyjs.org/">Gatsby</a>
    </p>
  </div>
);

export default Footer;
