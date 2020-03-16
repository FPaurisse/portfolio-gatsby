import React, { useState } from 'react';
import axios from 'axios';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane, faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/contact.module.css';
import contact from '../images/contact.jpg';

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Contact"
      description="Développeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projets web et print : sites internet, applications web, identités visuelles et chartes graphiques."
    />
    <div className={s.Contact}>
      <div className={s.wrapper}>
        <div
          className={s.media}
          style={{
            backgroundImage: `linear-gradient(black, black), url(${contact})`,
          }}
        >
          <div className={cx(s.mediaWrapper)} style={{ borderImageSource: 'linear-gradient(45deg, #33B0CB 15%, #3a3837 70%)' }}>
            <div className={s.optionalBack} style={{ backgroundColor: '#ffffff' }}>
              <div className={s.backGradient} style={{ backgroundImage: 'linear-gradient(45deg, #33B0CB 15%, #3a3837 70%)' }} />
            </div>
          </div>
        </div>
        <form
          className={s.form}
        >
          <h1 className={s.title}>Contact me</h1>
          <div className={s.infos}>
            <a href="mailto:hello@fredericpaurisse.fr" className={s.text}>
              <FontAwesomeIcon className={s.icontText} icon={faEnvelopeOpenText} />
              hello@fredericpaurisse.fr
            </a>
          </div>
          <div className={s.inputGroup}>
            <input required className={s.input} type="text" placeholder="Firstname" />
            <input required className={s.input} type="text" placeholder="Lastname" />
          </div>
          <div className={s.inputSimple}>
            <input required className={s.input} type="text" placeholder="Subject" />
          </div>
          <div className={s.inputSimple}>
            <textarea required className={s.input} cols="30" rows="10" placeholder="Message" />
          </div>
          <div className={s.inputSimple}>
            <input required className={s.input} type="text" placeholder="Email" />
          </div>
          <div className={s.inputSimple}>
            <button className={cx(s.button)} type="submit">
              <FontAwesomeIcon className={s.iconButton} icon={faPaperPlane} />
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
);

export default Contact;
