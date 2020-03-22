import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import cx from 'classnames';
import favicon from '../../images/favicon.ico';
import Alert from '../Alert/Alert';
import Header from '../Header/Header';
import ContactAside from '../ContactAside/ContactAside';
import TermsAside from '../TermsAside/TermsAside';
import CreditsAside from '../CreditsAside/CreditsAside';
import WorkAside from '../WorkAside/WorkAside';
import s from './PageLayout.module.css';

import { toggleLoad, toggleAside } from '../../state/app';

const PageLayout = ({
  children, work, location, isAside, darkMode, alert, dispatch,
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
    <div className={cx('light', { dark: darkMode }, s.PageLayout, { [s.PageLayout__contact]: isAside })}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <section
        className={cx(s.container, { [s.containerReduce]: isAside })}
      >
        {children}
        {alert.status && (
          <Alert status={alert.status} statusText={alert.statusText} />
        )}
      </section>
      {isAside === 'contact' && <ContactAside />}
      {isAside === 'terms' && <TermsAside />}
      {isAside === 'credits' && <CreditsAside />}
      {isAside === 'work' && <WorkAside work={work} />}
    </div>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
  isAside: state.app.isAside,
  darkMode: state.app.darkMode,
  alert: state.app.alert,
}), null)(PageLayout);
