import React, { useState } from 'react';
import axios from 'axios';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import s from '../styles/contact.module.css';

const Contact = () => (
  <div className={s.Contact}>
    <form
      className={s.form}
    >
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
);

export default Contact;
