import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faAt, faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { api } from '../../api';
import Terms from '../Terms/Terms';
import s from './Contact.module.css';

import { toggleContact, toggleTerms, showAlert } from '../../state/app';

const Contact = ({ isContact, isTerms, dispatch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonObject = {};
    formData.forEach((value, key) => { jsonObject[key] = value; });
    api.post('send', jsonObject).then((response) => {
      if (response.data.status === 'success') {
        dispatch(showAlert({ status: 'success', statusText: "Thank you, I'll get back to you quickly" }));
        dispatch(toggleContact(false));
      } else if (response.data.status === 'fail') {
        dispatch(showAlert({ status: 'fail', statusText: "Oups… something wasn't right, try again please" }));
        dispatch(toggleContact(true));
      }
      setInterval(() => {
        dispatch(showAlert({ status: null, statusText: null }));
      }, 6000);
    });
  };

  return (
    <div className={cx({ [s.Contact]: isContact, [s.Contact__hide]: !isContact })}>
      {!isTerms ? (
        <>
          <button
            type="button"
            className={s.closeContact}
            onClick={() => dispatch(toggleContact(false))}
          >
            <FontAwesomeIcon className={s.iconCloseContact} icon={faCaretSquareLeft} />
            Close
          </button>
          <form
            className={s.form}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            autoComplete="off"
          >
            <h1 className={s.title}>Contact</h1>
            <div className={s.inputGroup}>
              <label className={s.label} htmlFor="firstname">
                <p className={s.labelText}>
                  Firstname
                  <span className={s.required}>*</span>
                </p>
                <input
                  placeholder="…"
                  required
                  className={s.input}
                  type="text"
                  id="firstname"
                  name="firstname"
                />
              </label>
              <label className={s.label} htmlFor="lastname">
                <p className={s.labelText}>
                  Lastname
                  <span className={s.required}>*</span>
                </p>
                <input
                  placeholder="…"
                  required
                  className={s.input}
                  type="text"
                  id="lastname"
                  name="lastname"
                />
              </label>
            </div>
            <div className={s.inputSimple}>
              <label className={s.label} htmlFor="subject">
                <p className={s.labelText}>
                  Subject
                  <span className={s.required}>*</span>
                </p>
                <input
                  placeholder="…"
                  required
                  className={s.input}
                  type="text"
                  id="subject"
                  name="subject"
                />
              </label>
            </div>
            <div className={s.inputSimple}>
              <label className={s.label} htmlFor="message">
                <p className={s.labelText}>
                  Message
                  <span className={s.required}>*</span>
                </p>
                <textarea
                  placeholder="…"
                  required
                  className={s.input}
                  cols="30"
                  rows="10"
                  id="message"
                  name="message"
                />
              </label>
            </div>
            <div className={s.inputSimple}>
              <label className={s.label} htmlFor="email">
                <p className={s.labelText}>
                  Email
                  <span className={s.required}>*</span>
                </p>
                <input
                  placeholder="…"
                  required
                  className={s.input}
                  type="text"
                  id="email"
                  name="email"
                />
              </label>
            </div>
            <div className="inputSimple">
              <label className={s.labelCheckbox} htmlFor="checkTerms">
                <input
                  required
                  className={s.checkbox}
                  type="checkbox"
                  id="checkTerms"
                />
                I accept the
                <button
                  type="button"
                  className={s.buttonTerms}
                  onClick={() => dispatch(toggleTerms(true))}
                >
                  {' Terms & Conditions'}
                </button>
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
          <button
            type="button"
            className={s.closeContact}
            onClick={() => dispatch(toggleTerms(false))}
          >
            <FontAwesomeIcon className={s.iconCloseContact} icon={faCaretSquareLeft} />
            Return
          </button>
          <Terms />
        </>
      )}
      <div className={s.social}>
        <a aria-label="Messenger" title="Messenger" href="https://m.me/frederic.paurisse" rel="noopener noreferrer" target="_blank" className={s.socialWrapper}>
          <FontAwesomeIcon className={s.socialIcon} icon={faFacebookMessenger} />
        </a>
        <a aria-label="Discord" title="Discord" href="https://discordapp.com/users/676800306306351144" rel="noopener noreferrer" target="_blank" className={s.socialWrapper}>
          <FontAwesomeIcon className={s.socialIcon} icon={faDiscord} />
        </a>
        <a aria-label="Email" title="Email" href="mailto:contact@fredericpaurisse.fr" rel="noopener noreferrer" target="_blank" className={s.socialWrapper}>
          <FontAwesomeIcon className={s.socialIcon} icon={faAt} />
        </a>
      </div>
    </div>
  );
};

export default connect((state) => ({
  isContact: state.app.isContact,
  isTerms: state.app.isTerms,
}), null)(Contact);
