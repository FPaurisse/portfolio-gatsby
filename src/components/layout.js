import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from '../styles/layout.module.css';
import Header from './header';
import Contact from './Contact';
import Credits from './Credits';
import WorkDetails from './WorkDetails';
import Alert from './Alert';
import favicon from '../images/favicon.ico';

import { toggleLoad, toggleWorkDetails } from '../state/app';

const Layout = ({
  children, work, location, isContact, isCredits, isWorkDetails, darkMode, alert, dispatch,
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
    dispatch(toggleWorkDetails(false));
    setInterval(() => {
      dispatch(toggleLoad(false));
    }, 1500);
  }, [dispatch]);

  return (
    <div className={cx('light', { dark: darkMode }, s.Layout, { [s.Layout__contact]: isContact || isCredits || isWorkDetails })}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <section className={cx(s.container, { [s.containerReduce]: isContact || isCredits || isWorkDetails })}>
        {children}
        {alert.status && (
          <Alert status={alert.status} statusText={alert.statusText} />
        )}
      </section>
      <Contact />
      <Credits />
      <WorkDetails work={work} />
    </div>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
  isContact: state.app.isContact,
  isCredits: state.app.isCredits,
  isWorkDetails: state.app.isWorkDetails,
  darkMode: state.app.darkMode,
  alert: state.app.alert,
}), null)(Layout);
