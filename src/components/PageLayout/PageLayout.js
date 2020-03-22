import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import cx from 'classnames';
import favicon from '../../images/favicon.ico';
import s from './PageLayout.module.css';
import Alert from '../Alert/Alert';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Credits from '../Credits/Credits';
import WorkAside from '../WorkAside/WorkAside';

import { toggleLoad, toggleWorkAside } from '../../state/app';

const PageLayout = ({
  children, work, location, isContact, isCredits, isWorkAside, darkMode, alert, dispatch,
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
    dispatch(toggleWorkAside(false));
    setInterval(() => {
      dispatch(toggleLoad(false));
    }, 1500);
  }, [dispatch]);

  return (
    <div className={cx('light', { dark: darkMode }, s.PageLayout, { [s.PageLayout__contact]: isContact || isCredits || isWorkAside })}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <section className={cx(s.container, { [s.containerReduce]: isContact || isCredits || isWorkAside })}>
        {children}
        {alert.status && (
          <Alert status={alert.status} statusText={alert.statusText} />
        )}
      </section>
      <Contact />
      <Credits />
      <WorkAside work={work} />
    </div>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
  isContact: state.app.isContact,
  isCredits: state.app.isCredits,
  isWorkAside: state.app.isWorkAside,
  darkMode: state.app.darkMode,
  alert: state.app.alert,
}), null)(PageLayout);
