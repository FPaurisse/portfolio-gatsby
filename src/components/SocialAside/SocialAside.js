import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger, faDiscord } from '@fortawesome/free-brands-svg-icons';
import s from './SocialAside.module.css';

const SocialAside = () => (
  <div className={s.SocialAside}>
    <a aria-label="Messenger" title="Messenger" href="https://m.me/frederic.paurisse" rel="noopener noreferrer" target="_blank" className={s.iconWrapper}>
      <FontAwesomeIcon className={s.icon} icon={faFacebookMessenger} />
    </a>
    <a aria-label="Discord" title="Discord" href="https://discordapp.com/users/676800306306351144" rel="noopener noreferrer" target="_blank" className={s.iconWrapper}>
      <FontAwesomeIcon className={s.icon} icon={faDiscord} />
    </a>
    <a aria-label="Email" title="Email" href="mailto:contact@fredericpaurisse.fr" rel="noopener noreferrer" target="_blank" className={s.iconWrapper}>
      <FontAwesomeIcon className={s.icon} icon={faAt} />
    </a>
  </div>
);

export default SocialAside;
