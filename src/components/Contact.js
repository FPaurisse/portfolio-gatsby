import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cx from 'classnames';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane, faAt, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookMessenger, faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import s from '../styles/contact.module.css';

import { toggleContact } from '../state/app';

const Contact = ({ isContact, dispatch }) => (
  <div className={cx({ [s.Contact]: isContact, [s.Contact__hide]: !isContact })}>
    <button type="button" className={s.closeContact} onClick={() => dispatch(toggleContact(false))}>
      <FontAwesomeIcon className={s.iconCloseContact} icon={faTimesCircle} />
      Close
    </button>
    <form
      className={s.form}
    >
      <div className={s.inputGroup}>
        <input required className={s.input} type="text" placeholder="Firstname *" />
        <input required className={s.input} type="text" placeholder="Lastname *" />
      </div>
      <div className={s.inputSimple}>
        <input required className={s.input} type="text" placeholder="Subject *" />
      </div>
      <div className={s.inputSimple}>
        <textarea required className={s.input} cols="30" rows="10" placeholder="Message *" />
      </div>
      <div className={s.inputSimple}>
        <input required className={s.input} type="text" placeholder="Email *" />
      </div>
      <div className={s.inputSimple}>
        <button className={cx(s.button)} type="submit">
          <FontAwesomeIcon className={s.iconButton} icon={faPaperPlane} />
          Send
        </button>
      </div>
    </form>
    <div className={s.social}>
      <div className={s.socialWrapper}>
        <FontAwesomeIcon className={s.socialIcon} icon={faFacebookMessenger} />
      </div>
      <div className={s.socialWrapper}>
        <FontAwesomeIcon className={s.socialIcon} icon={faDiscord} />
      </div>
      <div className={s.socialWrapper}>
        <FontAwesomeIcon className={s.socialIcon} icon={faAt} />
      </div>
    </div>
  </div>
);

export default connect((state) => ({
  isContact: state.app.isContact,
}), null)(Contact);
