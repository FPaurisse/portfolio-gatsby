import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import cx from 'classnames';
import favicon from '../../images/favicon.ico';
import Alert from '../../components/Alert/Alert';
import Header from '../../components/Header/Header';
import ContactAside from '../../asides/ContactAside/ContactAside';
import TermsAside from '../../asides/TermsAside/TermsAside';
import CreditsAside from '../../asides/CreditsAside/CreditsAside';
import WorkAside from '../../asides/WorkAside/WorkAside';
import s from './PageLayout.module.css';

import { toggleLoad, toggleAside } from '../../state/app';

const PageLayout = ({
  children, vertical, work, currentCategory, location, isAside, darkMode, alert, dispatch,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    dispatch(toggleAside(false));
    setInterval(() => {
      dispatch(toggleLoad(false));
    }, 1500);
  }, [dispatch]);

  return (
    <div className={cx('light', { dark: darkMode }, s.PageLayout)}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <div className={cx(s.wrapper, { [s.wrapper__reduce]: isAside }, { [s.wrapper__vertical]: vertical })}>
        <section
          className={cx(
            s.container, { [s.container__reduce]: isAside }, { [s.container__vertical]: vertical },
          )}
        >
          {children}
          {alert.status && (
          <Alert status={alert.status} statusText={alert.statusText} />
          )}
        </section>
        {isAside === 'contact' && <ContactAside />}
        {isAside === 'terms' && <TermsAside />}
        {isAside === 'credits' && <CreditsAside />}
        {isAside === 'work' && <WorkAside work={work} currentCategory={currentCategory} />}
      </div>
    </div>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
  isAside: state.app.isAside,
  darkMode: state.app.darkMode,
  alert: state.app.alert,
}), null)(PageLayout);
