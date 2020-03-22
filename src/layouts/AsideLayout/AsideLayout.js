import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import CloseButton from '../../components/CloseButton/CloseButton';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import s from './AsideLayout.module.css';

const AsideLayout = ({
  children, vertical, asideTitle, closeTitle, closeLink, isAside, currentCategory,
}) => (
  <div className={cx(
    { [s.AsideLayout]: isAside },
    { [s.AsideLayout__vertical]: vertical },
    { [s.AsideLayout__hide]: !isAside },
  )}
  >
    <CloseButton
      vertical={vertical}
      closeTitle={closeTitle}
      closeLink={closeLink}
      currentCategory={currentCategory}
    />
    <div className={cx(s.wrapper, { [s.wrapper__vertical]: vertical })}>
      <h1 className={cx(s.title, { [s.title__vertical]: vertical })}>
        {asideTitle}
      </h1>
      {children}
    </div>
    <SocialLinks vertical={vertical} />
  </div>
);

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(AsideLayout);
