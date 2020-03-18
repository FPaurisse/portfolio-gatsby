import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck, faBug, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import s from '../styles/alert.module.css';

import { showAlert } from '../state/app';

const Alert = ({ status, statusText, dispatch }) => {
  const switchAlert = () => {
    switch (status) {
      case 'success':
        return <FontAwesomeIcon className={s.alertIcon} icon={faCheck} />;
      case 'fail':
        return <FontAwesomeIcon className={s.alertIcon} icon={faBug} />;
      default:
        break;
    }
  };

  return (
    <div className={cx(s.Alert, status)}>
      {switchAlert()}
      {statusText}
      <button type="button" className={s.closeAlert} onClick={() => dispatch(showAlert({ status: null, statusText: null }))}>
        <FontAwesomeIcon className={s.closeAlertIcon} icon={faTimes} />
      </button>
    </div>
  );
};

export default connect((state) => ({
  alert: state.app.alert,
}), null)(Alert);
