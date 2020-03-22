import React from 'react';
import { connect } from 'react-redux';
import AsideLayout from '../AsideLayout/AsideLayout';
import s from './CreditsAside.module.css';

const CreditsAside = () => (
  <AsideLayout asideTitle="Credits" closeTitle="Close">
    <h2 className={s.subTitle}>Front</h2>
    <ul className={s.list}>
      <li className={s.item}>
        React
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          https://reactjs.org/
        </a>
      </li>
      <li className={s.item}>
        GatsbyJS
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.gatsbyjs.org/"
        >
          https://www.gatsbyjs.org/
        </a>
      </li>
      <li className={s.item}>
        GraphQL
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://graphql.org/"
        >
          https://graphql.org/
        </a>
      </li>
    </ul>
    <h2 className={s.subTitle}>Back</h2>
    <ul className={s.list}>
      <li className={s.item}>
        Node.js
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://nodejs.org/"
        >
          https://nodejs.org/
        </a>
      </li>
      <li className={s.item}>
        Express
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://expressjs.com/"
        >
          https://expressjs.com/
        </a>
      </li>
      <li className={s.item}>
        MongoDB
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mongodb.com/fr"
        >
          https://www.mongodb.com/fr
        </a>
      </li>
      <li className={s.item}>
        Nodemailer
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://nodemailer.com/"
        >
          https://nodemailer.com/
        </a>
      </li>
      <li className={s.item}>
        Certbot
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://certbot.eff.org/"
        >
          https://certbot.eff.org/
        </a>
      </li>
    </ul>
    <h2 className={s.subTitle}>Server</h2>
    <ul className={s.list}>
      <li className={s.item}>
        VPS OVH
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ovh.com/fr/vps/"
        >
          https://www.ovh.com/fr/vps/
        </a>
      </li>
      <li className={s.item}>
        Debian 10
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.debian.org/"
        >
          https://www.debian.org/
        </a>
      </li>
      <li className={s.item}>
        Nginx
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.nginx.com/"
        >
          https://www.nginx.com/
        </a>
      </li>
    </ul>
    <h2 className={s.subTitle}>Others</h2>
    <ul className={s.list}>
      <li className={s.item}>
        Pixabay
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://pixabay.com/"
        >
          https://pixabay.com/
        </a>
      </li>
      <li className={s.item}>
        Font Awesome
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://fontawesome.com/"
        >
          https://fontawesome.com/
        </a>
      </li>
      <li className={s.item}>
        Google Fonts API
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://fonts.google.com/"
        >
          https://fonts.google.com/
        </a>
      </li>
    </ul>
  </AsideLayout>
);

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(CreditsAside);
