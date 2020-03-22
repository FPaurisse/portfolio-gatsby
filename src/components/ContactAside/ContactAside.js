import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { api } from '../../api';
import AsideLayout from '../AsideLayout/AsideLayout';
import s from './ContactAside.module.css';

import { toggleAside, showAlert } from '../../state/app';

const Contact = ({ dispatch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonObject = {};
    formData.forEach((value, key) => { jsonObject[key] = value; });
    api.post('send', jsonObject).then((response) => {
      if (response.data.status === 'success') {
        dispatch(showAlert({ status: 'success', statusText: "Thank you, I'll get back to you quickly" }));
        dispatch(toggleAside(null));
      } else if (response.data.status === 'fail') {
        dispatch(showAlert({ status: 'fail', statusText: "Oups… something wasn't right, try again please" }));
        dispatch(toggleAside('contact'));
      }
      setInterval(() => {
        dispatch(showAlert({ status: null, statusText: null }));
      }, 6000);
    });
  };

  return (
    <AsideLayout asideTitle="Contact" closeTitle="Close">
      <form
        className={s.form}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        autoComplete="off"
      >
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
              onClick={() => dispatch(toggleAside('terms'))}
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
    </AsideLayout>
  );
};

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(Contact);
