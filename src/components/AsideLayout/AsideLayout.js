import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import CloseAside from '../CloseAside/CloseAside';
import SocialAside from '../SocialAside/SocialAside';
import s from './AsideLayout.module.css';

const AsideLayout = ({
  children, asideTitle, closeTitle, closeLink, isAside,
}) => (
  <div className={cx({ [s.AsideLayout]: isAside, [s.AsideLayout__hide]: !isAside })}>
    <CloseAside closeTitle={closeTitle} closeLink={closeLink} />
    <div className={s.wrapper}>
      <h1 className={s.title}>
        {asideTitle}
      </h1>
      {children}
    </div>
    <SocialAside />
  </div>
);

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(AsideLayout);
