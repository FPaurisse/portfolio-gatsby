import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from '../styles/layout.module.css';
import Header from './header';
import Contact from './Contact';
import Credits from './Credits';
import Alert from './Alert';
import favicon from '../images/favicon.ico';

import { toggleLoad } from '../state/app';

const Layout = ({
  children, location, isContact, isCredits, darkMode, alert, dispatch,
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
    setInterval(() => {
      dispatch(toggleLoad(false));
    }, 1500);
  }, [dispatch]);

  return (
    <div className={cx('light', { dark: darkMode }, s.Layout, { [s.Layout__contact]: isContact || isCredits })}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <section className={cx(s.container, { [s.containerReduce]: isContact || isCredits })}>
        {children}
        {alert.status && (
          <Alert status={alert.status} statusText={alert.statusText} />
        )}
      </section>
      <Contact />
      <Credits />
    </div>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
  isContact: state.app.isContact,
  isCredits: state.app.isCredits,
  darkMode: state.app.darkMode,
  alert: state.app.alert,
}), null)(Layout);
