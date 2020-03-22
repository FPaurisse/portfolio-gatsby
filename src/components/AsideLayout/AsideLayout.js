import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import CloseButton from '../CloseButton/CloseButton';
import SocialLinks from '../SocialLinks/SocialLinks';
import s from './AsideLayout.module.css';

const AsideLayout = ({
  children, asideTitle, closeTitle, closeLink, isAside, currentCategory,
}) => (
  <div className={cx({ [s.AsideLayout]: isAside, [s.AsideLayout__hide]: !isAside })}>
    <CloseButton closeTitle={closeTitle} closeLink={closeLink} currentCategory={currentCategory} />
    <div className={s.wrapper}>
      <h1 className={s.title}>
        {asideTitle}
      </h1>
      {children}
    </div>
    <SocialLinks />
  </div>
);

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(AsideLayout);
