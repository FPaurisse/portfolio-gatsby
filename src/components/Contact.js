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
import Terms from './Terms';

import { toggleContact, toggleTerms } from '../state/app';

const Contact = ({ isContact, isTerms, dispatch }) => (
  <div className={cx({ [s.Contact]: isContact, [s.Contact__hide]: !isContact })}>
    {!isTerms ? (
      <>
        <button type="button" className={s.closeContact} onClick={() => dispatch(toggleContact(false))}>
          <FontAwesomeIcon className={s.iconCloseContact} icon={faTimesCircle} />
          Close
        </button>
        <form
          className={s.form}
        >
          <div className={s.inputGroup}>
            <label className={s.label} htmlFor="firstname">
              <p className={s.labelText}>
                Firstname
                <span className={s.required}>*</span>
              </p>
              <input placeholder="…" required className={s.input} type="text" id="firstname" />
            </label>
            <label className={s.label} htmlFor="lastname">
              <p className={s.labelText}>
                Lastname
                <span className={s.required}>*</span>
              </p>
              <input placeholder="…" required className={s.input} type="text" id="lastname" />
            </label>
          </div>
          <div className={s.inputSimple}>
            <label className={s.label} htmlFor="subject">
              <p className={s.labelText}>
                Subject
                <span className={s.required}>*</span>
              </p>
              <input placeholder="…" required className={s.input} type="text" id="subject" />
            </label>
          </div>
          <div className={s.inputSimple}>
            <label className={s.label} htmlFor="message">
              <p className={s.labelText}>
                Message
                <span className={s.required}>*</span>
              </p>
              <textarea placeholder="…" required className={s.input} cols="30" rows="10" id="message" />
            </label>
          </div>
          <div className={s.inputSimple}>
            <label className={s.label} htmlFor="email">
              <p className={s.labelText}>
                Email
                <span className={s.required}>*</span>
              </p>
              <input placeholder="…" required className={s.input} type="text" id="email" />
            </label>
          </div>
          <div className="inputSimple">
            <label className={s.labelCheckbox} htmlFor="checkTerms">
              <input required className={s.checkbox} type="checkbox" id="checkTerms" />
              I accept the
              <button type="button" className={s.buttonTerms} onClick={() => dispatch(toggleTerms(true))}>{' Terms & Conditions'}</button>
            </label>
          </div>
          <div className={s.inputSimple}>
            <button className={cx(s.button)} type="submit">
              <FontAwesomeIcon className={s.iconButton} icon={faPaperPlane} />
              Send
            </button>
          </div>
        </form>
      </>
    ) : (
      <>
        <button type="button" className={s.closeContact} onClick={() => dispatch(toggleTerms(false))}>
          <FontAwesomeIcon className={s.iconCloseContact} icon={faTimesCircle} />
          Close
        </button>
        <Terms />
      </>
    )}
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
  isTerms: state.app.isTerms,
}), null)(Contact);
