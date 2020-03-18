import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck, faBug,
} from '@fortawesome/free-solid-svg-icons';
import s from '../styles/layout.module.css';
import Header from './header';
import Contact from './Contact';
import favicon from '../images/favicon.ico';

const Layout = ({
  children, location, isContact, alert,
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

  const switchAlert = () => {
    switch (alert.status) {
      case 'success':
        return <FontAwesomeIcon className="alertIcon" icon={faCheck} />;
      case 'fail':
        return <FontAwesomeIcon className="alertIcon" icon={faBug} />;
      default:
        break;
    }
  };

  return (
    <div className={s.Layout}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <section className={cx(s.container, { [s.containerReduce]: isContact })}>
        {children}
        {alert.status && (
          <div className={cx('alert', alert.status)}>
            {switchAlert()}
            {alert.statusText}
          </div>
        )}
      </section>
      <Contact />
    </div>
  );
};

export default connect((state) => ({
  isContact: state.app.isContact,
  alert: state.app.alert,
}), null)(Layout);
