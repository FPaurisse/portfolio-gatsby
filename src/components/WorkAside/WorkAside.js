import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger, faDiscord } from '@fortawesome/free-brands-svg-icons';
import s from './WorkAside.module.css';

import { toggleWorkAside } from '../../state/app';

const WorkAside = ({ dispatch, isWorkAside, work }) => (
  <div className={cx({ [s.WorkAside]: isWorkAside, [s.WorkAside__hide]: !isWorkAside })}>
    <Link
      to="/works"
      onClick={() => dispatch(toggleWorkAside(false))}
      state={{ currentCategory: work && work.categories[0] }}
      className={cx(s.closeWorkAside)}
    >
      <FontAwesomeIcon className={s.iconCloseWorkAside} icon={faCaretSquareLeft} />
      Close
    </Link>
    <div className={s.wrapper}>
      <h1 className={s.title}>
        {work && work.title}
      </h1>
      <p className={s.text}>
        {work && work.context}
      </p>
      <ul className={s.list}>
        {work && work.categories.map((category) => <li className={s.item}>{category}</li>)}
      </ul>
    </div>
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

export default connect((state) => ({
  isWorkAside: state.app.isWorkAside,
}), null)(WorkAside);
